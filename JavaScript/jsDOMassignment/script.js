// 1.Create a form with:
// • Name
// • City
// • Submit Button
// 2.Condition:
// • Result should be hidden initially
// • On clicking Submit → display Name and City
// 3. Styling:
// • Add border and shadow to form
// • Change text color of result
function Submit() {
  console.log("Submit Button Clicked");

  const name = document.getElementById("fullName").value;
  const city = document.getElementById("city").value;

  document.getElementById("myName").innerText = name;
  document.getElementById("myCity").innerText = city;

  document.getElementById("fullName").value = "";
  document.getElementById("city").value = "";

  document.getElementById("dataCard").classList.add("divShow");
  document.getElementById("dataCard").classList.remove("divHide");
}

// Assignment 2
// 1. Create a form with:
// • Email
// • Password
// • Submit Button
// 2. Condition:
// • Do not show result while typing
// • On Submit → display Email and Password
// 3. Styling:
// • Change background color after clicking
// button
// • Add border to result box
function notSubmit() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  document.getElementById("myEmail").innerText = email;
  document.getElementById("myPassword").innerText = password;

  document.getElementById("email").value = "";
  document.getElementById("password").value = "";

  document.getElementById("dataCard-1").classList.add("divHide");
  document.getElementById("datacard-1").classList.remove("divShow");
}

// Assignment 3
// 1. Create a form with:
// • First Name
// • Last Name
// • Submit Button
// 2. Condition:
// • On Submit → display full name (First + Last)
// 3. Styling:
// • Change text color
// • Add shadow to result section
function onSubmit() {
  console.log("Submit Button Clicked");

  const name = document.getElementById("firstName").value;
  const city = document.getElementById("lastname").value;

  document.getElementById("firstName").innerText = firstName;
  document.getElementById("lastName").innerText = lastName;

  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";

  document.getElementById("dataCard-2").classList.add("divShow");
  document.getElementById("dataCard-2").classList.remove("divHide");
}
