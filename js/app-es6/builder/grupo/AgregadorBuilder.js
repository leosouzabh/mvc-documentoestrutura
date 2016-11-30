import {Builder} from './../_Builder'

export class AgregadorBuilder extends Builder{
    
    constructor(agregador){
        super(agregador)
    }
    
    build(dadosIndexado){
        let id     = super.elemento.id;
        let seq    = super.elemento.seq;
        let label  = super.elemento.label;                 
        
        
        let idBuild = super.getId(id, dadosIndexado);
        let idContainerItens = `container-${idBuild}`;
        
        let html  =  `
            <div class='clearfix nivel1 agragador' id='${idBuild}' data-id='${id}' data-seq='${seq}' data-label='${label}'>
                <h3 class='titulo-agregador clearfix'>
                    <a data-id='${id}' class='link-agregador' id='link-${id}'>${label}</a>
                </h3>
                <div class='container-sortable' id='${idContainerItens}'></div
            </div>
        `;
        
        return {
            idContainerItens: idContainerItens,
            html:html,
            idBuild:idBuild
        }
        
    }
    
}