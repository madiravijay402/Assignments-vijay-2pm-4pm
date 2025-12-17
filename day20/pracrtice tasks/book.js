const book={
    title:"Dangerous",
    auther:"vijay",
    pages:85
}
console.log(book);
// console.log(book.auther);

class vj{
    constructor(title,auther,pages){
        this.title=title;
        this.auther=auther;
        this.pages=pages;
    }
    den(){
        console.log(`the details of the book are name of the auther: ${this.auther} name of the book${this.title}no.of.pages${this.title.pages}`);
    }
}
 let a=new vj("vijay","dangerous",67);
 a.den();