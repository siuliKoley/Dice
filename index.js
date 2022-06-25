// random nuber generated
var rand1=Math.ceil(Math.random()*6);
var rand2=Math.ceil(Math.random()*6);

// random image generated
var randImg1="images/dice"+rand1+".png";
var randImg2="images/dice"+rand2+".png";

// select the images
var Image1=document.querySelectorAll("img")[0];
var Image2=document.querySelectorAll("img")[1];
// change image based on rand no
Image1.setAttribute("src",randImg1);
Image2.setAttribute("src",randImg2);
// change header based on the number
if (rand1>rand2){
    document.querySelector("h1").textContent="🚩Winner player1!";
}
else if(rand1<rand2){
    document.querySelector("h1").textContent="Winner player2!🚩";
}
else{
    document.querySelector("h1").textContent="🚩Draw!!!🚩";
}
