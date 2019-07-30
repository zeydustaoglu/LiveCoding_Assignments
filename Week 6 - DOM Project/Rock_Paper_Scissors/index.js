
var randomNumber1 = Math.floor(Math.random() * 3) + 1; //1-6

var randomImage = randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSrc = "images/" + randomImage; //images/dice1.png - images/dice6.png

var firstImage = document.querySelectorAll("img")[0];

firstImage.setAttribute("src", randomImageSrc);


var randomNumber2 = Math.floor(Math.random() * 3) + 1;

var randomImageSrc2 = "images/" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);



if (randomNumber1==1 && randomNumber2==2 || randomNumber1==2 && randomNumber2==3|| randomNumber1==3 && randomNumber2==1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  
}
else if (randomNumber1==1 && randomNumber2==3 ||randomNumber1==2 && randomNumber2==1||randomNumber1==3 && randomNumber2==2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}

