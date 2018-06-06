var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
                'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
                'x', 'y', 'z'];

var rand = alphabet[Math.floor(Math.random() * alphabet.length)];

var wins = 0;
var losses = 0;
var guessLeft = 9; 

function guess (event) {
    var key = event.key;

    var guessList= document.querySelector('#guessList');
    guessList.innerText = guessList.innerText + ` ${key}, `;

    if (key == rand) {
        wins++;
        guessLeft--;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("guessLeft").innerHTML = guessLeft;
    } else {
        losses++;
        guessLeft--;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("guessLeft").innerHTML = guessLeft;
    }

    if (guessLeft == 0) {
        guessLeft = 9;
        guessList.innerText = '';
        rand = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
}

document.onkeyup = guess;