const switch1 = document.querySelector("#switch1");
const light3 = document.querySelector("#lightbulb3");
const light8 = document.querySelector("#lightbulb8");


switch1.addEventListener("change", function () {
    light3.classList.toggle("active");
    light8.classList.toggle("active");
});



const switch2 = document.querySelector("#switch2");

switch2.addEventListener("change", function () {
  const light1 = document.querySelector("#lightbulb1");
  const light7 = document.querySelector("#lightbulb7");

  light1.classList.toggle("active");
  light7.classList.toggle("active");
});



const switch3 = document.querySelector("#switch3");

switch3.addEventListener("change", function () {
  const light4 = document.querySelector("#lightbulb4");
  const light6 = document.querySelector("#lightbulb6");
  const light8 = document.querySelector("#lightbulb8");

  light4.classList.toggle("active");
  light6.classList.toggle("active");
  light8.classList.toggle("active");
});


const switch4 = document.querySelector("#switch4");

switch4.addEventListener("change", function () {
  const light2 = document.querySelector("#lightbulb2");
  const light9 = document.querySelector("#lightbulb9");

  light2.classList.toggle("active");
  light9.classList.toggle("active");
});



const switch5 = document.querySelector("#switch5");

switch5.addEventListener("change", function () {
  const light5 = document.querySelector("#lightbulb5");

  light5.classList.toggle("active");
});



const switch6 = document.querySelector("#switch6");

switch6.addEventListener("change", function () {
  const light1 = document.querySelector("#lightbulb1");
  const light4 = document.querySelector("#lightbulb4");

  light1.classList.toggle("active");
  light4.classList.toggle("active");
});



const switch7 = document.querySelector("#switch7");

switch7.addEventListener("change", function () {
  const light2 = document.querySelector("#lightbulb2");
  const light3 = document.querySelector("#lightbulb3");

  light2.classList.toggle("active");
  light3.classList.toggle("active");
});


const switch8 = document.querySelector("#switch8");

switch8.addEventListener("change", function () {
  const light5 = document.querySelector("#lightbulb5");
  const light9 = document.querySelector("#lightbulb9");

  light5.classList.toggle("active");
  light9.classList.toggle("active");
});


const switch9 = document.querySelector("#switch9");

switch9.addEventListener("change", function () {
  const light6 = document.querySelector("#lightbulb6");
  const light7 = document.querySelector("#lightbulb7");

  light6.classList.toggle("active");
  light7.classList.toggle("active");
});

///FUNCTION CHANGE 57 FOR SWTICH 5 - MILD CHALLENGE///
const switch57 = document.querySelector("#switch5");
switch57.addEventListener("change", function () {

    const light1 = document.querySelector("#lightbulb1");
    const light2 = document.querySelector("#lightbulb2");
    light1.classList.toggle("active");
    light2.classList.toggle("active");
});

/// MASTER SWITCH - MEDIUM CHALLENGE///
const masterSwitch = document.querySelector("#switch10");
const MasterSwitch = () => {
    evenNumberLights = [2, 4, 6, 8,]; //This turns on only the even numbered lights
    if (masterSwitch.checked) {
        evenNumberLights.forEach((num) => {
            const light = document.querySelector(`#lightbulb${num}`);
            light.classList.toggle("active");
        });
    } else {
        masterSwitch.checked = false;
    }
    
    
};





masterSwitch.addEventListener("change", MasterSwitch);