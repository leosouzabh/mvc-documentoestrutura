export class GeraJsonService {
    
    constructor(){
        this._mapaListagemTotalElementos = new Map();
        this._jsonFinal = {
            "nomeGrupo": "",
            "detalhe": {}
        };
        this._paths = [];
        this._stackPath = ["$", "detalhe"];
    }

    geraJson(){        
        this._jsonFinal.nomeGrupo = $("#0-root").data('label');

        var filhos = $("#container-0-root").children();
        
        this._processaItens(filhos);
        console.log(  JSON.stringify(this._jsonFinal)  );
        console.log(  JSON.stringify(this._paths)  );
    }
    
    _processaItens(filhos){
        console.log(filhos);
        $.each( filhos, (i, item)=>{
            if ( $(item).hasClass("listagem") ){
                var campo = this._processaListagem(item);
                this._addObject(campo);

            } else if ( $(item).hasClass("campo") ){
                var campo = this._processaItem(item);
                this._addObject(campo);

            } else {
                var objAgregador = this._processaAgregador($(item).attr('id'));
                this._addObject(objAgregador);
            }			
        });
        
    }
    
    
    _addObject(novoObj){
        let jsonDetalhe = this._jsonFinal['detalhe'];
        let extendido = $.extend({}, jsonDetalhe, novoObj);
        this._jsonFinal['detalhe'] = extendido;
    }

    
    _processaAgregador(id){
        let nomeObj = $(`#${id}`).data('label');
        let out = {};
        out[nomeObj] = {};
        this._stackPath.push(`'${nomeObj}'`);	
        
        $.each( $(`#container-${id}`).children(), (i, item)=>{
            if ( $(item).hasClass("listagem") ){
                let listagem = this._processaListagem(item);
                $.extend(out[nomeObj], out[nomeObj], listagem);			

            } else if ( $(item).hasClass("campo") ){
                let campo = this._processaItem(item);
                $.extend(out[nomeObj], out[nomeObj], campo);

            } else {
                var objAgregador = this._processaAgregador($(item).attr('id'));
                $.extend(out[nomeObj], out[nomeObj], objAgregador);
            }
        });
        this._stackPath.pop();
        return out;
    }


    _processaListagem(listagem){
        let labelGrupo = $(listagem).data('label');
        let out = {}
        out[labelGrupo] = {};
        out[labelGrupo].itens = []

        this._stackPath.push(`'${labelGrupo}'`);	
        
        
        let arrWrapItens = $(`#container-${$(listagem).attr('id')}`).children();
        $.each(arrWrapItens, (i, wrapItem)=>{
            
            let registro = {};
            this._stackPath.push(`itens[${i}]`);            
            $.each($(wrapItem).children(), (i2, item)=>{
                if (i2 > 0){
                    let itemParseado = this._processaItem(item);
                    if (itemParseado){
                        $.extend(registro, itemParseado, itemParseado);
                    }
                }                       
            });            
            out[labelGrupo].itens.push(registro);
            this._stackPath.pop();
        });

        this._stackPath.pop();
        return out;
    }
    

    _processaItem(item){
        
        if ( $(item).hasClass("listagem") ){
            return this._processaListagem(item);

        } else if ( $(item).hasClass("campo") ){
            let campo = $(item).find(".form-control")[0];
            if (campo){
                let label = $(item).data('label');
                let desc = campo.value;

                if ( $(campo).hasClass('campo-data') ){
                    if (campo.value != ""){
                        var dataIso = 'DATA';//moment(campo.value, "DD/MM/YYYY").toISOString();
                        desc = "ISODate("+dataIso+")";
                    }
                }
                this._addPath(label);
                return jQuery.parseJSON(`{"${label}":"${desc}"}`);
            }

        } else {
            return this._processaAgregador($(item).attr('id'));
        }			
        
        
    }
    

    _addPath(id){
        this._paths.push({
            campo:id,
            path: `${this._stackPath.join('.')}.'${id}'`
        });
    }


}

