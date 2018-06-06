var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
                'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
                'x', 'y', 'z'];

var rand = alphabet[Math.floor(Math.random() * alphabet.length)];
 
var wins = 0;
var losses = 0;
var guessLeft = 9;    


function guess (event) {  
    var x = event.key;

    var guessList= document.querySelector('#guessList');

    guessList.innerText = guessList.innerText + ` ${x}, `;

    if (x == rand) {
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
        document.getElementById("guessLeft").innerHTML = guessLeft;
        guessList.innerText = '';
        rand = alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    }


document.onkeypress = guess;


