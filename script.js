const switch1 = document.querySelector("#switch1");
const light3 = document.querySelector("#lightbulb3");
const light8 = document.querySelector("#lightbulb8");


switch1.addEventListener("change", function () {
    light3.classList.toggle("active");
    light8.classList.toggle("active");
  if (light3.classList.contains("active")){
      switch3.checked = true;
      switch8.checked = true;
  } else {
      switch3.checked = false;
      switch8.checked = false;

  }


});



const switch2 = document.querySelector("#switch2");

switch2.addEventListener("change", function () {
  const light1 = document.querySelector("#lightbulb1");
  const light7 = document.querySelector("#lightbulb7");

  light1.classList.toggle("active");
  light7.classList.toggle("active");
  if (light1.classList.contains("active")){
      switch1.checked = true;
      switch7.checked = true;
  } else {
      switch1.checked = false;
      switch7.checked = false;
  }


});



const switch3 = document.querySelector("#switch3");

switch3.addEventListener("change", function () {
  const light4 = document.querySelector("#lightbulb4");
  const light6 = document.querySelector("#lightbulb6");
  const light8 = document.querySelector("#lightbulb8");

  light4.classList.toggle("active");
  light6.classList.toggle("active");
  light8.classList.toggle("active");
  if (light4.classList.contains("active")){
      switch4.checked = true;
      switch6.checked = true;
      switch8.checked = true;
  } else{
      switch4.checked = false;
      switch6.checked = false;
      switch8.checked = false;
  }
});


const switch4 = document.querySelector("#switch4");

switch4.addEventListener("change", function () {
  const light2 = document.querySelector("#lightbulb2");
  const light9 = document.querySelector("#lightbulb9");

  light2.classList.toggle("active");
  light9.classList.toggle("active");
  if (light2.classList.contains("active")){
      switch2.checked = true;
      switch9.checked = true;
  } else {
      switch2.checked = false;
      switch9.checked = false;
  }
});



// const switch5 = document.querySelector("#switch5");

// switch5.addEventListener("change", function () {
//   const light5 = document.querySelector("#lightbulb5");

//   light5.classList.toggle("active");

// });



const switch6 = document.querySelector("#switch6");

switch6.addEventListener("change", function () {
  const light1 = document.querySelector("#lightbulb1");
  const light4 = document.querySelector("#lightbulb4");

  light1.classList.toggle("active");
  light4.classList.toggle("active");
  if (light1.classList.contains("active")){
      switch1.checked = true;
      switch4.checked = true;
  } else {
      switch1.checked = false;
      switch4.checked = false;
  }
});



const switch7 = document.querySelector("#switch7");

switch7.addEventListener("change", function () {
  const light2 = document.querySelector("#lightbulb2");
  const light3 = document.querySelector("#lightbulb3");

  light2.classList.toggle("active");
  light3.classList.toggle("active");
  if (light2.classList.contains("active")){
      switch2.checked = true;
      switch3.checked = true;
  } else {
      switch2.checked = false;
      switch3.checked = false;
  }
});


const switch8 = document.querySelector("#switch8");

switch8.addEventListener("change", function () {
  const light5 = document.querySelector("#lightbulb5");
  const light9 = document.querySelector("#lightbulb9");

  light5.classList.toggle("active");
  light9.classList.toggle("active");
  if (light5.classList.contains("active")){
      switch5.checked = true;
      switch9.checked = true;
  } else {
      switch5.checked = false;
      switch9.checked = false;
  }
});


const switch9 = document.querySelector("#switch9");

switch9.addEventListener("change", function () {
  const light6 = document.querySelector("#lightbulb6");
  const light7 = document.querySelector("#lightbulb7");

  light6.classList.toggle("active");
  light7.classList.toggle("active");
  if (light6.classList.contains("active")){
      switch6.checked = true;
      switch7.checked = true;
  } else {
      switch6.checked = false;
      switch7.checked = false;
  }
});

///FUNCTION CHANGE 57 FOR SWTICH 5 - MILD CHALLENGE///
const switch57 = document.querySelector("#switch5");
switch57.addEventListener("change", function () {

    const light1 = document.querySelector("#lightbulb1");
    const light2 = document.querySelector("#lightbulb2");
    light1.classList.toggle("active");
    light2.classList.toggle("active");
    if (light1.classList.contains("active")){
        switch1.checked = true;
        switch2.checked = true;
    } else {
        switch1.checked = false;
        switch2.checked = false;
    }
});

/// MASTER SWITCH - MEDIUM CHALLENGE///
const masterSwitch = document.querySelector("#switch10");
const MasterSwitch = () => {
    evenNumberLights = [2, 4, 6, 8,]; //This turns on only the even numbered lights
    
    evenNumberLights.forEach((num) => {
        const light = document.querySelector(`#lightbulb${num}`);
        light.classList.toggle("active");
        if (light.classList.contains("active")) {
            switch2.checked = true;
            switch4.checked = true;
            switch6.checked = true;
            switch8.checked = true;

        } else {
            switch2.checked = false;
            switch4.checked = false;
            switch6.checked = false;
            switch8.checked = false;
        }



    });
    
    
};

masterSwitch.addEventListener("change", MasterSwitch);

/// RESET BUTTON ///
const resetButton = document.querySelector("#switch11");
resetButton.addEventListener("click", function () {
    const switches = document.querySelectorAll(".switch");
    switches.forEach(switchElement => {
        switchElement.checked = false;
    });
    const lights = document.querySelectorAll(".lightbulb");
    lights.forEach(light => {
        light.classList.remove("active");
    });
});