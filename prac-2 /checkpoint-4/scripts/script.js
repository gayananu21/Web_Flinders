const startButton = document.getElementById('start-btn');
const statusMessage = document.getElementById('status-message');
const playerName = new URLSearchParams(window.location.search).get('name');
const colors = ["red", "green", "blue", "yellow"];

let gameSequence = [];
let playerSequence = [];
let round = 0;
let isSimonTurn = false;

startButton.addEventListener('click', () => {
    //console.log('sdsdsds');
    startButton.disabled = true;
    playSimonSequence();
    
});

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playSimonSequence () {
   
    isSimonTurn = true;
    statusMessage.textContent = "Simon's Turn";
    
    const randomColor = colors[getRandomNumber(0, 3)];
    gameSequence.push(randomColor);

    console.log(statusMessage.textContent);
    
}