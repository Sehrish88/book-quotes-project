console.log("testing...")
const pageHeading = document.getElementById("heading")

const BACKEND_URL = 'https://localhost:3000';
fetch(`${BACKEND_URL}/test`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));