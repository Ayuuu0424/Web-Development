function Calculate(data) {
  const equation = document.getElementById("text");
  if (data === "AC") {
    equation.innerText = "0";
    return;
  }

  if (data === "C") {
    // const eq = equation.innerText;

    // let newEQ = eq.slice(0, -1);

    // equation.innerText = newEQ;

    equation.innerText = equation.innerText.slice(0, -1);
    return;
  }

  if (data === "=") {
    let EQ = equation.innerText;

    // Convert percentage into division by 100
    EQ = EQ.replace(/%/g, "/100");

    const solution = eval(EQ);

    equation.innerText = solution;
    return;
  }

  if (equation.innerText === "0") {
    equation.innerText = data;
  } else {
    equation.innerText = equation.innerText + data;
  }
}

// ...for keyboard control...
document.addEventListener("keydown", (event) => {
  const key = event.key;

  // Allowed keys
  const allowedKeys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/",
    "%",
    ".",
  ];

  // Numbers and operators
  if (allowedKeys.includes(key)) {
    Calculate(key);
  }

  // Enter key for =
  else if (key === "Enter") {
    Calculate("=");
  }

  // Backspace key for C
  else if (key === "Backspace") {
    Calculate("C");
  }

  // Escape key for AC
  else if (key === "Escape") {
    Calculate("AC");
  }
});
