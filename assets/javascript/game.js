let comp = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 9;
var glet = [];
var randc = comp[Math.floor(Math.random() * comp.length)];

document.onkeyup = function (event) {
    var user = event.key;
    if (user === randc) {
        wins++;
        randc = comp[Math.floor(Math.random() * comp.length)];
        glet = [];
        guesses = 9;
    }
    else {
        guesses--;
        glet.push(user);
    }

    if(guesses === 0){
        losses++
        randc = comp[Math.floor(Math.random() * comp.length)];
        glet = [];
        guesses = 9; 
    }

    var html =
        "<p>Guess what letter I'm thinking.</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guesses + "</p>" +
        "<p>Guesses So far: " + glet + "</p>" +
        "<p> Computers choice" + randc + "</p>"


    document.querySelector("#game").innerHTML = html;
}