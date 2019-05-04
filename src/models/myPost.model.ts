export class MyPost  {
    id: number;
    title: string;
    content: string;
    loveIts: number;
    hateIts: number;
    created_at: Date;

    constructor(i:number, t: string,c: string) {
        this.id = i;
        this.title = t;
        this.content = c;
        this.loveIts = 0;
        this.hateIts = 0;
        this.created_at = new Date();
    }
}