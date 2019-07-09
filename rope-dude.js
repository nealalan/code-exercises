// What is ASCIIART? Check the README.md or Workshop to see why ASCIIART is defined in your file.
const ASCIIART = [
  `
  +---+
  |   |
  O   |
 /|\\\  |
 / \\\  |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|\\\  |
 /    |
      |
      
=========`,
  `
  +---+
  |   |
  O   |
 /|\\\  |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
      |
      |
      |
=========`,
  `
  +---+
  |   |
      |
      |
      |
      |
=========`,
];
const PLAYING = 'playing';
const WON = 'won';
const LOST = 'lost';

//console.log(ASCIIART[6]);

class RopeDude {
  constructor(input) {
    this.originalInput = input;
    // secretWord - the secret word is passed as an argument and is the secret word 
    //  (or phrase) a player tries to guess. The argument passed to the class is a string, 
    //  but the string is stored as an array to the secretWord property.
    this.secretWord = input.toLowerCase().split('');
    // remainingGuesses - a player gets 6 total guesses to try an guess the secret word
    this.remainingGuesses = 6; // dec if wrong
    // lettersGuessed - this is a memory bank of all the letters guessed. This is useful 
    //  when determining a valid guess. A guess does not count if the character was 
    //  already guessed.
    this.lettersGuessed = []; // add letter if wrong
    // gameState - tracks the state of the game. states: 'playing', 'lost', 'won'.
    this.gameState = PLAYING;
  }
  printState() {
    console.log(this.gameState, 'WORD:', this.getSecretWordPuzzle(), 'REM:', this.remainingGuesses, 'GUESSSED:', this.lettersGuessed.toString());
  }
  // computeGameState method determines if the player 'won', 'lost', or has remaining 
  //  guesses to continue playing. The computeGameState is responsible for updating the 
  //  gameState property.
  computeGameState() {
    // if still playing and have less than 1 remaining guesses, LOST
    if (this.gameState === PLAYING && this.remainingGuesses < 1) this.gameState = LOST;
    // if we haven't lost, check to see if we have WON
    if (this.computeWon() === true) this.gameState = WON;  
  }
  computeWon() {
    // compare the number of correctly guessed letters to the unique secret word letters
    //  calculate the number of correctly guessed letters 
    const guessesCallback = (item) => this.secretWord.includes(item);
    const correctlyGuessedLength = this.lettersGuessed.filter(guessesCallback).length;
    //  calculate the length of the SecretWord excluding splaces
    const uniqueArrayCallback = (accum, item) => {
      if (accum.indexOf(item) < 0 && item !== ' ') accum.push(item);
      return accum;
    };
    const uniqueSecretWordLength = this.secretWord.reduce(uniqueArrayCallback, []).length;
    if (correctlyGuessedLength === uniqueSecretWordLength) return true;
    else return false;
  }
  // getSecretWordPuzzle method returns the "puzzle" string that represents how many 
  //  characters of the string are revealed. Characters of the secretWord that were not 
  //  guessed should be represented with a "#". A space character should be displayed as a 
  //  space (not a "#").
  getSecretWordPuzzle() {
    // loop through secretWord, checking each letter is in lettersGuess, 
    //  if true, write letter to outputArray
    //  if false, write a space or # to outputArray
    // array.join and return string
    const mapSecretWordCallback = (item) => {
      if (this.lettersGuessed.includes(item)) return item;
      else if (item === ' ') return ' ';
      else return '#';
    }
    return this.secretWord.map(mapSecretWordCallback, []).join('');
  }
  // gameStateMessage method returns a string to update the game status to a player.
  //  string returned uses the global ASCIIART variable
  getGameStateMessage() {
    // probably could use a CASE eval
    if (this.gameState === PLAYING)
      return `There is a total of ${this.remainingGuesses} guesses remaining:\n${ASCIIART[this.remainingGuesses]}`;
    if (this.gameState === LOST)
      return `Game Over, the word was "${this.originalInput}":\n${ASCIIART[0]}`;
    if (this.gameState === WON)
      return `Winner Winner Chicken Dinner, you won!`;
  }
  // submitGuess method determines if a guess is valid. A guess is valid as long as it is 
  //  a unique guess and there are remaining guesses.
  submitGuess(letter) {
    // only play if we are still 'playing'
    if (this.gameState !== 'playing') return;
    // parse the input for only letters and convert to lower case
    if (!(/\b[A-Za-z]+\b/).test(letter)) return;
    letter = letter.toLowerCase();
    // if the letter is a validGuess, add it to lettersGuessed
    if (this.validGuess(letter)) {
      this.lettersGuessed.push(letter);
      // if the letter is not a correctGuess, decrement remainingGuesses
      if (this.incorrectGuess(letter)) this.remainingGuesses -= 1;
      this.computeGameState();
    }
  }
  // you could use both of these methods to CHEAT :D :D 
  validGuess(letter) {
    if (this.lettersGuessed.includes(letter)) return false; 
    else return true;
  }
  incorrectGuess(letter) {
    if (!this.secretWord.includes(letter)) return true;
    else return false;
  }
  // simulateRopeDude simulates playing a game of RopeDude.
  //  The simulation should simulate the following actions:
  //  create a new RopeDude instance
  //  call the submitGuess method, passing it a random character
  //  call the computeGameState method to determine the state of the game
  //  return the final status of the game (whether the simulation won or lost)
  simulateRopeDude(multiGuessArray) {
    // if the user already created their own game...
    for (let i = 0; i < multiGuessArray; i++) {
      this.submitGuess(multiGuessArray[i]);      
    }
    return this.getGameStateMessage();
    // loop through the multiGuessArray  
    //  submit guess
    //  until gameState !== 'playing' (actually the game won't play unless it's 'playing')
    //    so just check every letter no matter what
    // print out the gameStateMessage at the end
  }
}

const simulateRopeDude = (secretWord) => {
  const simGame = new RopeDude(secretWord);
  let multiGuessArray = (Math.random().toString(36).substring(2, 15) + 
                        Math.random().toString(36).substring(2, 15) +
                        Math.random().toString(36).substring(2, 15))
                        .replace(/[^a-z]/gi, '');
  //console.log('guesses:', multiGuessArray, ' ');
  for (let i = 0; i < multiGuessArray.length; i++) simGame.submitGuess(multiGuessArray[i]);
  simGame.printState();
  return simGame.getGameStateMessage();
}


// TEST SIMULATE
//console.log('test simulate:');
console.log(simulateRopeDude('food'));
console.log('\n');
/*

// SIMULATE PLAYS
const game = new RopeDude('nacho fries');
game.printState();
game.submitGuess('b');
game.printState();
game.submitGuess('d');
game.printState();
game.submitGuess('g');
game.printState();
game.submitGuess('j');
game.printState();
game.submitGuess('k');
game.printState();
game.submitGuess('n');
game.printState();
game.submitGuess('a');
game.printState();
game.submitGuess('c');
game.submitGuess('c');
game.printState();
game.submitGuess('h');
game.printState();
game.submitGuess('o');
game.printState();
game.submitGuess('f');
game.printState();
game.submitGuess('r');
game.printState();
game.submitGuess('i');
game.printState();
game.submitGuess('e');
game.printState();
game.submitGuess('s');
game.printState();
game.submitGuess('o');
game.printState();
game.submitGuess('f');
game.printState();
game.submitGuess('r');
game.printState();
*/
