//document.addEventListener('DOMContentLoaded', function() {
prevBtn = document.createElement("button");
nextBtn = document.createElement("button");
prevBtn.id = "prev";
nextBtn.id = "next";
prevBtn.classList.add("btn");
nextBtn.classList.add("btn");
prevBtn.innerHTML = "&#10096;";
nextBtn.innerHTML = "&#10097;";
lightbox.append(prevBtn, nextBtn);

const buttons = document.querySelectorAll(".btn");
//const slides = document.querySelectorAll(".slide");
//const gridItems = document.querySelectorAll(".grid-item");
//console.log(gridItems);

// Tableau d'images: [0, 1, 2]

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    //console.log(e.target.id);
    const gridItems = document.querySelectorAll(".grid-item");
   /**
    * todo récupérer les objets media à partir de l'attribut data-media
    */
    const calcNextSlide = e.target.id === "next" ? 1 : -1; // pour savoir si on doit faire un +1 ou un -1
    const slideActive = document.querySelector(".active");
    //console.log(gridItems);  // slides retourne un nodelist et pas un tableau
    //console.log([...slides].indexOf(slideActive)); // permet de destructurer la nodelist slides pour créer un tableau et de savoir à quel index se trouve la classe slideActive active aved indexOff()
    console.log(gridItems, slideActive);
    newIndex = calcNextSlide + [...gridItems].indexOf(slideActive);
    //console.log(newIndex);
    if (newIndex < 0) newIndex = [...gridItems].length - 1; // pour aller sur le dernier élément du tableau. Ici qd on est sur -1 et clique en arrière, on arrive sur 2.
    if (newIndex >= [...gridItems].length) newIndex = 0; // qd on est sur 2 et qd on clique sur droite, on retourne à 0
    gridItems[newIndex].classList.add("active");
   

    slideActive.classList.remove("active");
  });
});

//});
