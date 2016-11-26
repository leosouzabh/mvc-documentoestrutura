import {AgregadorView} from '../view/AgregadorView';
import {AgregadorBuilder} from '../builder/AgregadorBuilder';
import {TextoBuilder} from '../builder/TextoBuilder';

import {Elemento} from '../constantes/Elemento';

export class DocEstrutura{
    
    constructor(jsonEstrutura){
        this._objEstrutura = JSON.parse(jsonEstrutura);
        this._canvas = $("#container-form");
    }
    
    
    iniciaConstrucao(){
        
        this._canvas.empty();
        
        let div = $(`<div></div>`);
        div.append(this._renderAgregadorInicial(this._objEstrutura));        
        this._canvas.append(div);
        
    }    

    _renderAgregadorInicial(agregador){
        let agregadorView = new AgregadorBuilder(agregador).build();
        let htmlAgregador    = agregadorView.html;
        let idContainerItens = agregadorView.idContainerItens;        
        var htmlItens = this._renderItens(agregador.itens);   
        
        htmlAgregador = $(htmlAgregador).append(htmlAgregador);
        $(htmlAgregador).find(`#${idContainerItens}`).append(htmlItens);        
        return htmlAgregador;
    }

    _renderCampoTexto(texto){
        return new TextoBuilder(texto).build().html;        
    }
    
    _renderItens(listaItens){
        
        let html = "";
        listaItens.forEach(item => {
            
            if ( item.tipo == Elemento.tipo().AGREGADOR ){
                //html = this._renderAgregadorInicial(item);

            } else if ( item.tipo == Elemento.tipo().TEXTO ){
                html += this._renderCampoTexto(item);
            }

        });
        console.log('html de retorno ' + html);
        return html;
    }

}

