let body = document.querySelector('div');
body.addEventListener('click',giveAlert);

function giveAlert() {
    alert('this is an alert');
    }

    document.getElementById("h2").addEventListener("click", myFunction);

$("h3").on("mouseover"),function(){
  console
}

let jellybutton = document.querySelector('button');
let jellypic = document.querySelector("Jelly");
let jellyStatus = false;

jellypic.style.marginLeft = "-300px";

function clickForJelly() {
  if (jellyStatus == false){
    jellypic.style.marginLeft = "0px";
    jellyStatus == true;
  }
  else if (jellyStatus == true){
    jellypic.style.marginLeft = "-300px";
    jellyStatus == false;
  }

}

jellybutton.onclick = clickForJelly;


const h3 = document.querySelector('h3');

function h3mouse() {

}

button.addEventListener("mouseover",h3mouse)