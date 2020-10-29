var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1 * 6) + 1);

var randomDiceImg1 = "dice" + randomNumber1 + ".png";

var randomImgFolder1 = "images/" + randomDiceImg1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImgFolder1);

// image 2
var randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2 * 6) + 1);

var randomDiceImg2 = "dice" + randomNumber2 + ".png";

var randomImgFolder2 = "images/" + randomDiceImg2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImgFolder2);


// 

if (randomNumber1 > randomNumber2) {
     document.querySelector("h1").innerHTML = "<strong>🏆Player 1 wins !</strong>";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "<strong>🏆Player 2 wins !</strong>";
} else { 
    document.querySelector("h1").innerHTML = "Draw";
}