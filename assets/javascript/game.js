var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
                'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
                'x', 'y', 'z'];

var rand = alphabet[Math.floor(Math.random() * alphabet.length)];
 
//Ok so this works it alerts win if its right and loss if its wrong
// function guess (event) {
//     var key = event.key;

//     if (key == rand) {
//         alert('Win');
//     } else {
//         alert('Loss');
//     }

// }

// document.onkeyup = guess;
var wins = 0;
var losses = 0;
var guessLeft = 9;    
    

function guess (event) {  
    var x = event.key;

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

    }
function addGuessListToPage(event) {
    var x = event.key;

    var guessList= document.querySelector('#guessList');

    guessList.innerText = guessList.innerText + ` ${x}, `;
    
   
}
do {
    guess;
} while(guessLeft != 0);

if (guessLeft == 0){
    wins = 0;
    losses = 0;
    guessLeft = 9;
    rand = alphabet[Math.floor(Math.random() * alphabet.length)];
    guessList.innerText = '';
}

document.onkeypress = guess;
document.onkeyup = addGuessListToPage;