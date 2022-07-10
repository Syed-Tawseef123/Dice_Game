var randomNumber=Math.floor(Math.random()*6+1);
var randomImage="dice"+randomNumber+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImage);

var random1=Math.floor(Math.random()*6+1);
var randomImage1="dice"+random1+".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImage1);

if( randomNumber>random1){
  document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(random1>randomNumber){
  document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="DRAW";
}
