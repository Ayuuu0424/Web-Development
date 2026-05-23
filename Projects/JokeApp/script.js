async function GetNewJoke() {
  const API_URL = "https://official-joke-api.appspot.com/jokes/random";

  const response = await fetch(API_URL);

  const data = await response.json();
  console.log(data);


  //   if (data.type === "single") {
  //     document.getElementById("setup").innerText = data.joke;
  //     document.getElementById("delivery").innerText = "";
  //   }
  //   else{
  //     document.getElementById("setup").innerText = data.setup;
  //     document.getElementById("delivery").innerText = data.delivery;
  //   }

  // Shortcut Using Ternary Operator
  document.getElementById("setup").innerText = data.joke || data.setup;
  document.getElementById("punchline").innerText = data.punchline || "";
}
