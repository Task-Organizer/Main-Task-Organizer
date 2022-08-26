// const signUpButton = document.getElementById("signUp");
// const signInButton = document.getElementById("signIn");
// const container = document.getElementById("container");

signUp.addEventListener("click", () => {
    containerLOG.classList.add("right-panel-active");
});

signIn.addEventListener("click", () => {
    containerLOG.classList.remove("right-panel-active");
});
const close = document.getElementById("close");
joinus.addEventListener("click", addActive )
login.addEventListener("click", addActive);
close.addEventListener("click",removeActive)

function addActive() {
    containerLOG.classList.add("activelog");
    document.getElementById("blur").classList.add("blur")
    document.querySelector(".hero-text").classList.add("blur")
}
function removeActive() {
    containerLOG.classList.remove("activelog");
    document.getElementById("blur").classList.remove("blur")
    document.querySelector(".hero-text").classList.remove("blur")

}



//waed & rama -------------------------------------------------------------------------

//************************************************************************************************************************* */

// const cardsDiv = document.getElementById("cards");

const signU = document.getElementById("singUF");
const signI = document.getElementById("singIF");

let allUsers = [];

function User(fname, lname, email, password, tasks) {
  this.fname = fname;
  this.lname = lname;
  this.email = email;
  this.password = password;
  this.tasks = tasks;
}

// const emp1 = new User(0,'israa othman', 'test', 'Junior','test');
// emp1.salary = emp1.calcSalary(emp1.password);

// console.log(emp1)

function signUpFunc(event) {
  event.preventDefault();

  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (checkEmail(email)) {
    let newUser = new User(fname, lname, email, password, 0);
    // console.log(newUser);
    allUsers.push(newUser);
      saveToLocal();
      localStorage.setItem("current", JSON.stringify(currentUser));
      document.getElementById("signbtn").setAttribute("href", "../task.html");
      console.log(document.getElementById("signbtn").setAttribute("href", "../task.html")
      );
      document.forms[0].reset();
      
  } else {
    alert("invalid  Email");
  }

  //   let newUser = new User(fname, lname, email, password, 0);
  //   console.log(newUser, "********************");

  //   allUsers.push(newUser);

  //   saveToLocal();
  //   //   print(newUser);

  //   document.forms[0].reset();
}
console.log(document.getElementById("signbtn"));
function checkEmail(E) {
  let rightUser = allUsers.filter((user) => {
    if (user.email == E) return true;
  });

  if (rightUser[0] == null) {
    return true;
  }

  return false;
}

function saveToLocal() {
  let strArr = JSON.stringify(allUsers);
  localStorage.setItem("Users", strArr);
}

function getFromLocal() {
  let jsonArr = localStorage.getItem("Users");
  let arr = JSON.parse(jsonArr);

  if (arr != null) {
    allUsers = arr;
    // arr.forEach((ele)=>{
    //   print(ele);
    //  })
  }
}

// login
let currentUser = {};
function signInFunc(event) {
  event.preventDefault();

  let email = document.getElementById("emailIn").value;
  let password = document.getElementById("passwordIn").value;
  let massage = findUserByEmailandPassword(email, password);

  if (massage) {
    // getTaskFromLocal();
    if (currentUser != null) {
      //   taskForm.addEventListener("submit", taskFormFunc);
      //   console.log(currentUser);
      localStorage.setItem("current", JSON.stringify(currentUser));
    }
  } else {
    alert("Check Your Email or Password");
  }

  document.forms[0].reset();
}

function findUserByEmailandPassword(E, P) {
  let rightUser = allUsers.filter((user) => {
    if (user.email == E && user.password == P) return true;
  });
  //   console.log(rightUser[0]);
  if (rightUser[0] != null) {
    currentUser = rightUser[0];
    return true;
  }
}

getFromLocal();

signU.addEventListener("submit", signUpFunc);

signI.addEventListener("submit", signInFunc);
//Task page----------------------------------------------------------------------------------------------------------
// let taskForm = document.getElementById("askform");
// taskForm.addEventListener("submit", taskFormFunc);

// function taskFormFunc(event) {
//   event.preventDefault();
//   let title = document.getElementById("Title").value;
//   let priority = document.getElementById("Task-Priority").value;
//   let deadline = document.getElementById("deadline").value;
//   let desc = document.getElementById("desc").value;

//   let newTask = new Task(title, priority, deadline, desc);
//   //   AllUserTasks.push(newTask);
//   //   saveTaskToLocal();
//   console.log(newTask);
// }

// function Task(title, priority, deadline, desc) {
//   this.title = title;
//   this.priority = priority;
//   this.deadline = deadline;
//   this.desc = desc;
// }
