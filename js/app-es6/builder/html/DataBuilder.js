import {Builder} from './../_Builder'

export class DataBuilder extends Builder{
    
    constructor(elemento){
        super(elemento)
    }
    
    build(readOnly, dadosItmIndexado){
        let id    = super.elemento.id;
        let seq   = super.elemento.seq;
        let label = super.elemento.label;
        
        let html  =  `            
        <div class='row cinza campo' data-label='${label}'>
			<div class='col-md-4' id='label-data-${id}'> ${label} ${super.tagObrigatorioLabel()}</div>
			<div class='col-md-8'>
				<div class='input-group date'>
					<span class='input-group-btn'>
						<a class='btn btn-white'><i class='fa fa-calendar'></i></a>
					</span>
					<input type='text' class='form-control campo-data'
						style='position: relative; z-index: 100000;'
                        ${super.tagObrigatorioInput()}
                        ${super.getReadOnlyHtml(readOnly)}
                        ${super.getIdHtml(id, dadosItmIndexado)}" >
				</div>
			</div>
		</div>`;
        
        return {html:html};        
    }
    
}