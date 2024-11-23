/* eslint-disable no-unused-vars */
async function CountLikes() {
  console.log("CountLikes");
  const heartIcons = document.querySelectorAll(".heartIcon");
  let likedMedias = [];
  const globalCounter = document.querySelector("#containerCountLike p");
  let totalCount = 0;

  // Ajouter un aria-live pour le compteur global
  globalCounter.setAttribute("aria-live", "polite"); 
  globalCounter.setAttribute("role", "status"); 
  globalCounter.setAttribute("aria-label", "Total des likes");

  heartIcons.forEach((heartIcon) => {
    const counterLikeP = heartIcon.closest(".likeContainer").querySelector("p");
    let c = parseInt(counterLikeP.innerText, 10);
    totalCount += c;

    heartIcon.setAttribute("aria-pressed", "false"); // indique l'état du bouton 
    heartIcon.setAttribute("tabindex", "0"); // permet de donner le focus
    
    // gestion au clic de mise à jour nbre de like par item
    heartIcon.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      e.stopPropagation();
      let globalCount = parseInt(globalCounter.textContent, 10);
      const id = e.target.closest(".grid-item").getAttribute("id");
      const isIncremented = likedMedias.includes(id);
      const counterLikeP = e.target
        .closest(".likeContainer")
        .querySelector("p");

      let pLike = parseInt(counterLikeP.innerText, 10);
      console.log("counterLikeP", counterLikeP, pLike);
      console.log("e", e.target);
      console.log("isIncremented", isIncremented);

      if (isIncremented) {
        likedMedias = likedMedias.filter((item) => item !== id);
        pLike--;
        counterLikeP.innerHTML = pLike;
        globalCount--;
        globalCounter.innerHTML = globalCount;
        heartIcon.setAttribute("aria-pressed", "false"); // Met à jour aria-pressed
      } else {
        likedMedias.push(id);
        pLike++;
        counterLikeP.innerHTML = pLike;
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

        let pLike = parseInt(counterLikeP.innerText, 10);
        console.log("counterLikeP", counterLikeP, pLike);
        console.log("e", e.target);
        console.log("isIncremented", isIncremented);

        if (isIncremented) {
          likedMedias = likedMedias.filter((item) => item !== id);
          pLike--;
          counterLikeP.innerHTML = pLike;
          globalCount--;
          globalCounter.innerHTML = globalCount;
          heartIcon.setAttribute("aria-pressed", "false"); // Mettre à jour aria-pressed
        } else {
          likedMedias.push(id);
          pLike++;
          counterLikeP.innerHTML = pLike;
          globalCount++;
          globalCounter.innerHTML = globalCount;
          heartIcon.setAttribute("aria-pressed", "true"); // Mettre à jour aria-pressed
        }
      }
    });
  });

  globalCounter.innerHTML = totalCount;
}