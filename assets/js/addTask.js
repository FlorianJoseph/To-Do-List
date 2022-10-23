const btnNewTask = document.querySelector(".btn");
const taskContent = document.querySelector("#task-content");
const list = document.querySelector("#list");


// Crée l'évènement click pour créer une nouvelle tâche
btnNewTask.addEventListener('click', ()=>{
// Crée l'évènement liste pour les tâches
  const createLi = document.createElement('li');
  createLi.className = "element-list";
  createLi.id = `li${document.querySelectorAll("#list li").length}`;
  list.appendChild(createLi);
// Crée l'évènement click pour appliquer le style barré + logo validé siu la tâche est effectuée
  // createLi.onclick = ()=>{
  //   createLi.childNodes[0].childNodes[2].classList.toggle('cb-lbl');
    
  //   if (createLi.childNodes[0].childNodes[0].checked === false){
  //     createLi.childNodes[0].childNodes[0].checked = true;
  //   }
  //   else {
  //     createLi.childNodes[0].childNodes[0].checked = false;
  //   }
  // }
// Crée le label aqui va contenir le texte et la checkbox
  const createLabel = document.createElement('label');
  createLi.appendChild(createLabel);
// Crée la checkbox qui est rendue invisible
  const createCheckbox = document.createElement('input');
  createCheckbox.type = "checkbox";
  createCheckbox.className = "dp-none";
  createLabel.appendChild(createCheckbox);
// Crée la boite à la place de la checkbox
  const createSpanCheck = document.createElement('span');
  createSpanCheck.className = `check`;
  createLabel.appendChild(createSpanCheck);
// Crée le texte après la boite qui indique la tâche 
  const createSpanText = document.createElement('span');
  createLabel.appendChild(createSpanText);
  createSpanText.style = "margin-left : 2vh";
  createSpanText.textContent = taskContent.value;
  taskContent.value="";
  createSpanText.addEventListener("click",() =>{
    createLi.childNodes[0].classList.toggle('cb-lbl');
  })
// Crée la div à droite de la tâche pour l'emplacement des boutons
  const createDiv = document.createElement('div');
  createLi.appendChild(createDiv);
  createDiv.style = "padding-top:0.5%";

// Crée le boutton pour modifier la tâche
  const createButtonModifier = document.createElement('button');
  createButtonModifier.className = `btn`;
  createDiv.appendChild(createButtonModifier);
  createButtonModifier.textContent = `Modifier`;
// Crée l'évènement click pour modifier une tâche
  createButtonModifier.addEventListener("click", ()=>{
// Crée l'input du texte à modifier
    const createInput = document.createElement('input');
    createSpanText.remove();
    createInput.type = "text";
    createInput.id = "task-modif";
    createInput.value = createSpanText.textContent;
    createLabel.appendChild(createInput);
    createButtonModifier.remove()
    createButtonSupprimer.remove()
// Crée le boutton pour valider la modification d'une tâche
    const createButtonValider = document.createElement('button');
    createDiv.appendChild(createButtonValider);
    createButtonValider.textContent = `Valider`;
// Crée l'évènement click pour valider la modification d'une tâche
    createButtonValider.addEventListener("click",()=>{
      createLabel.appendChild(createSpanText);
      createSpanText.textContent = createInput.value;
      createInput.remove()
      createButtonValider.remove() 
      createDiv.appendChild(createButtonModifier);
      createDiv.appendChild(createButtonSupprimer);
    })
})
// Crée le boutton pour supprimer la tâche
  const createButtonSupprimer = document.createElement('button');
  createButtonSupprimer.className = `btn`;
  createDiv.appendChild(createButtonSupprimer);
  createButtonSupprimer.textContent = `Supprimer`;
  createButtonSupprimer.addEventListener("click", ()=>{
    createButtonSupprimer.parentElement.parentElement.remove();
  })
})