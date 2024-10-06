function photographerTemplate(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        // Création d'une balise dédiée à chaque photographe
        const article = document.createElement( 'article' );
        
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement( 'h3' );
        h3.textContent = `${city}, ${country}`; 
        const p = document.createElement( 'p' );
        p.textContent = tagline;
        const pPrice = document.createElement( 'p' )
        pPrice.textContent = `${price}€/jour`;
        article.dataset.id = data.id;
        console.log(article.dataset.id);
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(pPrice);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}