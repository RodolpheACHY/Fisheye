function photographerTemplate(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        // Création d'une balise dédiée à chaque photographe
        const article = document.createElement( 'article' );
        article.dataset.id = data.id;
        console.log(article.dataset.id);
        article.classList.add("photographer-item");

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
        pPrice.setAttribute("aria-label", `Price: ${price} euros per day`);
        aLink.appendChild(pPrice);

        const imgLogoHeader = document.querySelector(".logo");
        imgLogoHeader.setAttribute("role", "img");
        
        return (article);
    }
    return { name, picture, getUserCardDOM }
}
