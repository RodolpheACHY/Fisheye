async function CountLikes() {
  console.log("CountLikes");
  const heartIcons = document.querySelectorAll(".heartIcon");
  let likedMedias = [];
  const globalCounter = document.querySelector("#containerCountLike p");
  let totalCount = 0;

  heartIcons.forEach((heartIcon) => {
    const counterLikeP = heartIcon.closest(".likeContainer").querySelector("p");
    let c = parseInt(counterLikeP.innerText, 10);
    totalCount += c;
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
      } else {
        likedMedias.push(id);
        pLike++;
        counterLikeP.innerHTML = pLike;
        globalCount++;
        globalCounter.innerHTML = globalCount;
      }
    });
  });

  globalCounter.innerHTML = totalCount;
}

//CountLikes();
// counter++;
//counterLike.innerHTML = counter;    // textContent car on ajoute du texte. Si on avait utilisé un p au lieu du h3, il aurait fallu utiliser innerHTML
