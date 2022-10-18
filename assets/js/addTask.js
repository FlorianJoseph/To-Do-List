const btnNewTask = document.querySelector(".btnNewTask");
const createTask = document.querySelector("create-task");
const list = document.querySelector("#list");

btnNewTask.addEventListener('click', function(){
  let createCheckbox = document.createElement('input');
  
  createCheckbox.id = `checkbox${document.querySelector("#list p").length}`;
  createCheckbox.type = "checkbox";
  list.appendChild(createCheckbox);

  let createLabel = document.createElement('label');
  createLabel.setAttribute("for",`checkbox${document.querySelector("#list label").lenght}`);
  // createLabel.textContent = 
  list.appendChild(createLabel);
})