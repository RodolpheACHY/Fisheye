    /* global photographerTemplate */
    async function getPhotographers() {
        const response = await fetch("/data/photographers.json");
        let datas = await response.json();
        console.log(datas)
        return ({
            datas})
            
    }
    
    async function displayData(datas) {
        const photographersSection = document.querySelector(".photographer_section");
        console.log(datas) 
        console.log(typeof datas)
        datas.photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const { datas } = await getPhotographers();
        displayData(datas);
    }
    
    init();

    