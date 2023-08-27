const addTodo = document.getElementById("addTodo");
const todoContainer = document.getElementById("todoContainer");

function addTask() {
  if (addTodo.value === "") {
    alert("You didn't write anything");
    saveData();
  } else {
    // FOR TASK LIST
    let newList = document.createElement("li");
    newList.className = "border-y-[1px] border-white mb-2";
    todoContainer.appendChild(newList);
    // FOR LIST CONTAINER
    let listCont = document.createElement("div");
    listCont.className = "flex items-center justify-between p-2";
    newList.appendChild(listCont);
    // FOR CHECKBOX AND TASK NAME
    let subject = document.createElement("div");
    subject.className = "flex items-center gap-4";
    listCont.appendChild(subject);
    // FOR CHECKBOX
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    subject.appendChild(checkBox);
    // FOR TASK NAME
    let newTask = document.createElement("p");
    newTask.className = "text-white";
    newTask.innerHTML = addTodo.value;
    subject.appendChild(newTask);
    // FOR DONE BUTTON
    let doneBttn = document.createElement("button");
    doneBttn.className =
      "bg-[#839AC3] py-1 px-4 rounded-full font-bold text-sm shadow-lg";
    doneBttn.innerHTML = "DONE";
    console.log(doneBttn.value);
    listCont.appendChild(doneBttn);
    // RESETTING INPUT VALUE
    addTodo.value = "";
    saveData();
  }
}

todoContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "INPUT") {
    e.target.parentNode.classList.toggle("line-through");
    saveData();
  } else if (e.target.tagName == "BUTTON") {
    e.target.parentNode.parentNode.remove();
    // e.target.closest("li").remove();
    saveData();
  }
});

// FOR SAVING AND LOADING DATA

function saveData() {
  localStorage.setItem("data", todoContainer.innerHTML);
}

function showTask() {
  todoContainer.innerHTML = localStorage.getItem("data");
}

showTask();
