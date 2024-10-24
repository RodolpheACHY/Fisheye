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

  return { photographer: photographer[0], medias };
}

function displayDataPage(photographer) {
  const photographHeader = document.querySelector(".photograph-header");

  // afficher les données du photographe
  const photographerModel = photographerPageTemplate(photographer);
  const getPageUserCardDOM = photographerModel.getPageUserCardDOM();
  photographHeader.appendChild(getPageUserCardDOM);
}

async function init() {
  // Récupérer l'ID du photographe depuis l'URL
  const urlParams = new URLSearchParams(window.location.search);
  const photographerId = parseInt(urlParams.get("id")); // Assure-toi que l'URL contient ?id=XX

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
      // div.classList.add(slide)
      mediaContainer.append(div);
    });
    displayDataPage(photographerData.photographer);
  } else {
    console.log("Aucun ID de photographe trouvé dans l'URL.");
  }
}

// Appeler la fonction d'initialisation au chargement de la page
init();
