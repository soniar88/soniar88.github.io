const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */

/* Wiring up the Darken/Lighten button */

for (let i = 1; i<=16; i++){
    let newImg = document.createElement("img");
    newImg.setAttribute("src", "images/pic" + i + ".jpg");//Loop through jpg files.
    thumbBar.append(newImg);
    newImg.addEventListener("click", function(){
        displayedImage["src"] = newImg["src"]//Replaces displayed image value with clicked image
    })
}
btn.onclick = function(){
    let att = btn.getAttribute("class");
    if(att == "dark"){
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else{
        btn.setAttribute("class","dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
}
