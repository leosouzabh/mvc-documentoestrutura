import {AgregadorBuilder} from '../builder/grupo/AgregadorBuilder';
import {ListagemBuilder}  from '../builder/grupo/ListagemBuilder';

import {WriterService} from '../service/WriterService';
import {RenderService} from '../service/RenderService';
import {NovoItemService} from '../service/NovoItemService';
import {GeraJsonService} from '../service/GeraJsonService';


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
        this._renderAgregador('container-form', this._objEstrutura, this._newDadosIndexado(null, 0));
    }     
    
    montaJson(){
        new GeraJsonService().geraJson();
    }
        

    _renderAgregador(idContainer, agregador, dadosIndexado){
        let write = new WriterService(idContainer);
        let agregadorView = new AgregadorBuilder(agregador).build(dadosIndexado);
        write.wr(agregadorView.html);        
        
        dadosIndexado.idPai = agregadorView.idBuild;
        this._renderItens(agregadorView.idContainerItens, agregador.itens, dadosIndexado);
    }
        
    
    _renderListagem(idContainer, listagem, dadosIndexado){
        let write = new WriterService(idContainer);
        let builder = new ListagemBuilder(listagem, dadosIndexado);
        
        let idBuild = builder.getId(listagem.id, dadosIndexado);
        var totalItens = this._getTotalItensListagem(idBuild);
        
        let listagemView = builder.build(this._readOnlyFields, totalItens, dadosIndexado);
        write.wr(listagemView.html);
        
        this._bindEvents();
        
        
        for (var idxEl=0; idxEl<totalItens; idxEl++){
            let idWrapItem = builder.buildWrapItemId(idxEl);
            this._renderItens(idWrapItem, listagem.itens, this._newDadosIndexado(listagemView.idListagem,idxEl));
		}        
    }
    
    _renderItens(idContainer, listaItens, dadosIndexado){
        listaItens.forEach(item => {            
            if ( item.tipo == Elemento.tipo.AGREGADOR ){
                this._renderAgregador(idContainer, item, dadosIndexado);
            
            } else  if ( item.tipo == Elemento.tipo.LISTAGEM ){
                this._renderListagem(idContainer, item, dadosIndexado);

            } else {
                let htmlRender = new RenderService(item, this._readOnlyFields, dadosIndexado, new WriterService(idContainer));
                 
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
    
    
    _newDadosIndexado(idPai, indice){
        return {idPai:idPai, indice:indice}
    } 
    
    
    adicionaItemLista(botao){
        let idBuild = $(botao.target).data('id-listagem');
        let novoItemService = new NovoItemService(idBuild);
        novoItemService.geraNovoItem();
        this._bindEvents();
        
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
    
    
    _bindEvents(){
        $('.btn-novo-item').off('click');
        $('.btn-novo-item').on('click', (evt)=> this.adicionaItemLista(evt) );
        
        $('.btn-delete-item').off('click');
        $('.btn-delete-item').on('click', (evt)=> this.removerItens(evt) );
    }
    

}

let docEstruturaController = new DocEstrutura();

export function currentInstance(){
    return docEstruturaController;
}