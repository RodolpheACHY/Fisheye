let photographerMedias = [];
let photographerFolder = "";
//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographerData(photographerId) {
  const response = await fetch("/data/photographers.json"); // Remplace par l'URL correcte
  const datas = await response.json();

  const photographer = datas.photographers.filter(
    (p) => p.id === photographerId
  );

  // Filtrer les médias pour le photographe spécifique
  const medias = datas.media.filter(
    (media) => media.photographerId === photographerId
  );
  photographerMedias = medias;
  photographerFolder = photographer[0].folder;
  return { photographer: photographer[0], medias };
}

function displayDataPage(photographer) {
  const photographerModel = photographerPageTemplate(photographer);
  return photographerModel.getPageUserCardDOM();
}

async function init() {
  // Récupérer l'ID du photographe depuis l'URL
  const urlParams = new URLSearchParams(window.location.search);
  const photographerId = parseInt(urlParams.get("id")); // pour s'assurer que l'URL contient ?id=XX

  // Vérifier que l'ID du photographe est bien présent
  if (photographerId) {
    // Récupérer les médias du photographe
    const photographerData = await getPhotographerData(photographerId);
    // Afficher les médias dans la console
    console.log("medias", photographerData.medias);
    const mediaContainer = document.getElementById("media-container");
    photographerData.medias.forEach((m) => {
      const myMedia = mediaFactory(m, photographerData.photographer.folder);
      console.log("myMedia", myMedia);
      console.log("myMedia.getMarkup", myMedia.getMarkup());
      const div = document.createElement("div");
      // const slide = document.querySelector("")
      div.innerHTML = myMedia.getMarkup();
      const h2 = document.createElement("h2");
      h2.textContent = myMedia.title;
      //div.append(h2);
      const likeContainer = document.createElement("div");
      likeContainer.classList.add("likeContainer");
      const pLike = document.createElement("p");
      pLike.textContent = myMedia.likes;
      const heartIcon = document.createElement("i");
      heartIcon.classList.add("fa-solid", "fa-heart", "heartIcon");
      likeContainer.append(pLike, heartIcon);
      const h2LikeContainer = document.createElement("div");
      h2LikeContainer.classList.add("h2LikeContainer");
      h2LikeContainer.append(h2, likeContainer);
      div.append(h2LikeContainer);
      div.classList.add("grid-item");
      div.dataset.mediaId = m.id;
      div.setAttribute("id", myMedia.id);
      //div.append(likeContainer);
      mediaContainer.append(div);
    });
    document.querySelectorAll(".grid-item").forEach((item) => {
      item.addEventListener("click", (e) => {
        const id = e.target.closest(".grid-item").dataset.mediaId;
        displayLightbox(id);
      });
    });
    displayDataPage(photographerData.photographer);
    CountLikes();
  } else {
    console.log("Aucun ID de photographe trouvé dans l'URL.");
  }
}

// Appeler la fonction d'initialisation au chargement de la page
init();
