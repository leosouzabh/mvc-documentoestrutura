import {Builder} from './../_Builder'

export class ListagemBuilder extends Builder{
    
    constructor(listagem){
        super(listagem)
    }
    
    build(readOnly, totalItens, dadosItmIndexado){
        
        let id    = super.elemento.id;
        let seq   = super.elemento.seq;
        let label = super.elemento.label;    
        
        
        let idBtnNovo = `btnNovo-${id}`;
        let btnNovoItem = "";
		if (!readOnly){
			btnNovoItem = `<a class='btn btn-xs' id='${idBtnNovo}'><i class='fa fa-plus'></i> Novo</a>`;
		}
        
        let html  =  `
            <div class='clearfix nivel1 agragador listagem' id='${id}' data-seq='${seq}' data-label='${label}'>
            	<h3 class='titulo-agregador clearfix'>
            		<a data-id='${id}' class='link-agregador' id='link-${id}'><i class='fa fa-bars'></i>${label}</a>
                    ${btnNovoItem}
            	</h3>
                <div class='container-sortable' id='container-${id}'>
                    ${this.buildListaContainerItens(totalItens)}
            	</div>
            </div>            
        `;
        
        return {
            idBotaoNovo: idBtnNovo,
            html:html
        }
        
    }
    
    buildListaContainerItens(total){
        let out = "";
        let x;
        for (x=0; x<total; x++){
            out += this.buildContainerItem(x);
        }
        return out;
    }
    
    buildContainerItem(indice){
        return `
            <div class="wrap-item" id="wrap-item-${super.elemento.id}-${indice}" >
                <div class="row cinza campo" style="border-bottom:1px solid #dcdbdb">
                    <div class="col-md-12">
                        #${indice+1}
                    </div>
                </div>
                <div class="wrap-componentes" id="wrap-componentes-${super.elemento.id}-${indice}"></div>                    
            </div>`;
    }
    
    buildBotaoDelete(indice){
        let idBtnDelete = `btnDelete-${super.elemento.id}-${indice}`;
        let html = `
            <div class="row cinza campo">
                <div class="col-md-12" style="text-align:right">
                    <a class="btn btn-danger btn-xs" id="${idBtnDelete}">Excluir</a>
                </div>
            </div>`;
        
        return {
            html:html,
            idBotaoDelete:idBtnDelete,
            indice:indice
        }
    }
    
    
    
}