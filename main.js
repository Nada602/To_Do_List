const btn = document.querySelector("button");
const val = document.getElementById("newTask");

const container = document.querySelector("#tasksContainer");

document.addEventListener("DOMContentLoaded", loadInDOM);

btn.addEventListener("click", function () {
  const newTask = val.value.trim();
console.log(newTask);
  if (newTask != "") {
    createTasks(newTask);
    val.value = "";
  } else {
    alert("please add new task ");
  }
});

function createTasks(newTask) {

 const li= document.createElement('li');
li.innerHTML=newTask;
container.appendChild(li);

const span= document.createElement("span")
span.innerHTML="\u00d7";
li.appendChild(span);

}

function saveToLocalStorage(taskAdd) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskAdd);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadInDOM() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((element,index) => createTasks(element,index));
}


container.addEventListener("click", function (e) {
  console.log(e.target.tagName); // Debugging

  let targetLi;

  if (e.target.tagName === "LI") {
    targetLi = e.target;
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove(); // Remove task when clicking X
    return;
  } else if (e.target.parentElement.tagName === "LI") {
    targetLi = e.target.parentElement; // If clicking a child of LI, get the LI
  }

  if (targetLi) {
    targetLi.classList.toggle("checked"); // Apply checked class
  }
});
