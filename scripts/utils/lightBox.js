/* global photographerMedias mediaFactory photographerFolder  */
let currentIndex = 0;
// eslint-disable-next-line no-unused-vars
function displayLightbox(id) {
  console.log("id", id, photographerMedias);
  currentIndex = photographerMedias.findIndex(
    (m) => m.id.toString() === id.toString()
  );
  const m = photographerMedias[currentIndex];
  console.log("m", m);
  const myMedia = mediaFactory(m, photographerFolder);
  console.log("myMedia", myMedia.getMarkup());
  const lightbox = document.querySelector("#lightbox");
  const lightboxImage = document.querySelector(".lightbox-image");
  if (lightbox) {
    lightbox.showModal();
    lightboxImage.innerHTML = myMedia.getMarkup();
    lightbox.setAttribute("aria-hidden", "false");
    lightbox.setAttribute("role", "dialog");
    lightboxImage.setAttribute("aria-labelledby", "lightbox_label");
    lightbox.focus();
  }
  const lightboxh3 = document.createElement("h3");
  lightboxh3.textContent = `${myMedia.title}`;
  lightboxh3.classList.add("lightboxh3");
  lightboxh3.id ="lightbox_label";
  lightboxImage.appendChild(lightboxh3);
}

function closeLightBox() {
  const lightbox = document.querySelector("#lightbox");
  lightbox.close();
  lightbox.setAttribute("aria-hidden", "true");
}

// bouton fermeture de la modale
const lightbox = document.querySelector("#lightbox");
const lightboxClose = document.createElement("img"); 
lightboxClose.src = "./assets/icons/close.svg";
lightboxClose.setAttribute("alt", "Ferme la lightbox");
lightboxClose.addEventListener("click", function () {
  closeLightBox();
});


// Ajout des images et vidéos dans la modale
function populateCarousel(mediaList) {
  lightbox.innerHTML = ""; // Vider le carousel
  mediaList.forEach((media) => {
    let mediaElement;
    if (media.type === "video") {
      mediaElement = document.createElement("video");
      mediaElement.src = media.src;
      mediaElement.controls = true;
    } else {
      mediaElement = document.createElement("img");
      mediaElement.src = media.src;
    }
    mediaElement.classList.add(".grid-item");
    lightbox.appendChild(mediaElement);
  });
}

// Afficher l'élément actif
function showItem(index) {
  const items = document.querySelectorAll(".grid-item");
  items.forEach((item) => item.classList.remove("active"));
  items[index].classList.add("active");
  items[index].setAttribute("tabindex", "0"); // Rendre l'élément actif focusable via le clavier 
  items[index].focus(); // Déplacer le focus vers l'élément actif
}

// Ouverture de la modale au clic sur un élément média
const items = document.querySelectorAll(".grid-item");
items.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentIndex = index;
    populateCarousel(item.mediaList); // `mediaList` doit être attaché à `item`
    showItem(currentIndex);
    lightbox.style.display = "flex";
  });
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeLightBox();
  }
});