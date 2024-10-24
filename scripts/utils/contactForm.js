function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

// DOM Elements

const form = document.querySelector("form");
const divModal = document.querySelector('form div');
divModal.classList.add("divModal");
const labelNom = document.createElement("label");
labelNom.textContent = "Nom: "
const inputNom = document.createElement("input");
inputNom.type = 'text';
inputNom.id = 'nom';
// Associer le label à l'input
labelNom.htmlFor = inputNom.id;
divModal.appendChild(labelNom);
divModal.appendChild(inputNom);
const labelEmail = document.createElement("label");
labelEmail.textContent = "Email: ";
labelEmail.type = 'email';
const inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.id = "email"
inputEmail.name = "email"
inputEmail.required = true;
// Associer le label à l'input
labelEmail.htmlFor = inputEmail.id;
divModal.appendChild(labelEmail);
divModal.appendChild(inputEmail);
const labelTextaera = document.createElement("label");
labelTextaera.textContent = "Votre message: ";
const inputTextarea = document.createElement("textarea");
inputTextarea.type = "textarea";
inputTextarea.id = "message";
inputTextarea.name ="message";
inputTextarea.rows = 10;
inputTextarea.cols = 100;
// Associer le label à l'input
labelTextaera.htmlFor = inputTextarea.id;
divModal.appendChild(labelTextaera);
divModal.appendChild(inputTextarea);
