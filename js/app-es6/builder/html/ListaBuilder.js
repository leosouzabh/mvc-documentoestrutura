import {Builder} from './../_Builder'

export class ListaBuilder extends Builder{
    
    constructor(elementoLista){
        super(elementoLista)
    }
    
    build(readOnly, dadosItmIndexado){
        let id    = super.elemento.id;
        let seq   = super.elemento.seq;
        let label = super.elemento.label;    
        
        let html  =  `
		<div class='row cinza campo' data-label='${label}'>
			<div class='col-md-4' id='label-texto-'${id}'>${label} ${super.tagObrigatorioLabel()}</div>
			<div class='col-md-8'>
				<div class='input-group' style='width:100%'>
					<select class='form-control placeholder'
                        ${super.getDisabledHtml()}
                        ${super.getIdHtml(id, dadosItmIndexado)}
                        ${super.tagObrigatorioInput()}>
                        
                        <option value>Selecione...</opcao>
                        ${this._buildListaOpcoes()}
                    </select>
				</div>
			</div>
		</div>
        `;
        
        return {
            html:html
        };
        
    }

    _buildListaOpcoes(){
        var opcoes = "";
		super.elemento.opcoes.forEach(item => opcoes += `<option>${item}</opcao>`);
        return opcoes;
    }
    
}