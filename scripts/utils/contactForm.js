// eslint-disable-next-line no-unused-vars
function displayModal() {
  const modal = document.getElementById("contact_modal");
	//modal.style.display = "block";
  modal.showModal();
  // Déplacer le focus vers le modal pour les utilisateurs de lecteurs d'écran
  modal.setAttribute('aria-hidden', 'false');
  modal.focus();
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    //modal.style.display = "none";
    modal.close();
    modal.setAttribute('aria-hidden', 'false');
}

// eslint-disable-next-line no-unused-vars
function displayPhotographerName(name) { 
  const h2Name = document.querySelector(".h2Name");
  h2Name.textContent = name; 
}

// DOM Elements
const form = document.querySelector("form");
form.setAttribute('method', 'dialog');
const divModal = document.querySelector('form div');
divModal.classList.add("divModal");

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
  }
)

// écouteur global pour fermer la modal avec Échap
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

//bouton fermeture de la modale avec la croix via le keyboard
const BtnFormCloseKeyb = document.querySelector(".close-modal-contact"); 
BtnFormCloseKeyb.addEventListener("keyup", function (e) {
  if (e.code == 'Space' || e.key === 'Enter') { 
    closeModal();
  }
});


// Gérer la navigation au clavier
const formContact = document.querySelector("#contact_modal");
const focusableElements = formContact.querySelectorAll("input, textarea, button, img");
console.log(formContact);
console.log(focusableElements);
const firstElement = focusableElements[0];
const lastElement = focusableElements[focusableElements.length - 1];

console.log("focusableElements:", focusableElements);
console.log("firstElement:", firstElement);
console.log("lastElement:" , lastElement);

firstElement.addEventListener("keydown", (event) => {
  if (event.key === "Tab" && event.shiftKey) {
    event.preventDefault();
    lastElement.focus();
  }
});

lastElement.addEventListener("keydown", (event) => {
  if (event.key === "Tab" && !event.shiftKey) {
    event.preventDefault();
    firstElement.focus();
  }
});
