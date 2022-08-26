let lis = document.querySelectorAll("header ul li");
const dropDown = document.querySelectorAll(".DL")

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
      // Remove Active Class From all Lis
      dropDown.forEach((dl) => {
        dl.classList.remove("active");
      });
      // Add Active Class To Current Element
      e.currentTarget.children[0].classList.add("active");
    });
  });
function addActive(element) {
    element.classList.add("active");
}



//waed & rama -------------------------------------------------------------------------

let AllUserTasks = [];
let currentUser = JSON.parse(localStorage.getItem("current"));
let taskForm = document.getElementById("askform");
taskForm.addEventListener("submit", taskFormFunc);

console.log(currentUser.email);

function taskFormFunc(event) {
  event.preventDefault();
  let title = document.getElementById("Title").value;
  let priority = document.getElementById("Task-Priority").value;
  let deadline = document.getElementById("deadline").value;
  let desc = document.getElementById("desc").value;

  let newTask = new Task(title, priority, deadline, desc);
  AllUserTasks.push(newTask);
  saveTaskToLocal();
  console.log(newTask);
}

function Task(title, priority, deadline, desc) {
  this.title = title;
  this.priority = priority;
  this.deadline = deadline;
  this.desc = desc;
}

function saveTaskToLocal() {
  let jsonArr = JSON.stringify(AllUserTasks);
  localStorage.setItem(currentUser.email, jsonArr);
}

function getTaskFromLocal() {
  let str = localStorage.getItem(currentUser.email);
  let arrOfObjct = JSON.parse(str);
  if (arrOfObjct != null) {
    AllUserTasks = arrOfObjct;

    ///  to print task
  }
}