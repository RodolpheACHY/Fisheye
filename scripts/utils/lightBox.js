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

    //setSlideIndex(id);
    //showSlides();
    //lightboxImage.src = id;  //met à jour l'image
    //lightbox.classList.add("active");
  }
}

function closeLightBox() {
  const lightbox = document.querySelector(".lightbox");
  lightbox.style.display = "none";
}

const lightbox = document.querySelector(".lightbox");

//const lightboxImage = document.querySelector('.lightbox-image');
//const closeButton = document.querySelector('.close');

//const lightboxDiv = document.createElement("div"); // modale affichant les médias
const lightboxClose = document.createElement("img"); //bouton fermeture de la modale
//const lightImgElement = document.createElement("img"); // image ou vidéo qui s'affiche dans la modale
//lightboxDiv.classList.add('lightbox');
//lightboxClose.classList.add('close');
//lightImgElement.classList.add('lightbox-image');
lightboxClose.src = "assets/icons/close.svg";
//const body = document.querySelector("body");
//lightboxDiv.append(lightboxClose);
//lightboxDiv.append(lightImgElement);
//body.append(lightboxDiv);
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

/*
const gridItems = document.querySelectorAll('.grid-item');   //cible tous les items du user sur la page en cours
gridItems.forEach(item, index => {
  item.addEventListener('click', () => {
    currentIndex = index;
    console.log("test");
    const imgSrc = item.querySelector('img').src; //récup la source de l'image
    displayLightbox(imgSrc);
    //lightImgElement.src= item.src;
    //lightbox.style.display = 'flex';
    //lightboxDiv.style.display = 'flex';
    
    
  });
}); */
