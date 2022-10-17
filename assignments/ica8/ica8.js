let body = document.querySelector('div');
body.addEventListener('click',giveAlert);

function giveAlert() {
    alert('this is an alert');
    }

    document.getElementById("h2").addEventListener("click", myFunction);

var button = document.querySelector('button');
var box = document.getElementsByClassName('box6');

button.onclick = function changeColor(){
  box.style.background ="blue";
}