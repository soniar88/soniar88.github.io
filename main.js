const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = ["./images/pic1.jpg","./images/pic2.jpg","./images/pic3.jpg","./images/pic4.jpg","images/pic5.jpg"]
/* Declaring the alternative text for each image file */

const imgAltText = ["eye","wood","purpleFlower","ancientArt","moth"]
/* Looping through images */ /* double loop or dictionary*/


for (let i = imgArray; i< imgArray.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imagePath);}

for (let i = 0; i< imgAltText.length; i++){
    ;
    newImage.setAttribute('alt', altText);
    thumbBar.appendChild(newImage);
}





/* Wiring up the Darken/Lighten button */

btn.setAttribute("class", xxx);
btn.textContent = xxx;
overlay.style.backgroundColor = xxx;
