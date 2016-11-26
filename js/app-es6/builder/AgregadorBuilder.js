import {Builder} from './_Builder'

export class AgregadorBuilder extends Builder{
    
    constructor(agregador){
        super(agregador)
    }
    
    build(){
        let id    = super.elemento.id;
        let seq   = super.elemento.seq;
        let label = super.elemento.label;         
        let html  =  `
            <div class='clearfix nivel1 agragador' id='${id}' data-seq='${seq}' data-label='${label}'>
                <h3 class='titulo-agregador clearfix'>
                    <a data-id='${id}' class='link-agregador' id='link-${id}'>${label}</a>
                </h3>
                <div class='container-sortable' id='container-${id}'></div
            </div>
        `;
        
        return {
            idContainerItens: `container-${id}`,
            html:html
        }
        
    }
    
}