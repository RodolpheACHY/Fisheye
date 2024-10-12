function photographerPageTemplate(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getPageUserCardDOM() {
        // Création d'une balise dédiée à chaque photographe
        const containerPagePhotographer = document.querySelector(".photograph-header");
        const main = document.getElementById("main");
        const containerH2Paragraph = document.createElement('div');
        const article = document.createElement( 'article' );
        const divImg = document.createElement('div');
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
        containerH2Paragraph.dataset.id = data.id;
        console.log(article.dataset.id);
        const imgLogoHeader = document.querySelector(".logo");
        imgLogoHeader.setAttribute("role", "img");
        article.classList.add("photographer-item");
        divImg.appendChild(img);
        const buttonContact = document.createElement("button");
        buttonContact.classList.add("contact_button");
        buttonContact.textContent = "Contactez-moi";
        buttonContact.addEventListener('click', function() {
            displayModal();
        });
        containerH2Paragraph.classList.add("h2-paragraph");
        containerH2Paragraph.appendChild(h2);
        containerH2Paragraph.appendChild(pCityCountry);
        containerH2Paragraph.appendChild(pTagline);
        containerPagePhotographer.appendChild(containerH2Paragraph);
        containerPagePhotographer.appendChild(buttonContact);
        containerPagePhotographer.appendChild(divImg);
        main.appendChild(pPrice);
        return (article);
    }
    return { name, picture, getPageUserCardDOM }
}

