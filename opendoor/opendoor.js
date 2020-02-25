let door1 = document.getElementById('door1');
let door2 = document.getElementById('door2');
let door3 = document.getElementById('door3');
let dotDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let closeDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let openDoor1;
let openDoor2;
let openDoor3;
let numClosedDoors = 3;
let startButton = document.getElementById("start");
let currentlyPlaying = true;
let score = 0;
let highScore = 0;
let currentStreak = document.getElementById('score-number');
let bestStreak = document.getElementById('high-score-number');
currentStreak.innerHTML = score;
bestStreak.innerHTML = highScore;

const isClick = (door) => {
  return door.src !== closeDoorPath;
};

const isBot = (door) => {
  if (door.src === dotDoorPath){
    return true;
  }else{
    return false;
  }
};

const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0){
    gameOver('win');
  }else if (isBot(door)) {
    gameOver('lose');
  }
};

const randomChoreDoorGenerator = () => {
 choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = dotDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor2 = dotDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  } else {
    openDoor3 = dotDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
};

door1.onclick = () => {
  if (currentlyPlaying && !isClick(door1)){
  door1.src = openDoor1;
  playDoor(door1);}
};
door2.onclick = () => {
  if (currentlyPlaying && !isClick(door2)){
  door2.src = openDoor2;
  playDoor(door2);}
};

door3.onclick = () => {
  if (currentlyPlaying && !isClick(door3)){
  door3.src = openDoor3;
  playDoor(door3);}
};
startButton.onclick = () => {
  startRound();
}

const startRound = () => {
  // Reset all the doors to be closed
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = 'Good luck!';
  randomChoreDoorGenerator();
}

const gameOver = (startus) => {
  if (startus === 'win'){
    startButton.innerHTML = "You win! Play again?"
  }else{startButton.innerHTML = "Game over! Play again?";
    score = 0;
    currentStreak.innerHTML = score;}
  currentlyPlaying = false;
};
const getYourScore = () => {
  score++;
  currentStreak.innerHTML = score;
  if (score > highScore) {
    highScore = score;
    bestStreak.innerHTML = highScore;
  }
}
