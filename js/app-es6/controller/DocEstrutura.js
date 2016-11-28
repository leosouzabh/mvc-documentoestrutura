import {AgregadorBuilder} from '../builder/grupo/AgregadorBuilder';
import {ListagemBuilder}  from '../builder/grupo/ListagemBuilder';

import {WriterService} from '../service/WriterService';
import {RenderService} from '../service/RenderService';

import {Elemento} from '../constantes/Elemento';

import {JsonUtil} from '../util/JsonUtil';

class DocEstrutura{
    
    constructor(){
        this._mapaListagemTotalElementos = new Map();        
    }
    
    
    iniciaConstrucao(jsonEstrutura, readOnlyFields){
        this._objEstrutura = JSON.parse(jsonEstrutura);
        this._readOnlyFields = readOnlyFields;
        
        $("#container-form").empty();
        this._renderAgregador('container-form', this._objEstrutura);
        
    }    
        

    _renderAgregador(idContainer, agregador, dadosItmIndexado){
        let write = new WriterService(idContainer);
        let agregadorView = new AgregadorBuilder(agregador).build(dadosItmIndexado);
        
        write.wr(agregadorView.html);        
        this._renderItens(agregadorView.idContainerItens, agregador.itens, dadosItmIndexado);
    }
    
    
    _renderListagem(idContainer, listagem, dadosItmIndexado){
        let write = new WriterService(idContainer);
        var totalItens = this._getTotalItensListagem(listagem.id);
        let builder = new ListagemBuilder(listagem);      
        
        
        
        let listagemView = builder.build(this._readOnlyFields, totalItens, dadosItmIndexado);
        write.wr(listagemView.html, ()=>{
            $(`#${listagemView.idBotaoNovo}`).on('click', (evt)=> {
                this.adicionaItemLista(listagem.id);
            });
        });
        
        
        for (var idxEl=0; idxEl<totalItens; idxEl++){
            let idItemCorrente = `wrap-componentes-${listagem.id}-${idxEl}`
			this._renderItens(idItemCorrente, listagem.itens, this._montaDadosItmIndexado(listagem.id,idxEl));
            
            let idWrapCorrente = `wrap-item-${listagem.id}-${idxEl}`
            let botaoDeleteView = builder.buildBotaoDelete(idxEl);
            
            new WriterService(idWrapCorrente).wr(botaoDeleteView.html, ()=>{
                $(`#${botaoDeleteView.idBotaoDelete}`).on('click', (evt)=> this.removerItens(listagem.id, botaoDeleteView.indice));
            });            
		}        
    }
    
    
    _montaDadosItmIndexado(idListagem, idxEl){
        return {idListagem:idListagem, posicaoIndice:idxEl}
    } 
    
    
    adicionaItemLista(idListagem){
        let indiceNovoElemento = this._getProximoSequencial(idListagem);
		let listagem = JsonUtil.findListagem(this._objEstrutura, idListagem);
		let builder = new ListagemBuilder(listagem);
        
		new WriterService(`container-${idListagem}`)
            .wr(builder.buildContainerItem(indiceNovoElemento));
        
        let idItemCorrente = `wrap-componentes-${idListagem}-${indiceNovoElemento}`;
        this._renderItens(idItemCorrente, listagem.itens, this._montaDadosItmIndexado(listagem.id, indiceNovoElemento));        
        
        let idWrapCorrente = `wrap-item-${listagem.id}-${indiceNovoElemento}`;        
        let botaoDeleteView = builder.buildBotaoDelete(indiceNovoElemento);
        
        new WriterService(idWrapCorrente).wr(botaoDeleteView.html, ()=>{
            $(`#${botaoDeleteView.idBotaoDelete}`).on('click', (evt)=> this.removerItens(listagem.id, botaoDeleteView.indice));
        });
	};
        
    removerItens(idListagem, indice){
        var idContainer = "wrap-item-"+idListagem+"-"+indice;
		var totalItens = this._mapaListagemTotalElementos.get(idListagem);
		this._mapaListagemTotalElementos.set(idListagem, totalItens-1)
        
		$("#"+idContainer).remove();
		this.reorganizaIndiceIdsListagem(idListagem);
    }
    
    reorganizaIndiceIdsListagem(idListagem){
		$.each($("#container-"+idListagem).children(), function(i, item){
			$.each($(item).find(".form-control"), function(i2, input){
				var arr = $(input).attr('id').split("-");
				arr[1] = i;
				$(input).attr('id', arr.join('-'));
			} )
		})				
	}

    _renderItens(idContainer, listaItens, dadosItmIndexado){
        
        console.log(idContainer);
        
        listaItens.forEach(item => {            
            if ( item.tipo == Elemento.tipo.AGREGADOR ){
                this._renderAgregador(idContainer, item, dadosItmIndexado);
            
            } else  if ( item.tipo == Elemento.tipo.LISTAGEM ){
                this._renderListagem(idContainer, item, dadosItmIndexado);

            } else {
                let htmlRender = new RenderService(item, this._readOnlyFields, dadosItmIndexado, new WriterService(idContainer));
                 
                switch (item.tipo) {
                case Elemento.tipo.TEXTO:
                    htmlRender.texto();
                    break;
                        
                case Elemento.tipo.LISTA:
                    htmlRender.lista();
                    break;
                    
                case Elemento.tipo.NUMERO:
                    htmlRender.numero();
                    break;
                        
                case Elemento.tipo.MOEDA:
                    htmlRender.moeda(); 
                    break;
                        
                case Elemento.tipo.DATA:
                    htmlRender.data();
                    break;
                        
                default:
                    console.error("Desculpe, estamos sem nenhuma " + item.tipo + ".");
                }
                
            }

        });
    }
    
    
    _getTotalItensListagem(idListagem){
        if ( this._mapaListagemTotalElementos.get(idListagem) == null ){
			this._mapaListagemTotalElementos.set(idListagem, 1);
		} 		
		return this._mapaListagemTotalElementos.get(idListagem);
    }
    
    _getProximoSequencial(idListagem){
        var indiceNovoElemento = this._mapaListagemTotalElementos.get(idListagem);
		this._mapaListagemTotalElementos.set(idListagem, indiceNovoElemento+1);
        return indiceNovoElemento;
    }
    
    

}

let docEstruturaController = new DocEstrutura();

export function currentInstance(){
    return docEstruturaController;
}