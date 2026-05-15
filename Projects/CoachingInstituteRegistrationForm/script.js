// ...Submit Button...
document
  .getElementById("registrationFrom")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    // Data
    const fullName = document.getElementById("fullName").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const dob = document.getElementById("dob").value;

    const qualification = document.getElementById("qualification").value;

    const marks = document.getElementById("marks").value;

    const course = document.getElementById("course").value;

    const address = document.getElementById("address").value;

    const city = document.getElementById("city").value.trim();

    const pin = document.getElementById("pin").value;

    // ...Radio Button...

    const gender = document.querySelector(
      "input[name='gender']:checked",
    )?.value;

    // ...Checkbox...
    const timings = [];

    document
      .querySelectorAll("input[name='timings']:checked")
      .forEach((item) => {
        timings.push(item.value);
      });

    console.log(gndr);

    console.log(timings);

    // Data Packet
    const registrationData = {
      "Full Name:": fullName,
      "Email:": email,
      "Phone:": phone,
      "Date of Birth": dob,
      "Qualification:": qualification,
      "Marks:": marks,
      "Course:": course,
      "Address:": address,
      "City:": city,
      "Pin Code:": pin,
    };


    validateData(registrationData)?
    (
      console.log("Registration Data:", registrationData),
      alert("Registration successful! Check console for details.")
      
    )
  );

// ResetButton
document
  .getElementById("registrationFrom")
  .addEventListener("reset", (event) => {
    event.preventDefault();

    window.location.reload();
  });

function ValidateData(data) {
  let valid = true;
}
