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
    <form> 
    Quote: <input type="text" id="content" value=" ">
    Book Title: <input type="text" id="title" value =" ">
    Author: <input type="text" id="author" value=" ">
    Genre: <input type="text" id="genre" value=" ">
    <input type="submit" value="Create Quote">
    <button type="reset">reset</button>
    </form>
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
} 

//delete a quote 



// let deleteButtons = document.getElementsByClassName("delete-bttn")

// for (const button of deleteButtons){
//     button.addEventListener("click", () => {
//         debugger;
//     })
// };

function deleteQuote(){
    //debugger;
    let quoteId = parseInt(event.target.dataset.id)

    fetch(`${BASE_URL}/quotes/${quoteId}`, {
        method: 'DELETE'
    })

    this.location.reload()

};

