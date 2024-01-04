const addEl = document.getElementById("add");
const titleEl = document.getElementById("title");
const desEl = document.getElementById("description");
const mainEl = document.getElementById("main");
const editbar = document.querySelector(".editbar");
const editAddEl = document.getElementById("edit-add");
const editTitleEl = document.getElementById("edit-title");
const editDesEl = document.getElementById("edit-description");

let nullTitle = null;
let nullDes = null;
let storageArray = [];

const deleteElement = (el) => {
  const titleToDelete = el.querySelector(".headingTitle").textContent;
  storageArray = storageArray.filter(
    (elementS) => elementS.title !== titleToDelete
  );
  el.remove();
  updateLocalStorage();
};

function updateLocalStorage() {
  localStorage.setItem("data", JSON.stringify(storageArray));
}

function StorageForLocalData(title, description) {
  storageArray.push({
    title: title,
    description: description,
  });
  CreateElement(title, description);
  updateLocalStorage();
}

function populateElements() {
  for (elementS of storageArray) {
    CreateElement(elementS.title, elementS.description);
  }
}

addEl.addEventListener("click", (e) => {
  e.preventDefault();
  const title = titleEl.value;
  const description = desEl.value;
  if (title && description !== "") {
    StorageForLocalData(title, description);
    titleEl.value = "";
    desEl.value = "";
  } else {
    console.log("nothing");
  }
});

mainEl.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const elementToDelete = e.target.parentElement;
    deleteElement(elementToDelete);
  }

  if (e.target.classList.contains("edit")) {
    editbar.style.display = "flex";
    titleEl.setAttribute("disabled", true);
    desEl.setAttribute("disabled", true);
    const elementToEdit = e.target.parentElement;
    for (element of elementToEdit.children) {
      if (element.classList.contains("headingTitle")) {
        editTitleEl.value = element.textContent;
        nullTitle = element;
      }
      if (element.classList.contains("paradescription")) {
        editDesEl.value = element.textContent;
        nullDes = element;
      }
    }
  }
});

editAddEl.addEventListener("click", (e) => {
  e.preventDefault();
  const et = editTitleEl.value;
  const ed = editDesEl.value;
  if (et !== "" && ed !== "") {
    titleEl.removeAttribute("disabled");
    desEl.removeAttribute("disabled");
    storageArray = storageArray.map((elementS) => {
      if (elementS.title === nullTitle.textContent) {
        return {
          title: et,
          description: ed,
        };
      } else {
        return elementS;
      }
    });

    nullTitle.textContent = et;
    nullDes.textContent = ed;

    editbar.style.display = "none";

    updateLocalStorage();
  } else {
    console.log("nothing");
    alert("Enter Some Value");
  }
});

function CreateElement(titleValue, descriptionValue) {
  const DivEl = document.createElement("div");
  const h1El = document.createElement("h1");
  const pEl = document.createElement("p");
  const ButtonDeleteEl = document.createElement("button");
  const ButtonEditEl = document.createElement("button");

  DivEl.classList.add("container");
  h1El.textContent = titleValue;
  pEl.textContent = descriptionValue;
  ButtonDeleteEl.textContent = "Delete";
  ButtonEditEl.textContent = "Edit";
  ButtonDeleteEl.classList.add("delete");
  ButtonEditEl.classList.add("edit");
  h1El.classList.add("headingTitle");
  pEl.classList.add("paradescription");
  DivEl.append(h1El, pEl, ButtonDeleteEl, ButtonEditEl);
  mainEl.append(DivEl);
}

const storedData = localStorage.getItem("data");
console.log(storedData);
if (storedData) {
  storageArray = JSON.parse(storedData);
  populateElements();
}
console.log(storageArray);
