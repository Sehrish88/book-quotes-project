class Quote{
    constructor(id, content, book){
        
        this.id = id
        this.content = content;
        this.book = book
        
       
    }
    //render user instance method
    renderQuote(){
        let quotesDiv = document.getElementById("quotes-container")
        
       const addedquotes =  
        `
        <ul>
        <li id="quote"> ${this.id} - <i><b>${this.content}</i></b> - (<b>${this.book.title}</b>, ${this.book.author}, ${this.book.genre}) </li>
        </ul>
        `
        quotesDiv.innerHTML +=  addedquotes

        console.log("somehting is hppening")
        
    } 
} 