var randomNumber=Math.floor(Math.random()*6+1);
var randomImage="dice"+randomNumber+".png";
var randomImageSrc="images/"+randomImage;
document.querySelectorAll("img")[0].setAttribute("src",randomImageSrc);

var random1=Math.floor(Math.random()*6+1);
var randomImage1="dice"+random1+".png";
var randomImageSrc1="images/"+randomImage1;
document.querySelectorAll("img")[1].setAttribute("src",randomImageSrc1);

if( randomNumber>random1){
  document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(random1>randomNumber){
  document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="DRAW";
}
