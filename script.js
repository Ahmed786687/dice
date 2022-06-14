document.querySelector('.container>h1').innerHTML = "Refresh Me";

let number1;

number1 = Math.random();

let rand1 = Math.round(number1 * 6);

let number2;

number2 = Math.random();

let rand2 = Math.round(number2 * 6);

console.log(rand1);
console.log(rand2);

var dice = document.querySelector('.img1').attributes;

function randomizDice(image, rand) {

    if (rand != 0) {
        dice = document.querySelector(image).setAttribute("src", `./images/dice${rand}.png`);
    }
}

function result(rand1, rand2) {
    if (rand1 > rand2) {
        document.querySelector('.container>h1').innerHTML = "🚩 Player1 Wins!";
    } else if (rand2 > rand1) {
        document.querySelector('.container>h1').innerHTML = "Player2 Wins! 🚩";
    } else {
        document.querySelector('.container>h1').innerHTML = "Match Draw!";
    }
}

randomizDice('.img1', rand1);
randomizDice('.img2', rand2);
result(rand1, rand2);



// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource);


// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// //If player 1 wins
// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
// }
// else if (randomNumber2 > randomNumber1) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// }
// else {
//   document.querySelector("h1").innerHTML = "Draw!";
// }






