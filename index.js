var randomNumber1 = Math.floor(Math.random()*6)+1;  
var randomNumber2 = Math.floor(Math.random()*6)+1;  

var randomImageSouce ="images/dice" + randomNumber1 + ".png";//dice1.png-6
document.querySelectorAll("img")[0].setAttribute("src", randomImageSouce);

// second
var randomImageSouce2 ="images/dice" + randomNumber2 + ".png";//dice1.png-6
document.querySelectorAll("img")[1].setAttribute("src", randomImageSouce2);

// h1
var text = document.querySelector("h1");

if(randomNumber1 === randomNumber2){
    text.innerHTML="Draw!";
}
else if(randomNumber1 > randomNumber2){
    text.innerHTML="🏁Player 1 wins";
}
else
text.innerHTML="Player 2 wins🏁";