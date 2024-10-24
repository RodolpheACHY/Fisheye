const buttons = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slide");

// Tableau d'images: [0, 1, 2]

//console.log(slides);
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        //console.log(e.target.id);
        const calcNextSlide = e.target.id === "next" ? 1 : -1;   // pour savoir si on doit faire un +1 ou un -1
        const slideActive = document.querySelector(".active");
        //console.log(slides);  // slides retourne un nodelist et pas un tableau
        //console.log([...slides].indexOf(slideActive)); // permet de destructurer la nodelist slides pour créer un tableau et de savoir à quel indec se trouve la classe slideActive active aved indexOff()
        newIndex = calcNextSlide + [...slides].indexOf(slideActive);
        //console.log(newIndex);
        if (newIndex < 0) newIndex = [...slides].length -1;    // pour aller sur le dernier élément du tableau. Ici qd on est sur -1 et clique en arrière, on arrive sur 2.
        if (newIndex >= [...slides].length) newIndex = 0; // qd on est sur 2 et qd on clique sur droite, on retourne à 0
        slides[newIndex].classList.add("active");
        slideActive.classList.remove("active");
    });
});