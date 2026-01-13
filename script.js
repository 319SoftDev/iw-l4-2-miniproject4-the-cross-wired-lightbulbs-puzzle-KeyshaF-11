// YOUR CODE HERE
console.log("Script Running.");

///SWITCHES///
// Switch 1
const switchNum1 = document.querySelector('switch1');

// Switch 3
const switchNum3 = document.querySelector('switch3');

// Switch 8
const switchNum8 = document.querySelector('switch8');

///LIGHT BULB///
// Light Bulb 1
const lightBulb1 = document.querySelector('#lightbulb1');

// Light Bulb 3
const lightBulb3 = document.querySelector('#lightbulb3');


// LightBulb 8 
const lightBulb8 = document.querySelector('#lightbulb8');


//FUNCTIONS///
const turnSwitch1OnOff = () => {    
    lightBulb1.classList.toggle('active');
}

const turnSwitch3OnOff = () => {
    lightBulb3.classList.toggle('active');
}

const turnSwitch8OnOff = () => {
    lightBulb8.classList.toggle('active');
}

// EVENT LISTENERS///
switchNum1.addEventListener('click', turnSwitch1OnOff);
switchNum3.addEventListener('click', turnSwitch3OnOff);
switchNum8.addEventListener('click', turnSwitch8OnOff);