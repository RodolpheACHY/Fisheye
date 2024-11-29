
// eslint-disable-next-line no-unused-vars
async function CountLikes() {
  console.log("CountLikes");
  const heartIcons = document.querySelectorAll(".heartIcon");
  let likedMedias = [];
  const globalCounter = document.querySelector("#containerCountLike p");
  // total initial des likes présents sur tous les éléments de la page
  let totalCount = 0;

  // accessibilté liée au compteur global
  globalCounter.setAttribute("aria-live", "polite"); 
  globalCounter.setAttribute("role", "status"); 
  globalCounter.setAttribute("aria-label", "Total des likes");

  heartIcons.forEach((heartIcon) => {
    const counterLikeP = heartIcon.closest(".likeContainer").querySelector("p");
    // nbre de like pour un seul item 
    let likesForSingleItem = parseInt(counterLikeP.innerText, 10);
    totalCount += likesForSingleItem;

    heartIcon.setAttribute("aria-pressed", "false"); // indique l'état du bouton 
    heartIcon.setAttribute("tabindex", "0"); // permet de donner le focus
    
    // gestion au clic de mise à jour nbre de like par item
    heartIcon.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      e.stopPropagation();
      // cette variable est utilisée dans les évènements pour gérer le compteur globale en temps réel
      let globalCount = parseInt(globalCounter.textContent, 10);
      const id = e.target.closest(".grid-item").getAttribute("id");
      const isIncremented = likedMedias.includes(id);
      const counterLikeP = e.target
        .closest(".likeContainer")
        .querySelector("p");

      // Gestion dynamique du nbre de likes pour un seul item lors d'un clic ou qd on appuie sur une touche
      let currentItemLikes = parseInt(counterLikeP.innerText, 10);
      console.log("counterLikeP", counterLikeP, currentItemLikes);
      console.log("e", e.target);
      console.log("isIncremented", isIncremented);

      if (isIncremented) {
        likedMedias = likedMedias.filter((item) => item !== id);
        currentItemLikes--;
        counterLikeP.innerHTML = currentItemLikes;
        globalCount--;
        globalCounter.innerHTML = globalCount;
        heartIcon.setAttribute("aria-pressed", "false"); // Met à jour aria-pressed
      } else {
        likedMedias.push(id);
        currentItemLikes++;
        counterLikeP.innerHTML = currentItemLikes;
        globalCount++;
        globalCounter.innerHTML = globalCount;
        heartIcon.setAttribute("aria-pressed", "true"); // Met à jour aria-pressed
      }
    });

    // gestion au clavier de mise à jour nbre de like par item
    heartIcon.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
        let globalCount = parseInt(globalCounter.textContent, 10);
        const id = e.target.closest(".grid-item").getAttribute("id");
        const isIncremented = likedMedias.includes(id);
        const counterLikeP = e.target
          .closest(".likeContainer")
          .querySelector("p");

        let currentItemLikes = parseInt(counterLikeP.innerText, 10);
        console.log("counterLikeP", counterLikeP, currentItemLikes);
        console.log("e", e.target);
        console.log("isIncremented", isIncremented);

        if (isIncremented) {
          likedMedias = likedMedias.filter((item) => item !== id);
          currentItemLikes--;
          counterLikeP.innerHTML = currentItemLikes;
          globalCount--;
          globalCounter.innerHTML = globalCount;
          heartIcon.setAttribute("aria-pressed", "false"); // Mettre à jour aria-pressed
        } else {
          likedMedias.push(id);
          currentItemLikes++;
          counterLikeP.innerHTML = currentItemLikes;
          globalCount++;
          globalCounter.innerHTML = globalCount;
          heartIcon.setAttribute("aria-pressed", "true"); // Mettre à jour aria-pressed
        }
      }
    });
  });

  // Initialisation du compteur globale avec la somme totale des likes déjà présents sur la page
  globalCounter.innerHTML = totalCount;
}