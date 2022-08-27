let lis = document.querySelectorAll("header ul li");
const dropDown = document.querySelectorAll(".DL")

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
      // Remove Active Class From all Lis
      dropDown.forEach((dl) => {
        dl.classList.remove("active");
      });
      // Add Active Class To Current Element
      if (e.currentTarget.children.length != 0) {
        e.currentTarget.children[0].classList.add("active");
      }
    });
  });
function addActive(element) {
    element.classList.add("active");
}

const deleteIcon = document.querySelector(".delete");
const typeClear = document.querySelector(".typeClear");
deleteIcon.addEventListener("click", () => {
    typeClear.classList.add("activeDelete")
})
typeClear.addEventListener("mouseleave", () => {
    typeClear.classList.remove("activeDelete")
})

const addIcon = document.querySelector("i.fa-plus");
addIcon.addEventListener("click", () => {
  const formAdd = document.querySelector(".form");
  if (formAdd.classList.contains("add") && addIcon.classList.contains("rotat")) {
    formAdd.classList.remove("add")
    addIcon.classList.remove("rotat")
  } else {
    formAdd.classList.add("add")
    addIcon.classList.add("rotat")
  }
})
console.log(addIcon);

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
  print(newTask);
  console.log(newTask);
  document.forms[0].reset();
}

function Task(title, priority, deadline, desc) {
  this.title = title;
  this.priority = priority;
  this.deadline = deadline;
  this.desc = desc;
  this.stat = "uncompleted";
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
    AllUserTasks.forEach((task) => {
      print(task);
      return arrOfObjct
    });
  } else {
    document.querySelector(".all-task").innerHTML = `<h3>There are no tasks to display. <span id ="noTasks">Let's put the first one up.</span></h3>`
  }
}
getTaskFromLocal()
console.log(document.getElementById("critical"));

// filter task base Priority
const critical = document.querySelectorAll(".drop-list")[0];
critical.addEventListener("click",  () => {
  let tasks = document.querySelector(".all-task")
  tasks.innerHTML = "";
  let filteredTasks = AllUserTasks.filter(ele => {
    if (ele.priority == `Critical`) {
      print(ele)
      return true
    }
  })

  console.log(filteredTasks); 
})

const Normal = document.querySelectorAll(".drop-list")[1];
Normal.addEventListener("click", () => {
  let filteredTasks = AllUserTasks.filter(ele => {
    let tasks = document.querySelector(".all-task");
    tasks.innerHTML = "";  
    if (ele.priority == `Normal`) {
      print(ele)
      return true
    }
  })
  console.log(filteredTasks);
})

const lowPriority = document.querySelectorAll(".drop-list")[2];
lowPriority.addEventListener("click", () => {
  let tasks = document.querySelector(".all-task")
  tasks.innerHTML = "";  
  let filteredTasks = AllUserTasks.filter(ele => {
    if (ele.priority == `Low-priority`) {
      print(ele)
      return true
    }
  })
  console.log(filteredTasks);
})

// filter task base state

const completed = document.querySelectorAll(".drop-list")[3];
completed.addEventListener("click", () => {
  let tasks = document.querySelector(".all-task")
  tasks.innerHTML = "";  
  let filteredTasks = AllUserTasks.filter(ele => {
    if (ele.stat == `completed`) {
      print(ele)
      return true
    }
  })
  console.log(filteredTasks);
})
const uncompleted = document.querySelectorAll(".drop-list")[4];
uncompleted.addEventListener("click", () => {
  let tasks = document.querySelector(".all-task")
  tasks.innerHTML = "";  
  let filteredTasks = AllUserTasks.filter(ele => {
    if (ele.stat == `uncompleted`) {
      print(ele)
      return true
    }
  })
  console.log(filteredTasks);
})

console.log(completed) ;
console.log(uncompleted) ;

// all tasks 

let allTasks = document.querySelectorAll("header ul li")[0];
allTasks.addEventListener("click", () => {
  let tasks = document.querySelector(".all-task")
  tasks.innerHTML = ""; 
  let filteredTasks = AllUserTasks.filter(ele => {
    if (ele.stat == `uncompleted`) {
      print(ele)
      return true
    }
  })        
  if (filteredTasks == null) {
    console.log(filteredTasks);
    tasks.innerHTML = `<h3>There are no <span id ="noTasks"> Uncompleted </span> tasks to display.`;  
  }
})
// console.log(allTasks) ;

