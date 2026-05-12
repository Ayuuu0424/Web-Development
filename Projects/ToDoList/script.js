// addNewTask naam ka function banaya gaya hai jo new task add karega.
function addNewTask() {
  // Input field (newTask) me jo text user ne likha hai usko le liya
  const taskToAdd = document.getElementById("newTask").value;

  // Ek naya <li> element create hua.
  const LI = document.createElement("li");
  // Uss <li> ko Bootstrap margin class di gayi.
  LI.classList.add("my-3");

  // Ek <div> create hua
  const DIV = document.createElement("div");
  // Flexbox laga diya taki items ek line me aaye.
  DIV.classList.add("d-flex", "align-items-center");

  // Ek span bana aur usme task ka text daal diya.
  const SPAN1 = document.createElement("span");
  SPAN1.innerText = taskToAdd;

  // Delete button create hua.
  const BUTTON = document.createElement("button");
  // Button ko Bootstrap styling di gayi.
  BUTTON.classList.add(
    "btn",
    "btn-danger",
    "ms-4",
    "d-flex",
    "gap-3",
    "align-items-center",
    "justify-content-center",
  );
  // Button click karne par poora task (LI) delete ho jayega.
  BUTTON.onclick = () => LI.remove();

  // Trash icon create hua using Bootstrap Icons.
  const I = document.createElement("i");
  I.classList.add("bi", "bi-trash");

  // Button ke andar “Delete” text add hua
  const SPAN2 = document.createElement("span");
  SPAN2.innerText = "Delete";

  // Icon aur text button ke andar daale
  BUTTON.appendChild(I);
  BUTTON.appendChild(SPAN2);

  // Task text aur delete button div ke andar daale
  DIV.appendChild(SPAN1);
  DIV.appendChild(BUTTON);

  // Div ko <li> ke andar daal diya
  LI.appendChild(DIV);

  // Hidden task section ko visible kar diya.
  document.getElementById("taskDiv").classList.remove("d-none");

  // Naya task list me add kar diya.
  document.getElementById("taskList").appendChild(LI);

  // Input field empty kar di after adding task
  document.getElementById("newTask").value = "";
}
