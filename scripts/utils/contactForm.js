function displayModal() {
  const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
  // Déplacer le focus vers le modal pour les utilisateurs de lecteurs d'écran
  modal.setAttribute('aria-hidden', 'false');
  modal.focus();
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    // Restaurer le focus vers l'élément déclencheur après la fermeture du modal
    modal.setAttribute('aria-hidden', 'false');
    const trigger = document.querySelector("[data-trigger='contact_modal']");
    if (trigger) trigger.focus();
}

function displayPhotographerName(name) { 
  //const containerModalHeaderFrom = document.querySelector(".modal header"); 
  const h2Name = document.querySelector(".h2Name");
  h2Name.textContent = name; 
  // containerModalHeaderFrom.appendChild(h2Name);
}

// DOM Elements
const form = document.querySelector("form");
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
  console.log('Données du formulaire:', formData);
});

