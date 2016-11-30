import {Builder} from './../_Builder'

export class ListagemBuilder extends Builder{
    
    constructor(listagem, dadosIndexado){
        super(listagem);
        this._dadosIndexado = dadosIndexado;
            
    }
    
    build(readOnly, totalItens){
        
        
        let id    = super.elemento.id;
        let seq   = super.elemento.seq;
        let label = super.elemento.label;    
        
        let idBuild = super.getId(id, this._dadosIndexado);
        let idBtnNovo = `btnNovo-${id}`;
        let btnNovoItem = "";
		if (!readOnly){
			btnNovoItem = `<a class='btn btn-xs btn-novo-item' data-id-listagem='${idBuild}' id='${idBtnNovo}'><i class='fa fa-plus'></i> Novo</a>`;
		}
        
        let html  =  `
            <div class='clearfix nivel1 agragador listagem' data-id='${id}' id='${idBuild}' data-seq='${seq}' data-label='${label}'>
            	<h3 class='titulo-agregador clearfix'>
            		<a data-id='${id}' class='link-agregador'><i class='fa fa-bars'></i>${label}</a>
                    ${btnNovoItem}
            	</h3>
                <div class='container-sortable' id='container-${idBuild}'>
                    ${this.buildListaContainerItens(totalItens)}
            	</div>
            </div>            
        `;
        
        return {
            idListagem: idBuild,
            idBotaoNovo: idBtnNovo,
            html: html            
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
        let botaoDelete =  `<a class="btn btn-danger btn-xs btn-outline" id="${this.buildId('btnDelete')}">Excluir</a>`;
        return `
            <div class="wrap-item" id="${this.buildWrapItemId(indice)}">
                <div class="row cinza campo header-item">
                    <div class="col-xs-6 indice-item">#${indice+1}</div>                        
                    <div class="col-xs-6" style="text-align:right">
                        ${botaoDelete} 
                    </div>
                </div>                
            </div>`;
    }
    
    buildWrapItemId(indice){
        return `${this.buildId('wrapitem')}-${indice}`;
    }
    buildId(prefixo){
        return `${prefixo}-${this.getId(super.elemento.id, this._dadosIndexado)}`;
    }
    
    
}