document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  //   console.log("form submitted");
  const fn = document.getElementById("FullName").value;
  const em = document.getElementById("email").value;
  const ps = document.getElementById("password").value;

  const dataPacket = {
    FullName: fn,
    Email: em,
    Password: ps,
  };

  console.log(dataPacket);

  document.getElementById("FullName").value = "";

  document.getElementById("email").value = "";

  document.getElementById("password").value = "";
});

document.querySelector("form").addEventListener("reset", (event) => {
  event.preventDefault();

  confirm("Are U Sure") && window.location.reload();

  //   console.log("form reset");
});

document.addEventListener("keydown", (event) => {
  let keyPress = event.key;
  keyPress === "Escape" && window.location.reload();
//   console.log(keyPress);
});
