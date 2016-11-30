import {TextoBuilder}     from '../builder/html/TextoBuilder';
import {ListaBuilder}  from '../builder/html/ListaBuilder';
import {DataBuilder}  from '../builder/html/DataBuilder';
import {NumeroBuilder}  from '../builder/html/NumeroBuilder';
import {MoedaBuilder}  from '../builder/html/MoedaBuilder';


export class RenderService {
    
    constructor(item, readOnlyFields, dadosIndexado, writeService){
        this._write = writeService;
        this._readOnlyFields = readOnlyFields;
        this._dadosIndexado = dadosIndexado;
        this._item = item;            
    }
    
    texto(){
        this._write.wr(this._doRender(new TextoBuilder(this._item)).html);
    }
    lista(){
        this._write.wr(this._doRender(new ListaBuilder(this._item)).html);
    }
    data(){
        this._write.wr(this._doRender(new DataBuilder(this._item)).html);
    }
    numero(){
        this._write.wr(this._doRender(new NumeroBuilder(this._item)).html);
    }
    moeda(){
        this._write.wr(this._doRender(new MoedaBuilder(this._item)).html);
    }     
        
    _doRender(builder){
        return builder.build(this._readOnlyFields, this._dadosIndexado)
    }

}

