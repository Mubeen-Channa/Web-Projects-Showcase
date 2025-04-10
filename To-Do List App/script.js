document.getElementById("addTaskBtn").addEventListener("click", addTask);

document.getElementById("taskInput").addEventListener("keypress", (e) => {
  if (e.key === "Enter"){
    addTask();
  }
});


function addTask() {
  const taskText = document.getElementById("taskInput").value.trim();
  if (!taskText){
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.className = "todo-item";
  taskItem.innerHTML = ` <div class="todo-checkbox"><i class="fas fa-check"></i></div>
                         <span class="todo-text">${taskText}</span>
                         <button class="todo-delete"><i class="fas fa-trash"></i></button>`;

  document.getElementById("todoList").appendChild(taskItem);
  document.getElementById("taskInput").value = "";
  updateTaskCount();

  taskItem.querySelector(".todo-checkbox").addEventListener("click", toggleTask);

  taskItem.querySelector(".todo-delete").addEventListener("click", deleteTask);
}


function toggleTask() {
  this.classList.toggle("checked");
  this.parentElement.querySelector(".todo-text").classList.toggle("completed");
  updateTaskCount();
}

function deleteTask() {
  this.parentElement.remove();
  updateTaskCount();
}

function updateTaskCount() {
  const total = document.querySelectorAll(".todo-item").length;
  const completed = document.querySelectorAll(".todo-checkbox.checked").length;

  document.getElementById("totalTasks").textContent = `${total} task${
    total !== 1 ? "s" : ""
  }`;

  document.getElementById("completedTasks").textContent = `${completed} completed`;
}
