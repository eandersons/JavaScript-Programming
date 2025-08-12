const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
let tasks = [];
document.getElementById("addTask").addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    tasks.push({ text: taskText });
    taskInput.value = "";
    displayTasks();
    taskInput.focus();
  }
});
document.getElementById("clearCompleted").addEventListener("click", () => {
  tasks = tasks.filter((task) => !task.completed);
  displayTasks();
});

function displayTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" id="task-${index}" ${
      task.completed ? "checked" : ""
    } /><label for="task-${index}">${task.text}</label>`;
    li.querySelector("input").addEventListener("change", () => {
      tasks[index].completed = !tasks[index].completed;
      displayTasks();
    });
    taskList.appendChild(li);
  });
}
