// ...Submit Button...
document
  .getElementById("registrationFrom")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const fn = document.getElementById("fullName").value;

    const email = document.getElementById("email").value;

    const phone = document.getElementById("phone").value;

    const dob = document.getElementById("dob").value;

    const qualification = document.getElementById("qualification").value;

    const marks = document.getElementById("marks").value;

    const course = document.getElementById("course").value;

    const address = document.getElementById("address").value;

    const city = document.getElementById("city").value;

    const pin = document.getElementById("pin").value;

    // ...Radio Button...

    const gndr = document.querySelector("input[name='gender']:checked")?.value;

    // ...Checkbox...
    const timings = [];

    document
      .querySelectorAll("input[name='timings']:checked")
      .forEach((item) => {
        timings.push(item.value);
      });

    console.log(gndr);

    console.log(timings);

    console.log(fn);
    console.log(email);
    console.log(phone);
    console.log(dob);
    console.log(qualification);
    console.log(marks);
    console.log(course);
    console.log(address);
    console.log(city);
    console.log(pin);
 
  });

// ResetButton
document
  .getElementById("registrationFrom")
  .addEventListener("reset", (event) => {
    event.preventDefault();

    window.location.reload();
  });
