//Mettre le code JavaScript lié à la page photographer.html
async function getMediasByPhotographer(photographerId) {
    const response = await fetch('/data/photographers.json'); // Remplace par l'URL correcte
    const data = await response.json();

    // Filtrer les médias pour le photographe spécifique
    const medias = data.media.filter(media => media.photographerId === photographerId);

    console.log(medias); // Affiche les médias dans la console
    return medias;
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
}

// Appeler la fonction d'initialisation au chargement de la page
init();

