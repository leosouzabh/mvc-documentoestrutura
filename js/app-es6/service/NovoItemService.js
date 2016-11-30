import {TextoBuilder}     from '../builder/html/TextoBuilder';
import {ListaBuilder}  from '../builder/html/ListaBuilder';
import {DataBuilder}  from '../builder/html/DataBuilder';
import {NumeroBuilder}  from '../builder/html/NumeroBuilder';
import {MoedaBuilder}  from '../builder/html/MoedaBuilder';


export class NovoItemService {
    
    constructor(idListagem){
        this._idListagem = idListagem;
        this._idContainer = `#container-${idListagem}`;
    }


    geraNovoItem(){
        let novoItem = this._clonaItem();
        
        this._alteraNumeroSequencial(novoItem);
        this._limpaItensEmListagens(novoItem);
        this._limpaValoresEmInputs(novoItem);
        this._alteraIdsChildren(novoItem);
        
        $(this._idContainer).append(novoItem);        
    }


    _clonaItem(){
        let idItemRef = `#wrapitem-${this._idListagem}-0`;
        return $(idItemRef).clone();
    }


    _alteraNumeroSequencial(novoItem){
        let totalFilho = this._getTotalItens();
        $(novoItem.children()[0]).find(".indice-item").text(`#${totalFilho+1}`);
    }


    _limpaItensEmListagens(novoItem){
        let listagensChildren = novoItem.find(".listagem");
        if (listagensChildren.length > 0){
            $.each(listagensChildren, (idx, listagem)=>{
                let itensListagemChildren = $(listagem).find(`#container-${listagem.id}`).children();
                $.each(itensListagemChildren, (idx2, itemDaListagem)=> {if (idx2 > 0) itemDaListagem.remove()} );
            });
        }
    }


    _alteraIdsChildren(novoItem){
        let idOriginal = $(`#${this._idListagem}`).data('id');
        let fragIdOriginal = `0-${idOriginal}`;
        let fragNovoId = `${this._getTotalItens()}-${idOriginal}`;
        
        this._doUpdateIds([novoItem], fragIdOriginal, fragNovoId);
    }
    _doUpdateIds(listaItens, fragIdOriginal, fragNovoId){
        $.each(listaItens, (idx, item)=>{            
            let id = $(item).attr('id');
            if (id){
                $(item).attr('id', id.replace(fragIdOriginal, fragNovoId));
            }
            
            let dataId = $(item).data('id-listagem');
            if (dataId){
                console.log('alterou data');
                $(item).data('id-listagem', dataId.replace(fragIdOriginal, fragNovoId))
            }
            
            if ($(item).children().length > 0){
                this._doUpdateIds($(item).children(), fragIdOriginal, fragNovoId);
            }
        })
    }
    


    _limpaValoresEmInputs(novoItem){
        novoItem.find("input.form-control").val("");
    }


    _getTotalItens(){
        return $(this._idContainer).children().length;
    }
    
}