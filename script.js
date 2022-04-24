/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello, world!");

// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 500; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 400; //how long to hold each clue's light/sound
var difficulty = 0;
var mistakes = 0;
var timeleft = 30;
var timerIds = [];

function startGame(d,pattern) {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  difficulty = d;
  mistakes = 0;
  updateMistakes(0);
  // document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("easyBtn").classList.add("hidden");
  document.getElementById("mediumBtn").classList.add("hidden");
  document.getElementById("hardBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  playClueSequence(difficulty)
}

function selectSong() {
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("HBDBtn").classList.remove("hidden");
  document.getElementById("HCBBtn").classList.remove("hidden");
  document.getElementById("MLLBtn").classList.remove("hidden");
  document.getElementById("RDMBtn").classList.remove("hidden");

}

function selectDifficulty(t){
  
  if (t == 1){
    pattern = [1, 1, 3, 1, 6, 5, 1, 1, 3, 1, 8, 6]
  }
  else if (t == 2){
    pattern = [7, 5, 3, 7, 5, 3, 3, 3, 3, 3, 5, 5, 5, 5, 7, 5, 3, 7, 5, 3]
  }
  else if (t == 3) {
    pattern = [1, 1, 8, 8, 10, 10, 8, 6, 6, 5, 5, 3, 3, 1]
  }
  
  else {
    pattern = [Math.floor(Math.random() * 13), Math.floor(Math.random() * 13), Math.floor(Math.random() * 13), Math.floor(Math.random() * 6), Math.floor(Math.random() * 13), Math.floor(Math.random() * 13)]
  }
  
  document.getElementById("HBDBtn").classList.add("hidden");
  document.getElementById("HCBBtn").classList.add("hidden");
  document.getElementById("MLLBtn").classList.add("hidden");
  document.getElementById("RDMBtn").classList.add("hidden");
  document.getElementById("easyBtn").classList.remove("hidden");
  document.getElementById("mediumBtn").classList.remove("hidden");
  document.getElementById("hardBtn").classList.remove("hidden");
  

}

function stopGame() {
  //initialize game variables
  gamePlaying = false;
  clueHoldTime = 400;

  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.63,
  2: 277.18,
  3: 293.66,
  4: 311.13,
  5: 329.63,
  6: 349.23,
  7: 369.99,
  8: 392.00,
  9: 415.30,
  10: 440.00,
  11: 466.16,
  12: 493.88,
  13: 523.25
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");

}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(difficulty){
  guessCounter = 0
  context.resume()
  clearTimeouts();
  timeleft = 30;
  document.getElementById('timer').innerHTML = timeleft;
  startTimer();
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    if (clueHoldTime <= 20){
      clueHoldTime = 20;
    }
    else{
      clueHoldTime -= difficulty;

    }
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function winGame(){
  updateMistakes(0);
  stopGame();
  alert("You won!!!");
}

function loseGame(){
  updateMistakes(0);
  stopGame();
  alert("Game Over. You lost.");
}

function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence(difficulty);
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect
    //GAME OVER: LOSE!
    mistakes += 1;
    updateMistakes(mistakes);
    if (mistakes >= 3){
      loseGame();
    }
  }
}    

// swap the Start and Stop buttons
function updateMistakes(number) {
  document.getElementById("mistakes").innerHTML = number;
}

function startTimer() {
  var elem = document.getElementById('timer');
  
  var timerId = setInterval(countdown, 1000);
  timerIds.push(timerId);
  function countdown() {
    if (timeleft == -1) {
      clearTimeout(timerId);
      loseGame();
    } else {
      elem.innerHTML = timeleft;
      timeleft--;
    }
  }
  
  countdown();
}

function resetTimer(timerId) {
  var elem = document.getElementById('timer');
  clearTimeout(timerId);
  timeleft = 30;
  elem.innerHTML = timeleft;
}

function clearTimeouts() {
  while(timerIds.length) {
    clearTimeout(timerIds.pop())
  }
}