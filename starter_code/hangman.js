var hangman;

function Hangman() {
  this.words = ["hola","adios","Juan"];
  this.secretWord = toString(this.getWord); //Arreglarlo más adelante
  this.letters = [];
  this.guessedLetters = '';
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  var word = this.words[Math.floor(Math.random())];
  return word;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
    return true
  } else{
   return false
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  this.letters.forEach(function(letter){
    if(key === letter){
      return true
    }else{
      return false
    }
  })
};

// Hangman.prototype.addCorrectLetter = function (i) {

// };

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
