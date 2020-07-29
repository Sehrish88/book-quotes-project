class Quote{
    constructor(id, content, book){
        
        this.id = id
        this.content = content;
        this.book = book
        
       
    }
    //render user instance method
    renderQuote(){
        let quotesDiv = document.getElementById("quotes-container")
        
        quotesDiv.innerHTML +=
        `
        <ul>
        <li> ${this.id} - <i><b>${this.content}</i></b> - (<b>${this.book.title}</b>, ${this.book.author}, ${this.book.genre}) </li>
        </ul>
        `
    } 
}