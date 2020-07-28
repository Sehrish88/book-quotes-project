class Quote{
    constructor(id, content){
        
        this.id = id
        this.content = content;
        
       
    }
    //render user instance method
    renderQuote(){
        let quotesDiv = document.getElementById("quotes-container")
        
        quotesDiv.innerHTML +=
        `
        <ul>
        <li> ${this.id} - ${this.content}</li>
        </ul>
        `
    }
}