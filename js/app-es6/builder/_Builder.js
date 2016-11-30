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
    
    getIdHtml(idElemento, dadosIndexado){
        return `id="${this.getId(idElemento, dadosIndexado)}"`;
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
    
    getId(idElemento, dadosIndexado){  
        let arr = [];
        if (dadosIndexado.idPai){
            arr.push(dadosIndexado.idPai);
        }
        arr.push(dadosIndexado.indice);
        arr.push(idElemento);        
        return arr.join("-");
    }
    
    
}
