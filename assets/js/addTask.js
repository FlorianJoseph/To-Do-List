const btnNewTask = document.querySelector(".btn");
const taskContent = document.querySelector("#task-content");
const list = document.querySelector("#list");

btnNewTask.addEventListener('click', ()=>{

  const createLi = document.createElement('li');
  createLi.className = "element-list";
  createLi.onclick = ()=>{
    createLi.childNodes[0].classList.toggle('cb-lbl');
    
    if (createLi.childNodes[0].childNodes[0].checked === false){
      createLi.childNodes[0].childNodes[0].checked = true;
    }
    else {
      createLi.childNodes[0].childNodes[0].checked = false;
    }
  }
  createLi.id = `li${document.querySelectorAll("#list li").length}`;
  list.appendChild(createLi);

  const createLabel = document.createElement('label');
  createLi.appendChild(createLabel);

  const createCheckbox = document.createElement('input');
  createCheckbox.type = "checkbox";
  createCheckbox.className = "dp-none";
  createLabel.appendChild(createCheckbox);

  const createSpanCheck = document.createElement('span');
  createSpanCheck.className = `check`;
  createLabel.appendChild(createSpanCheck);
  
  const createSpanText = document.createElement('span');
  createLabel.appendChild(createSpanText);
  createSpanText.style = "margin-left : 2vh";
  createSpanText.textContent = taskContent.value;
  taskContent.value="";

  createSpanText.addEventListener("click",() =>{
    createLi.childNodes[0].classList.toggle('cb-lbl');
  })

  const createDiv = document.createElement('div');
  createLi.appendChild(createDiv);

  const createButtonModifier = document.createElement('button');
  createButtonModifier.className = `btn`;
  createDiv.appendChild(createButtonModifier);
  createButtonModifier.textContent = `Modifier`;

  createButtonModifier.addEventListener("click", ()=>{

    if (createLi.childNodes[0].childNodes[0].checked === false){
      createLi.childNodes[0].childNodes[0].checked = true;
    }
    else {
      createLi.childNodes[0].childNodes[0].checked = false;
    }

    const createInput = document.createElement('input');
    createSpanText.remove();
    createInput.type = "text";
    createInput.id = "task-modif";
    createInput.value = createSpanText.textContent;
    createLabel.appendChild(createInput);
    createButtonModifier.remove()

    const createButtonValider = document.createElement('button');
    createDiv.appendChild(createButtonValider);
    createButtonValider.textContent = `Valider`;

    createButtonValider.addEventListener("click",()=>{
      if (createLi.childNodes[0].childNodes[0].checked === false){
        createLi.childNodes[0].childNodes[0].checked = true;
      }
      else {
        createLi.childNodes[0].childNodes[0].checked = false;
      }
      createLabel.appendChild(createSpanText);
      createSpanText.textContent = createInput.value;
      createInput.remove() 
    })
  })

  const createButtonSupprimer = document.createElement('button');
  createButtonSupprimer.className = `btn`;
  createDiv.appendChild(createButtonSupprimer);
  createButtonSupprimer.textContent = `Supprimer`;

  createButtonSupprimer.addEventListener("click", ()=>{
    createButtonSupprimer.parentElement.parentElement.remove();
  })
})