function photographerTemplate(data) {
  const { name, id, city, country, tagline, price, portrait } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    // Création d'une balise dédiée à chaque photographe
    const article = document.createElement("article");

    const img = document.createElement("img");
    img.setAttribute("alt", name);
    img.setAttribute("src", picture);
    const aLink = document.createElement("a");
    aLink.setAttribute("href", "photographer.html?id=" + id);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    const h3 = document.createElement("h3");
    h3.textContent = `${city}, ${country}`;
    const p = document.createElement("p");
    p.textContent = tagline;
    const pPrice = document.createElement("p");
    pPrice.textContent = `${price}€/jour`;
    article.dataset.id = data.id;
    article.classList.add("photographer-item");
    console.log(article.dataset.id);

    aLink.appendChild(img);
    aLink.appendChild(h2);
    aLink.appendChild(h3);
    aLink.appendChild(p);
    aLink.appendChild(pPrice);
    article.appendChild(aLink);
    return article;
  }
  return { name, picture, getUserCardDOM };
}
