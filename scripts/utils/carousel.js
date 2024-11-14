prevBtn = document.createElement("button");
prevBtn.id = "prev";
prevBtn.classList.add("btn");
prevBtn.setAttribute("aria-label", "Previous Image");

nextBtn = document.createElement("button");
nextBtn.id = "next";
nextBtn.classList.add("btn");
nextBtn.setAttribute("aria-label", "Next Image");

lightbox.append(prevBtn, nextBtn);

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const gridItems = document.querySelectorAll(".grid-item");
    const calcNextSlide = e.target.id === "next" ? 1 : -1; // pour savoir si on doit faire un +1 ou un -1
    console.log("calcNextSlide", calcNextSlide);
    let nextIndex = currentIndex + calcNextSlide;
    if (nextIndex < 0) nextIndex = gridItems.length - 1; // pour aller sur le dernier élément du tableau. Ici qd on est sur -1 et clique en arrière, on arrive sur 2.
    if (nextIndex >= gridItems.length) nextIndex = 0; // qd on est sur 2 et qd on clique sur droite, on retourne à 0
    displayLightbox(photographerMedias[nextIndex].id);
  });
});
