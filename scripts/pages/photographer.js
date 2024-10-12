//Mettre le code JavaScript lié à la page photographer.html
async function getMediasByPhotographer(photographerId) {
    const response = await fetch('/data/photographers.json'); // Remplace par l'URL correcte
    const datas = await response.json();

    // Filtrer les médias pour le photographe spécifique
    const medias = datas.media.filter(media => media.photographerId === photographerId);

    console.log(medias); // Affiche les médias du photographe dans la console
    return ({medias, datas});
}

function displayDataPage(datas) {
    const photographHeader = document.querySelector(".photograph-header");
    
    // Récupérer l'ID du photographe depuis l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const photographerId = parseInt(urlParams.get('id'));  // Assure-toi que l'URL contient ?id=XX
    // Trouver le photographe correspondant à cet ID
    const photographer = datas.photographers.find(p => p.id === photographerId);
    // afficher les données du photographe
    const photographerModel = photographerPageTemplate(photographer);
    const getPageUserCardDOM = photographerModel.getPageUserCardDOM();
    photographHeader.appendChild(getPageUserCardDOM);
}

async function init() {
    // Récupérer l'ID du photographe depuis l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const photographerId = parseInt(urlParams.get('id'));  // Assure-toi que l'URL contient ?id=XX
    
    // Vérifier que l'ID du photographe est bien présent
    if (photographerId) {
        // Récupérer les médias du photographe
        const medias = await getMediasByPhotographer(photographerId);
        // Afficher les médias dans la console
        console.log(medias);
    } else {
        console.log("Aucun ID de photographe trouvé dans l'URL.");
    }
    // const { datas } = await getPhotographers();
    const { datas } = await getMediasByPhotographer();
    displayDataPage(datas);
}

// Appeler la fonction d'initialisation au chargement de la page
init();

