const btnNewTask = document.querySelector(".btn");
const taskContent = document.querySelector("#task-content");
const list = document.querySelector("#list");

btnNewTask.addEventListener('click', function(){
  let createLi = document.createElement('li');
  list.appendChild(createLi)

  let createLabel = document.createElement('label');
  createLabel.id = `label${document.querySelectorAll("#list li").length}`;
  createLi.appendChild(createLabel);

  let createCheckbox = document.createElement('input');
  createCheckbox.type = "checkbox";
  createLabel.appendChild(createCheckbox);

  let createSpan1 = document.createElement('span');
  createSpan1.className = `check`;
  createLabel.appendChild(createSpan1);
  
  let createSpan2 = document.createElement('span');
  createLabel.appendChild(createSpan2);
  createSpan2.style = "margin-left : 2vh";
  createSpan2.textContent = taskContent.value;

  let createButton = document.createElement('button');
  createButton.className = `btn`;
  createLi.appendChild(createButton)
  createButton.textContent = `Supprimer cette tâche`;

  createButton.addEventListener("click", ()=>{
    createButton.parentElement.remove()
  })
  createSpan2.addEventListener("onclick", () =>{
    createSpan2.switchColor()
  })
  taskContent.value=""
})

function switchColor(){
  let cb = document.querySelector(`label>span:last-child`)
  if (cb.classList.contains('cb-lbl')){
    cb.classList.remove('cb-lbl')
  } else {
    cb.classList.add('cb-lbl')
  }
}