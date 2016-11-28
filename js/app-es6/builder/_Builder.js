export class Builder {
    
    constructor(elemento){
        this._elemento = elemento;
    }
    
    tagObrigatorioLabel(){
        return this._elemento.obrigatorio ? "*" : "";
    }
    
    tagObrigatorioInput(){
        return this._elemento.obrigatorio ? "required" : "";
    }
    
    getIdHtml(idElemento, dadosItmIndexado){
        var retornoId = `id='${idElemento}'`;
		if (dadosItmIndexado){
            retornoId = `id='${idElemento}-${dadosItmIndexado.posicaoIndice}-${dadosItmIndexado.idListagem}'`;
		}
		return retornoId;
    }
    
    getReadOnlyHtml(readOnly){
		var propReadOnly = "";
		if (readOnly == true){
			propReadOnly = "readonly='readonly'"
		}
		return propReadOnly;
	}
    getDisabledHtml(readOnly){
		var propDisabled = "";
		if (readOnly == true){
			propDisabled = "disabled='disabled'"
		}
		return propDisabled;
	}
    
    
    get elemento(){
        return this._elemento;
    }
    
    
}
