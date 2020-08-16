const pageHeading = document.getElementById("heading")
const BASE_URL = 'http://localhost:3000';

document.addEventListener("DOMContentLoaded", () => {
    createQuoteForm();
    fetchQuotes();
}) 

//read- quotes index
function fetchQuotes(){
    fetch(`${BASE_URL}/quotes`)
    .then(resp => resp.json())
    .then(quotes => {
        for (const quote of quotes){
            //debugger 
            //console.log("rails object", quote)
            let q = new Quote(quote.id, quote.content, quote.book) 
            //console.log("jsObject", q)
            q.renderQuote();
        }
    })

}


//create a new quote
//create form and add eventlistener to that form,o nce form is submitted, make a fetch 'post' request, do something with returned object

function createQuoteForm(){
    let quoteForm = document.getElementById("quotes-form")
    quoteForm.innerHTML +=
    `
    <form id="quote-form"> 
    <b>Quote:</b> <input type="text" id="content" value=" ">
    <b>Book Title:</b> <input type="text" id="title" value =" ">
    <b>Author:</b> <input type="text" id="author" value=" ">
    <b>Genre:</b> <input type="text" id="genre" value=" ">
    <input type="submit" value="Create Quote">

    </form><br><br>
    `
    //let quoteForm = document.getElementById("quotes-form")
    quoteForm.addEventListener("submit", quoteFormSubmission)
    

} 

function quoteFormSubmission(){
    event.preventDefault();
    let content = document.getElementById("content").value 
    let title = document.getElementById("title").value 
    let author = document.getElementById("author").value 
    let genre = document.getElementById("genre").value 
    let form = document.getElementById("quote-form")

    //console.log(content, title, author, genre)
    let quote = {
        content: content,
        title: title,
        author: author,
        genre: genre 

    }
    
    fetch(`${BASE_URL}/quotes`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json' 
        },
        body: JSON.stringify(quote) 
     
    })
    .then(resp => resp.json())

    .then(quote => {
       console.log(quote)
        let q = new Quote(quote.id, quote.content, quote.book)
        q.renderQuote();
    })
    form.reset();
} 

//delete a quote 


function deleteQuote(){
    //debugger;
    let quoteId = parseInt(event.target.dataset.id)
    let quoteItem = event.target.parentElement

    fetch(`${BASE_URL}/quotes/${quoteId}`, {
        method: 'DELETE'
    })
    quoteItem.remove()
    
    //debugger 
    

};

