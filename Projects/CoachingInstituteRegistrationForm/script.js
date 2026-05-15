// // ...Submit Button...
// document
//   .getElementById("registrationFrom")
//   .addEventListener("submit", (event) => {
//     event.preventDefault();

//     // Data
//     const fullName = document.getElementById("fullName").value.trim();

//     const email = document.getElementById("email").value.trim();

//     const phone = document.getElementById("phone").value.trim();

//     const dob = document.getElementById("dob").value;

//     const qualification = document.getElementById("qualification").value;

//     const marks = document.getElementById("marks").value;

//     const course = document.getElementById("course").value;

//     const address = document.getElementById("address").value;

//     const city = document.getElementById("city").value.trim();

//     const pin = document.getElementById("pin").value;

//     // ...Radio Button...

//     const gender = document.querySelector(
//       "input[name='gender']:checked",
//     )?.value;

//     // ...Checkbox...
//     const timings = [];

//     document
//       .querySelectorAll("input[name='timings']:checked")
//       .forEach((item) => {
//         timings.push(item.value);
//       });

//     console.log(gndr);

//     console.log(timings);

//     // Data Packet
//     const registrationData = {
//       "Full Name:": fullName,
//       "Email:": email,
//       "Phone:": phone,
//       "Date of Birth": dob,
//       "Qualification:": qualification,
//       "Marks:": marks,
//       "Course:": course,
//       "Address:": address,
//       "City:": city,
//       "Pin Code:": pin,
//     };

//     validateData(registrationData)?
//     (
//       console.log("Registration Data:", registrationData),
//       alert("Registration successful! Check console for details.")

//     )
//   );

// // ResetButton
// document
//   .getElementById("registrationFrom")
//   .addEventListener("reset", (event) => {
//     event.preventDefault();

//     window.location.reload();
//   });

// function ValidateData(data) {
//   let valid = true;
// }

// Submit Button
document
  .getElementById("registrationFrom")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    // =========================
    // INPUT VALUES
    // =========================

    const fn = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value;
    const qualification = document.getElementById("qualification").value;
    const marks = document.getElementById("marks").value.trim();
    const course = document.getElementById("course").value;
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const pin = document.getElementById("pin").value.trim();

    // =========================
    // RADIO BUTTON
    // =========================

    const gndr = document.querySelector("input[name='gender']:checked")?.value;

    // =========================
    // CHECKBOXES
    // =========================

    const timings = [];

    document
      .querySelectorAll("input[name='timings']:checked")
      .forEach((item) => {
        timings.push(item.value);
      });

    // =========================
    // CLEAR OLD ERRORS
    // =========================

    document.querySelectorAll(".text-danger").forEach((item) => {
      item.innerText = "";
    });

    let isValid = true;

    // =========================
    // VALIDATIONS
    // =========================

    // Full Name
    if (!/^[A-Za-z\s]+$/.test(fn)) {
      document.getElementById("fullNameError").innerText =
        "Enter valid full name";
      isValid = false;
    }

    // Email
    if (!/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
      document.getElementById("emailError").innerText = "Enter valid email";
      isValid = false;
    }

    // Phone
    if (!/^[6-9]\d{9}$/.test(phone)) {
      document.getElementById("phoneError").innerText =
        "Enter valid mobile number";
      isValid = false;
    }

    // DOB
    if (dob === "") {
      document.getElementById("dobError").innerText = "Select date of birth";
      isValid = false;
    }

    // Gender
    if (!gndr) {
      document.getElementById("dobError").innerText = "Select gender";
      isValid = false;
    }

    // Qualification
    if (qualification === "") {
      document.getElementById("qualificationError").innerText =
        "Select qualification";
      isValid = false;
    }

    // Marks
    if (marks === "") {
      document.getElementById("marksError").innerText =
        "Enter percentage or grade";
      isValid = false;
    }

    // Course
    if (course === "") {
      document.getElementById("courseError").innerText =
        "Select preferred course";
      isValid = false;
    }

    // Timings
    if (timings.length === 0) {
      document.getElementById("timingsError").innerText =
        "Select at least one timing";
      isValid = false;
    }

    // Address
    if (address.length < 10) {
      document.getElementById("addressError").innerText =
        "Enter complete address";
      isValid = false;
    }

    // City
    if (!/^[A-Za-z\s]+$/.test(city)) {
      document.getElementById("cityError").innerText = "Enter valid city";
      isValid = false;
    }

    // Pin Code
    if (!/^\d{6}$/.test(pin)) {
      document.getElementById("pinError").innerText =
        "Enter valid 6 digit pin code";
      isValid = false;
    }

    // =========================
    // FINAL SUBMIT
    // =========================

    if (isValid) {
      const formData = {
        fullName: fn,
        email: email,
        phone: phone,
        dob: dob,
        gender: gndr,
        qualification: qualification,
        marks: marks,
        course: course,
        timings: timings,
        address: address,
        city: city,
        pin: pin,
      };

      console.log(formData);

      alert("Registration Successful");

      document.getElementById("registrationFrom").reset();
    }
  });

// Reset Button
document.getElementById("registrationFrom").addEventListener("reset", () => {
  document.querySelectorAll(".text-danger").forEach((item) => {
    item.innerText = "";
  });
});
