const pageHeading = document.getElementById("heading")
const BASE_URL = 'http://localhost:3000';

document.addEventListener("DOMContentLoaded", () => {
    fetchQuotes();
}) 

//read- quotes index
function fetchQuotes(){
    fetch(`${BASE_URL}/quotes`)
    .then(resp => resp.json())
    .then(quotes => {
        for (const quote of quotes){
            //debugger 
            console.log("rails object", quote)
            let q = new Quote(quote.id, quote.content)
            console.log("jsObject", q)
            q.renderQuote();
        }
    })

}


//create a new quote

//delete a quote 
