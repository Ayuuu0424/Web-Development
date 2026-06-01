// function submit() {
//   let fullName = document.getElementById("fullName").value;
//   let phone = document.getElementById("phone").value;
//   let email = document.getElementById("email").value;
//   let password = document.getElementById("password").value;

//   console.log("Name:", fullName);
//   console.log("Phone:", phone);
//   console.log("Email:", email);
//   console.log("Password:", password);

//   // alert("Form Submitted Successfully!");

//   function resizeTo() {
//     window.location.reload();
//   }

//   // document.querySelector("form").addEventListener("reset", (event) => {
//   //   event.preventDefault();

//   //   confirm("Are U Sure") && window.location.reload();

//   //   //   console.log("form reset");
//   // });
// }

function submit() {
  // fullName,phone,email,password input box ki value ko variables fn,ph,em,ps me store kr rhe h
  const fn = document.getElementById("fullName").value;
  const ph = document.getElementById("phone").value;
  const em = document.getElementById("email").value;
  const ps = document.getElementById("password").value;

  // Jitne bhi elements ki class .error hai un sabko select kar raha hai.
  document.querySelectorAll(".error").forEach((element) => {
    // Sab old error messages ko empty kar raha hai.
    element.innerText = "";
  });

  if (!/^[A-Za-z\s]+$/.test(fn)) {
    // Agar name galat hai toh error message show karega.
    document.getElementById("nameError").innerText = "Invalid Full Name";
  }

  if (!/^[6-9]\d{9}$/.test(ph)) {
    document.getElementById("phoneError").innerText = "Invalid Phone Number";
  }

  if (!/^[A-Za-z.\.\_\d]+@gmail.com$/.test(em)) {
    document.getElementById("emailError").innerText = "Invalid Email";
  }

  if (!/^[A-Za-z\s]+$/.test(ps)) {
    document.getElementById("passwordError").innerText = "Invalid Password";
  }

  console.log("Name:", fullName);
  console.log("Phone:", phone);
  console.log("Email:", email);
  console.log("Password:", password);

  alert("Form Submitted Successfully!");
}
