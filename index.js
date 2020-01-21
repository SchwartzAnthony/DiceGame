// Creating Random Number
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
// New Content for image
var firstDice = "images/dice" + randomNumber1 + ".png"
var secondDice = "images/dice" + randomNumber2 + ".png"
// Selecting the element
var firstImage = document.getElementById("imageOne");
var secondImage = document.getElementById("imageTwo");
// Changing the element
firstImage.setAttribute("src", firstDice);
secondImage.setAttribute("src", secondDice);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Both Players Win!";
}
