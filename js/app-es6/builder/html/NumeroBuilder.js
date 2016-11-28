import {Builder} from './../_Builder'

export class NumeroBuilder extends Builder{
    
    constructor(elementoNumero){
        super(elementoNumero)
    }
    
    build(readOnly, dadosItmIndexado){
        let id    = super.elemento.id;
        let seq   = super.elemento.seq;
        let label = super.elemento.label;
        
        let html  =  `            
		<div class='row cinza campo' data-label='${label}' data-seq='${seq}'>
			<div class='col-md-4' id='label-texto-${id}'> ${label} ${super.tagObrigatorioLabel()}</div>
			<div class='col-md-8'>
				<input type='text'
                    style='text-align:right'
                    class='form-control'
                    ${super.tagObrigatorioInput()}
                    ${super.getReadOnlyHtml(readOnly)}
                    ${super.getIdHtml(id, dadosItmIndexado)}" />		
			</div>
		</div>
        `;
        
        return {
            html:html
        };
        
    }
    
}