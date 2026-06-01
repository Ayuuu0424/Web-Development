function Bulb1On() {
  document.getElementById("bulb1").style.backgroundColor = "yellow";
}

function Bulb2On() {
  document.getElementById("bulb1").style.backgroundColor = "coral";
}

function Bulb3On() {
  document.getElementById("bulb1").style.backgroundColor = "pink";
}

function Bulb4On() {
  document.getElementById("bulb1").style.backgroundColor = "red";
}

function Bulb1Off() {
  document.getElementById("bulb1").style.backgroundColor = "white";
}

document.getElementById("bulbCoral").addEventListener("click", bulbCoral);

document.getElementById("bulbColor").addEventListener("change",ChangeBulbColor);

function ChangeBulbColor(){
    const color = document.getElementById("bulbColor").value;
    document.getElementById("bulb1").style.backgroundColor = color;
}

function resizeTo(){
    window.location.reload();
}

// document
//   .getElementById("bgColor"')
//   .addEventListener("change", changeBackgroundColor);

// document
//   .getElementById("headingColor")
//   .addEventListener("change", changeHeadingColor);

// document
//   .getElementById("paraColor")
//   .addEventListener("change", changeParagraphColor);

// document.getElementById("resetBtn").addEventListener("click", resetColors);

// function changeBackgroundColor() {
//   const color = document.getElementById("bgColor").value;

//   document.getElementById("mainBox").style.backgroundColor = color;
// }

// function changeHeadingColor() {
//   const color = document.getElementById("headingColor").value;

//   document.getElementById("heading").style.color = color;
// }

// function changeParagraphColor() {
//   const color = document.getElementById("paraColor").value;

//   document.getElementById("para").style.color = color;
// }

// function resetColors() {
//   document.getElementById("mainBox").style.backgroundColor = "white";

//   document.getElementById("heading").style.color = "black";

//   document.getElementById("para").style.color = "black";
// }
