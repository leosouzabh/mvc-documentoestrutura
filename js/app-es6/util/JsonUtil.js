import {Elemento} from '../constantes/Elemento';

export class JsonUtil {
    
    static _find(elementos, tipo, id){        
		for(var x=0; x<elementos.length; x++){
			var e = elementos[x];

			if (e.tipo == tipo && e.id == id){
                return e;
				
			} else {
				if (e.itens){
					var grupo = JsonUtil._find(e.itens, tipo, id);
					if (grupo != null){
						return grupo;
					}
				}
			}
		}
        return null;
    }
    
    
    static findListagem(rootJson, id){
        return JsonUtil._find([rootJson], Elemento.tipo.LISTAGEM, id);
	}
    

}

