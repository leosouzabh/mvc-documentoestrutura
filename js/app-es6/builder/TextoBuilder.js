import {Builder} from './_Builder'

export class TextoBuilder extends Builder{
    
    constructor(elementoTexto){
        super(elementoTexto)
    }
    
    build(){
        let id    = super.elemento.id;
        let seq   = super.elemento.seq;
        let label = super.elemento.label;         
        let html  =  `            
		<div class='row cinza campo' data-label='${label}' data-seq='${seq}'>
			<div class='col-md-4' id='label-texto-${id}'> ${label} ${super.tagObrigatorioLabel()}</div>
			<div class='col-md-8'>
				<input type='text' class='form-control' ${super.tagObrigatorioInput()} />		
			</div>
		</div>
        `;
        
        return {
            idContainerItens: `container-${id}`,
            html:html
        };
        
    }
    
}