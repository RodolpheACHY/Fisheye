function displayModal() {
  const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
  //modal.showModal();
  // Déplacer le focus vers le modal pour les utilisateurs de lecteurs d'écran
  modal.setAttribute('aria-hidden', 'false');
  modal.focus();
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
        modal.style.display = "none";
  // modal.close();
    // Restaurer le focus vers l'élément déclencheur après la fermeture du modal
    modal.setAttribute('aria-hidden', 'false');
    //const trigger = document.querySelector("[data-trigger='contact_modal']");
    if (activeTrigger) {
      activeTrigger.focus();
      activeTrigger =null;
    } 
}

function displayPhotographerName(name) { 
  //const containerModalHeaderFrom = document.querySelector(".modal header"); 
  const h2Name = document.querySelector(".h2Name");
  h2Name.textContent = name; 
  // containerModalHeaderFrom.appendChild(h2Name);
}

// DOM Elements
const form = document.querySelector("form");
form.setAttribute('method', 'dialog');
const divModal = document.querySelector('form div');
divModal.classList.add("divModal");

//const h2Name = document.createElement("h2");
//h2Name.textContent = name;
//divModal.appendChild(h2Name);

const labelPrenom = document.createElement("label");
labelPrenom.textContent = "Prénom"
const inputPrenom = document.createElement("input");
inputPrenom.type = 'text';
inputPrenom.id = 'prenom';
// Associer le label à l'input
labelPrenom.setAttribute("for", inputPrenom.id);
divModal.appendChild(labelPrenom);
divModal.appendChild(inputPrenom);

const labelNom = document.createElement("label");
labelNom.textContent = "Nom"
const inputNom = document.createElement("input");
inputNom.type = 'text';
inputNom.id = 'nom';
// Associer le label à l'input
labelNom.setAttribute("for", inputNom.id);
divModal.appendChild(labelNom);
divModal.appendChild(inputNom);

const labelEmail = document.createElement("label");
labelEmail.textContent = "Email";
labelEmail.type = 'email';
const inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.id = "email"
inputEmail.name = "email"
inputEmail.required = true;
// Associer le label à l'input
labelEmail.setAttribute("for", inputEmail.id);
divModal.appendChild(labelEmail);
divModal.appendChild(inputEmail);

const labelTextaera = document.createElement("label");
labelTextaera.textContent = "Votre message";
const inputTextarea = document.createElement("textarea");
inputTextarea.type = "textarea";
inputTextarea.id = "message";
inputTextarea.name ="message";
inputTextarea.rows = 3;
inputTextarea.cols = 35;
// Associer le label à l'input
labelTextaera.setAttribute("for", inputTextarea.id);
divModal.appendChild(labelTextaera);
divModal.appendChild(inputTextarea);


//envoi des données du formulaire 
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Empêche le rechargement de la page
  event.stopPropagation(); // Arrête la propagation de l'événement
  console.log('Formulaire soumis');

  const prenomValue = inputPrenom.value;
  const nameValue = inputNom.value;
  const emailValue = inputEmail.value;
  const inputTextaeraValue = inputTextarea.value

  // On affiche les valeurs dans un objet
  const formData = {
    prenom: prenomValue,
    nom: nameValue,
    email: emailValue,
    votre_message : inputTextaeraValue
  };
  
  if (formData.prenom === "" || formData.nom === "" || formData.email === "" || formData.votre_message === "") {
    alert("Veuillez saisir tous les champs svp");
  } else {
    event.preventDefault();
    console.log('Données du formulaire:', formData);
    closeModal();
    document.querySelectorAll('form input, form textarea').forEach(input => input.value = '');
    alert("Votre formulaire a bien été envoyé");
  } 

  /*  
  console.log(form);
  //form.reset();
  console.log('Données du formulaire:', formData);
  closeModal();
  document.querySelectorAll('form input, form textarea').forEach(input => input.value = ''); */
});

const contactBtn = document.querySelector(".contact_button")
contactBtn.addEventListener("click", e => {
  e.preventDefault();
  e.stopPropagation(); // Arrête la propagation de l'événement
  console.log('Formulaire soumis');

  const formData = {
    prenom: document.getElementById('prenom').value,
    nom: document.getElementById('nom').value,
    email: document.getElementById('email').value,
    votre_message: document.getElementById('message').value
  };


  if (formData.prenom === "" || formData.nom === "" || formData.email === "" || formData.votre_message === "") {
    alert("Veuillez saisir tous les champs svp");
  } else {
    e.preventDefault();
    console.log('Données du formulaire:', formData);
    closeModal();
    document.querySelectorAll('form input, form textarea').forEach(input => input.value = '');
    alert("Votre formulaire a bien été envoyé");
  } 
  /*form.reset();
  console.log('Données du formulaire:', formData);
  closeModal();
  document.querySelectorAll('form input, form textarea').forEach(input => input.value = ''); */
  }
)

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

const BtnFormCloseKeyb = document.querySelector(".close-modal-contact"); //bouton fermeture de la modale
BtnFormCloseKeyb.addEventListener("keydown", function (e) {
  if (e.key === 'Space' || e.key === 'Enter') {
    closeModal();
  }
});

document.querySelectorAll(".grid-item").forEach((item) => {
  if(!item.hasAttribute("data-trigger")) {
    item.setAttribute("data-trigger", "contact_modal");
    item.addEventListener("click", function (event) {
        activeTrigger = event.currentTarget; // Sauvegarde du trigger
        displayModal();
    });
  }
});

let activeTrigger = null;


/*
(function () {
  //on définie les events qu'on veut regarder
  const events = ["click", "keydown", "keyup", "mousedown", "mouseup", "focus"];

  // fonction qui log l'élément qui est focus
  function handleEvent() {
    const focusedElement = document.activeElement;
    console.log("Focused Element:", focusedElement);
    return focusedElement;
  }       

  //on ajoute les event listener à la page
  events.forEach((eventType) => {
    document.addEventListener(eventType, handleEvent);
  });
})(); */