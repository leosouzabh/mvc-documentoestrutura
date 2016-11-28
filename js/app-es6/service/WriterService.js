export class WriterService {
    
    constructor(selector){
        this._selector = selector;
    }
    
    wr(html){
        this.write(html, null);
    }
    wr(html, callback){
        $(`#${this._selector}`).append(html);        
        if (callback){
            callback();
        }
    }
    

}

