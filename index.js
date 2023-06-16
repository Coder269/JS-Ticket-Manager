const form = document.getElementById("form");
var titreNouveau;
var titreEnCours;
var titreTermine;
var colonneTermine;
var colonneEnCours;
var colonneNouveau;
const content = document.querySelector('.content');


form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputValue = document.getElementById("ticket").value;
  const message = document.getElementById("message");
  if (inputValue === "") {
    message.innerText = "Formulaire VIDE !!!";
    return;
  }
  message.innerText = "";

  if (colonneNouveau == null)
  {
    colonneNouveau = document.createElement('div');
    content.insertBefore(colonneNouveau, content.firstChild);
    colonneNouveau.classList.add('colonne');
    titreNouveau = document.createElement('h2');
  titreNouveau.innerText = 'Nouveau';
  colonneNouveau.appendChild(titreNouveau);
  }
  const newticket = document.createElement("div");

  newticket.classList.add("flex");
  const newTitle = document.createElement("h3");
  const description = document.createElement("label");

  const textArea = document.getElementById("description");

  description.innerText = textArea.value;
  newTitle.innerText = inputValue;

  const btn = document.createElement("button");
  btn.innerText = "> En Cours";
  
  newticket.appendChild(newTitle);
  newticket.appendChild(description);
  newticket.appendChild(btn);

  colonneNouveau.appendChild(newticket);
  
  btn.addEventListener("click", function () {

    
    if (btn.innerText === "> En Cours") {
      btn.innerText = "> Terminé";

      if (colonneEnCours == null)
      {
        colonneEnCours = document.createElement('div');
        content.insertBefore(colonneEnCours, content.lastChild);
        colonneEnCours.classList.add('colonne');
      titreEnCours = document.createElement('h2');
      titreEnCours.innerText = "En Cours";
      colonneEnCours.appendChild(titreEnCours);
      }
      colonneEnCours.appendChild(this.parentElement);
      if (colonneNouveau && colonneNouveau.childElementCount === 1)
      {
      colonneNouveau.remove();
      colonneNouveau = null;  
      }
      if (colonneEnCours && colonneEnCours.childElementCount === 1)
      {
      colonneEnCours.remove();
      colonneEnCours = null;
      }
      if (colonneTermine && colonneTermine.childElementCount === 1)
       {
         colonneTermine.remove();
         colonneTermine = null;
       }


    } else if (btn.innerText === "> Terminé") {
      btn.innerText = "> En Cours";
      
      if (colonneTermine == null)
      {
        colonneTermine = document.createElement('div');
        content.appendChild(colonneTermine);
        colonneTermine.classList.add('colonne');
      titreTermine = document.createElement('h2');
      titreTermine.innerText = "Terminé";
      colonneTermine.appendChild(titreTermine);
      }
      colonneTermine.appendChild(this.parentElement);
      if (colonneEnCours.childElementCount === 1)
      {
     colonneEnCours.remove();
     colonneEnCours = null;
      }
      
    }
  });



  //Reset the input
  textArea.value = "";
  document.getElementById("ticket").value = "";

  var key = false;
  var newTextArea;
  var newBtn;
  description.addEventListener('mousedown', function () {
    if (!key) {
      key = true;
      newTextArea = document.createElement('textarea');
      newBtn = document.createElement('button');
      newBtn.innerText = 'Modifier';
      description.innerText = "";
      description.appendChild(newTextArea);
      description.appendChild(newBtn);
    }
    newTextArea.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        description.innerText = newTextArea.value;
        newTextArea.remove();
        newBtn.remove();
        key = false;
      }
    });
    newBtn.addEventListener('click', function () {
      description.innerText = newTextArea.value;
      newTextArea.remove();
      newBtn.remove();
      key = false;


    });

  });
});