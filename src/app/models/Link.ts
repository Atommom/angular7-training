export class Link {
    private url:string;
    private text:string;

    public constructor (url:string, text:string){
        this.url = url;
        this.text = text;
    }

    public getUrl(){
        return this.url;
    }

    public getText(){
        return this.text;
    }

    public setUrl(url:string){
        this.url = url;
    }

    public setText(text:string){
        this.text = text;
    }

}