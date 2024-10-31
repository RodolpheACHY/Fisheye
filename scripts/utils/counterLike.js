async function CountLikes() { 
const counterLikeP = document.querySelector('p');
console.log(counterLikeP);
let isIncremented = false;
const pLike = document.createElement('p');
//pLike.textContent = myMedia.likes;
//let counter = pLike;

await fetch("/data/photographers.json") // Remplace par l'URL correcte
.then((res) => res.json())
.then((datas) => (datasLike = datas));  
console.log(datasLike);

//const datas = await response.json();


        
pLike.textContent = datasLike.likes;
console.log(pLike.value);
const heartIcon = document.createElement('i');
 
heartIcon.addEventListener('click', () => {
    if (isIncremented) { 
        counterLikeP.innerText = pLike--; 
    } else { 
        counterLikeP.innerText = pLike++; 
    } 
    isIncremented = !isIncremented; 
});

}

CountLikes();
        // counter++;
        //counterLike.innerHTML = counter;    // textContent car on ajoute du texte. Si on avait utilisé un p au lieu du h3, il aurait fallu utiliser innerHTML