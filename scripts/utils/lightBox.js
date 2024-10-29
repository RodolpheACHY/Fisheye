function displayLightbox() {
    const lightbox = document.querySelector('.lightbox');
	lightbox.style.display = "block";
}

function closeLightBox() {
   // const lightbox = document.getElementById("lightbox");
   const lightbox = document.querySelector('.lightbox');
    lightbox.style.display = "none";
}


const gridItems = document.querySelectorAll('.grid-item');
//const lightbox = document.querySelector('.lightbox');
//const lightboxImage = document.querySelector('.lightbox-image');
//const closeButton = document.querySelector('.close');   

const lightboxDiv = document.createElement("div");
const lightboxClose = document.createElement("img");
const lightImgElement = document.createElement("img");
lightboxDiv.classList.add('lightbox');
lightboxClose.classList.add('close');
lightImgElement.classList.add('lightbox-image');
lightboxClose.src = "assets/icons/close.svg";
const body = document.querySelector("body");
lightboxDiv.append(lightboxClose);
lightboxDiv.append(lightImgElement);
body.append(lightboxDiv);



gridItems.forEach(item => {
  item.addEventListener('click', () => {
    console.log("test");
    //lightImgElement.src= item.src;
    //lightbox.style.display = 'flex';
    //lightboxDiv.style.display = 'flex';
    //displayLightbox();
    
  });
});

lightboxClose.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
