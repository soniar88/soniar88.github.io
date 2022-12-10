var character = document.getElementById("character");
var block = document.getElementById("block");

function jump(){
    if (character.classList != "jump"){
        character.classList.add("jump");
        
        setTimeout(function(){
            character.classList.remove("jump");},300);
    }
}




document.addEventListener("keydown",function(event){
    jump();
});

var checkStatus = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft<50 && blockLeft>0 && characterTop >=140){
        alert("Game over :(");
}},10);

