document.addEventListener("onload", getQuote);
const quoteButton = document.querySelector('.new-quote'); 
quoteButton.addEventListener('click', getQuote);

const endpoint = "https://zoo-animal-api.herokuapp.com/animals/rand";

async function getQuote(){
  //console.log("test click worked");
  let text = await fetch(endpoint);
  let response = await text.text();
  // .then(text => text.text());
  //let message = response['message'];

  let json_response = JSON.parse(response);
  console.log(json_response)
  // console.log(json_response);
  //console.log(json_response['name','latin_name']);
}

displayQuote(json_response);

function displayQuote(object){
    //const quoteBox = document.querySelector("#js-quote-text");
    //console.log('display q working');
    //quoteBox.innerText(x);

   // const textMessage = document.createTextNode(x);
    
   // quoteBox.appendChild(textMessage);
    document.getElementById('js-quote-text').textContent = object['animal'];
    document.getElementById('latin-name').textContent = object['latin_name'];
    document.getElementById('animal-habitat').textContent = object['habitat'];
    document.getElementById('geo-range').textContent = object['geo_range'];
    document.getElementById('animal-diet').textContent = object['diet'];

}

getQuote();