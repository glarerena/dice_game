//left dice
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomImageSource1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

//right dice
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//if else with win or draw
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}


//event listener to play again
const refreshGame = document.getElementById("replay");

function handleClick() {
  window.location.reload();
}

refreshGame.addEventListener("click", handleClick);