//===========================================================================
//search

//===========================================================================



//===========================================================================
const welcome = document.querySelector(".welcomeMasg h2")
welcome.innerHTML = `Hello <span id ="fname">${currentUser.fname}</span>,`
console.log(welcome);



/////===========================================
// ahmadz

let logout = document.querySelector(".logout")
logout.addEventListener("click", function () {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#8E05C2',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, logout'
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem('current');
      location.replace(`index.html`); 
    }
  })
});
//===========================================================================

// const done = document.querySelectorAll("input[type=checkbox]");
// done.forEach(checked => {
//   checked.addEventListener("click", ele => {
    
//     if (ele.classList.contains("completed") ) {
//       ele.classList.remove("add")
//     } else {
//       ele.classList.add("add")
//     }
//   })
//   console.log(checked.value);
  
// })
//===========================================================================
function print(userTask) {
  const allTask = document.querySelector(".all-task");
  let task = document.createElement("div");
  task.setAttribute("class", "task");
  allTask.appendChild(task);

  let h4 = document.createElement("h4");
  task.appendChild(h4);
  h4.textContent = userTask.title;

  let deadLine = document.createElement("p");
  deadLine.setAttribute("class", "deadline");
  task.appendChild(deadLine);
  deadLine.textContent = userTask.deadline;

  let description = document.createElement("p");
  description.setAttribute("class", "description");
  task.appendChild(description);
  description.textContent = userTask.desc;

  let div1 = document.createElement("div");
  task.appendChild(div1);

  let inputDone = document.createElement("input");
  inputDone.setAttribute("type", "checkbox");
  inputDone.setAttribute("name", "done");

  div1.appendChild(inputDone);

  let label = document.createElement("label");
  label.setAttribute("for", "done");
  label.textContent = "  Done"
  div1.appendChild(label);

  let div2 = document.createElement("div");
  div2.setAttribute("class", "state");

  task.appendChild(div2);

  let spanPriority = document.createElement("span");
  spanPriority.setAttribute("class", `useProiority ${userTask.priority}`);

  spanPriority.textContent = userTask.priority;
  div2.appendChild(spanPriority);

  let spanState = document.createElement("span");
  spanState.setAttribute("class", "use");
  spanState.textContent = userTask.stat;
  div2.appendChild(spanState);

  let trash = document.createElement("span");
  trash.setAttribute("class", "icon trash");
  task.appendChild(trash);

  let trashI = document.createElement("i");
  trashI.setAttribute("class", "fa-solid fa-trash");
  trash.appendChild(trashI);

  trashI.addEventListener("click", () => {
    deleteTask(userTask);
   });
  /// --------------------------------------
  let edit = document.createElement("span");
  edit.setAttribute("class", "icon edit");
  task.appendChild(edit);

  let editI = document.createElement("i");
  editI.setAttribute("class", "fa-solid fa-pen");
  edit.appendChild(editI);
}

function deleteTask(userTask) {

  let taskFilter = AllUserTasks.filter((t) => {
    if (t != userTask) return true;

    // AllUserTasks.indexOf(userTask);
  });
  AllUserTasks = taskFilter;
  saveTaskToLocal();

  // console.log(taskFilter);
  // console.log(AllUserTasks);
  // getTaskFromLocal();
  // if(AllUserTasks!=null)
  // AllUserTasks.forEach((ele)=>{
  //     print(ele);})
  if (confirm("Are you sure")) {
    userTask.remove();
    
  }
}

// let trashI = document.querySelectorAll(".icon.trash")
// trashI.forEach(trash => {
//   trash.addEventListener("click", (e) => {
//     if (confirm("Are you sure")) {
//       e.currentTarget.parentElement.remove();
//     }
//     // Swal.fire({
//     //   title: 'Are you sure?',
//     //   text: "You won't be able to revert this!",
//     //   icon: 'warning',
//     //   showCancelButton: true,
//     //   confirmButtonColor: '#3085d6',
//     //   cancelButtonColor: '#d33',
//     //   confirmButtonText: 'Yes, delete it!'
//     // }).then((result) => {
//     //   if (result.isConfirmed) {
//     //       // .remove();
//     //     console.log(e.currentTarget.parentElement)
//     //     }
//     //   })

//   })
// });
