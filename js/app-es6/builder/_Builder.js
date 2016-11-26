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
    
    get elemento(){
        return this._elemento;
    }
    
    
}