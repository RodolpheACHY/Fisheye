// eslint-disable-next-line no-unused-vars
function photographerTemplate(data) {
    // Destructuration de data pour récupérer les données utiles 
    const { name, id, city, country, tagline, price, portrait } = data;

    // Construction du chemin d'accès à l'image du portrait 
    const picture = `./assets/photographers/${portrait}`;

    // Fonction qui crée et retourne l'élément DOM représentant la carte sur laquelle on va cliquer
    function getUserCardDOM() {

        // Création d'un élémént article pour chaque photographe
        const article = document.createElement( 'article' );
        // Utilisation de l'attribut data-id pour stocker l'ID du photographe
        article.dataset.id = data.id;
        console.log(article.dataset.id);
        article.classList.add("photographer-item");

        // Création du lien pointant vers la page du photographe
        const aLink = document.createElement("a");
        aLink.setAttribute("href", "photographer.html?id=" + id);
        article.appendChild(aLink);

        const img = document.createElement( 'img' );
        img.setAttribute("alt", `${name} - page photographe de ${name}`);
        img.setAttribute("src", picture);
        aLink.appendChild(img);

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        aLink.appendChild(h2);

        const pCityCountry = document.createElement( 'p' );
        pCityCountry.textContent = `${city}, ${country}`;
        pCityCountry.classList.add("pCityCountry");
        pCityCountry.setAttribute("aria-label", `Location: ${city}, ${country}`);
        aLink.appendChild(pCityCountry);

        const pTagline = document.createElement( 'p' );
        pTagline.textContent = tagline;
        pTagline.classList.add("pTagline");
        pTagline.setAttribute("aria-label", `Tagline: ${tagline}`);
        aLink.appendChild(pTagline);

        const pPrice = document.createElement( 'p' )
        pPrice.textContent = `${price}€/jour`;
        pPrice.classList.add("pPrice");
        pPrice.setAttribute("aria-label", `Prix: ${price} euros par jour`);
        aLink.appendChild(pPrice);

        // On retourne l'élément <article> complet 
        return (article);
    }
    // On retourne un objet contenant le nom du photogrpahe, le chemin de l'image, et la méthode pour créer la carte utilisateur 
    return { name, picture, getUserCardDOM }
}
