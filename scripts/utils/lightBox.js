let currentIndex = 0;

function displayLightbox(id) {
  console.log("id", id, photographerMedias);
  currentIndex = photographerMedias.findIndex(
    (m) => m.id.toString() === id.toString()
  );
  const m = photographerMedias[currentIndex];
  console.log("m", m);
  const myMedia = mediaFactory(m, photographerFolder);
  console.log("myMedia", myMedia.getMarkup());
  const lightbox = document.querySelector(".lightbox");
  const lightboxImage = document.querySelector(".lightbox-image");
  if (lightbox) {
    lightbox.style.display = "flex";
    lightboxImage.innerHTML = myMedia.getMarkup();
  }
  const lightboxh3 = document.createElement("h3");
  lightboxh3.textContent = `${myMedia.title}`;
  lightboxh3.classList.add("lightboxh3");
  lightboxImage.appendChild(lightboxh3);
}

function closeLightBox() {
  const lightbox = document.querySelector(".lightbox");
  lightbox.style.display = "none";
}

const lightbox = document.querySelector(".lightbox");
const lightboxClose = document.createElement("img"); //bouton fermeture de la modale
lightboxClose.src = "assets/icons/close.svg";
lightboxClose.addEventListener("click", function () {
  closeLightBox();
});


// Ajouter les images et vidéos dans la modal
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
}

// Ouverture de la modal au clic sur un élément média
const items = document.querySelectorAll(".grid-item");
items.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentIndex = index;
    populateCarousel(item.mediaList); // `mediaList` doit être attaché à `item`
    showItem(currentIndex);
    lightbox.style.display = "flex";
  });
});
