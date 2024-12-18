/* global photographerPageTemplate mediaFactory displayLightbox displayPhotographerName CountLikes */
// eslint-disable-next-line no-unused-vars
let photographerMedias = [];
// eslint-disable-next-line no-unused-vars
let photographerFolder = "";
// récupère les datas de tous les photographes
async function getPhotographerData(photographerId) {
  const response = await fetch("./data/photographers.json");
  const datas = await response.json();
  const sortType = document.getElementById('filter-select').value;

  // Filtre des photographes par leur ID 
  const photographer = datas.photographers.filter(
    (p) => p.id === photographerId
  );

  if (!photographer) {
    throw new Error("Photographe non trouvé");
  }

  // Filtre des médias pour un photographe spécifique
  const medias = datas.media.filter(
    (media) => media.photographerId === photographerId
  );

  // Tri des médias selon le type de tri sélectionné 
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
    const mediaContainer = document.getElementById("media-container");
    mediaContainer.innerHTML = ''; // Vider le conteneur
    photographerData.medias.forEach((m) => { 
      const myMedia = mediaFactory(m, photographerData.photographer.folder);
      
      const div = document.createElement("div");
      div.innerHTML = myMedia.getMarkup();
      div.setAttribute("aria-label", `Media intitulé: ${myMedia.title}`);

      const h2 = document.createElement("h2");
      h2.textContent = myMedia.title;
      h2.setAttribute("aria-label", `Titre: ${myMedia.title}`);

      const likeContainer = document.createElement("div");
      likeContainer.classList.add("likeContainer");

      const pLike = document.createElement("p");
      pLike.textContent = myMedia.likes;
      pLike.setAttribute("aria-label", `Likes: ${myMedia.likes}`)

      const heartIcon = document.createElement("button");
      heartIcon.classList.add("fa-solid", "fa-heart", "heartIcon");

      likeContainer.append(pLike, heartIcon);

      const h2LikeContainer = document.createElement("div");
      h2LikeContainer.classList.add("h2LikeContainer");
      h2LikeContainer.append(h2, likeContainer);

      div.append(h2LikeContainer);
      div.classList.add("grid-item");
      div.dataset.mediaId = m.id;
      div.setAttribute("id", myMedia.id); 
      mediaContainer.append(div);
    });

    document.querySelectorAll(".grid-item").forEach((item) => {
      // on sélectionne les éléments img et vidéo à l'intérieur de chqe grid-item
      const mediaElments = item.querySelectorAll ("img, video");
      mediaElments.forEach((media) => {
        // On ajoute un écouteur d'évènement au clic à chqe media
        media.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = e.target.closest(".grid-item").dataset.mediaId;
        displayLightbox(id);
        });

        // On ajoute un écouteur d'évènement keydown à chqe media
        media.addEventListener("keydown", (e) => { 
          if (e.key === "Enter" || e.key === " ") { // Vérifier les touches"Enter" et "Space"
            e.preventDefault(); // Empêcher le comportement par défaut 
            e.stopPropagation();
            const id = e.target.closest(".grid-item").dataset.mediaId; 
            displayLightbox(id); 
          }     
        });
      });  
    });
  }
 //};

 // Afficher les médias initialement
 displayMedias(photographerData.medias, photographerData.photographer);

 // Afficher le nom du photographe 
 displayPhotographerName(photographerData.photographer.name);

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
