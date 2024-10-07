function photographerTemplate(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        // Création d'une balise dédiée à chaque photographe
        const article = document.createElement( 'article' );

        const img = document.createElement( 'img' );
        img.setAttribute("alt", `${name} - page photographe de ${name}`);
        img.setAttribute("src", picture);
        const aLink = document.createElement("a");
        aLink.setAttribute("href", "photographer.html?id=" + id);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const pCityCountry = document.createElement( 'p' );
        pCityCountry.textContent = `${city}, ${country}`;
        pCityCountry.classList.add("pCityCountry");
        const pTagline = document.createElement( 'p' );
        pTagline.textContent = tagline;
        pTagline.classList.add("pTagline");
        const pPrice = document.createElement( 'p' )
        pPrice.textContent = `${price}€/jour`;
        pPrice.classList.add("pPrice");
        article.dataset.id = data.id;
        console.log(article.dataset.id);
        const imgLogoHeader = document.querySelector(".logo");
        imgLogoHeader.setAttribute("role", "img");
        article.classList.add("photographer-item");
        aLink.appendChild(img);
        aLink.appendChild(h2);
        aLink.appendChild(pCityCountry);
        aLink.appendChild(pTagline);
        aLink.appendChild(pPrice);
        article.appendChild(aLink);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}