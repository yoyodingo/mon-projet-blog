export class MyPost  {
    title: string;
    content: string;
    loveIts: number;
    hateIts: number;
    created_at: Date;

    constructor(t: string,c: string) {
        this.title = t;
        this.content = c;
        this.loveIts = 0;
        this.hateIts = 0;
        this.created_at = new Date();
    }
}