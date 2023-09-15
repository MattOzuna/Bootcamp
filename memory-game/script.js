const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  // console.log("you just clicked", event.target);
  
  //my code:
  //keeps track of clicks
  clickCount ++;
//stops fucntion of they click too fast
  if (clickCount > 2){
    return console.log('too fast');
  }
//this is for first value to be input correctly
//without it the function wasn't running
  else if (!previousClick.classList){
    event.target.style.backgroundColor = event.target.classList[0];
    previousClick = event.target;
    console.log('first click');
  }
//this is for when someone clicks the same card twice
  else if (previousClick === event.target){
    event.target.style.backgroundColor = event.target.classList[0];
    console.log('no match')
    //this is incase someone clicks during the delay and breaks the 
    let placeHolderClick = previousClick
   setTimeout(function(){
        event.target.style.backgroundColor = '';
        placeHolderClick.style.backgroundColor = ''
        clickCount = 0;
   }, 1000)
    previousClick = ''
  }
//this is for when the colors don't match
  else if (clickCount === 2 && previousClick.classList[0] !== event.target.classList[0]){
    event.target.style.backgroundColor = event.target.classList[0];
    console.log('no match');
    //this is incase someone clicks during the delay and breaks the 
    let placeHolderClick = previousClick
   setTimeout(function(){
        event.target.style.backgroundColor = '';
        placeHolderClick.style.backgroundColor = ''
        clickCount = 0;
   }, 1000)
    previousClick = ''
  }  
//this is for when the colors do match, the click count and previous click value get cleared
  else if (previousClick.classList[0] === event.target.classList[0]){
    event.target.style.backgroundColor = event.target.classList[0];
    clickCount = 0
    previousClick = ''
  }
}

let clickCount = 0
let previousClick = ''
// when the DOM loads
createDivsForColors(shuffledColors);


