let photographerMedias = [];
let photographerFolder = "";
//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographerData(photographerId) {
  const response = await fetch("/data/photographers.json"); // Remplace par l'URL correcte
  const datas = await response.json();
  sortType = document.getElementById('filter-select').value;

  const photographer = datas.photographers.filter(
    (p) => p.id === photographerId
  );

  if (!photographer) {
    throw new Error("Photographe non trouvé");
  }

  // Filtrer les médias pour le photographe spécifique
  const medias = datas.media.filter(
    (media) => media.photographerId === photographerId
  );

  switch (sortType) {
    case "populary":
      medias.sort((a, b) => b.likes - a.likes); // Tri décroissant par popularité
      break;
    case "date":
      medias.sort((a, b) => new Date(b.date) - new Date(a.date)); // Tri décroissant par date
      break;
    case "title":
      medias.sort((a, b) => a.title.localeCompare(b.title)); // Tri alphabétique par titre
      break;
    default:
      // Pas de tri si le type n'est pas reconnu
      break;
  }

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
    const filterSelect = document.getElementById('filter-select');
    // Récupérer les médias du photographe
    let photographerData = await getPhotographerData(photographerId);
    
    //Fonction pour afficher les médias 
    const displayMedias = () => {
    // Afficher les médias dans la console
    console.log("medias", photographerData.medias);   //photographerData.medias
    const mediaContainer = document.getElementById("media-container");
    mediaContainer.innerHTML = ''; // Vider le conteneur
    photographerData.medias.forEach((m) => {      //photographerData.medias
      const myMedia = mediaFactory(m, photographerData.photographer.folder);   //photographerData.photographer.folder
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
};


//Afficher les médias initialement
displayMedias(photographerData.medias, photographerData.photographer);

// Ajouter l'écouteur d'événements pour le changement de tri
filterSelect.addEventListener('change', async () => {
    photographerData = await getPhotographerData(photographerId);
    displayMedias(photographerData.medias, photographerData.photographer);
  });


  displayDataPage(photographerData.photographer);
  CountLikes();
  } else {
    console.log("Aucun ID de photographe trouvé dans l'URL.");
  }
}
// Appeler la fonction d'initialisation au chargement de la page
init();
