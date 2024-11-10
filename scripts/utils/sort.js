function sortMediaByLikes() {
    const sortSelect = document.getElementById('filter-select');
    console.log("sortSelect: ", sortSelect);
    sortSelect.addEventListener("change", function () {
        const selectedValue = this.value;
        if (selectedValue === "populary") {
            const sortedMedias = photographerData.medias.sort((a, b) => b.likes - a.likes);
            console.log("sortedMedias:" + sortedMedias);
            const mediaContainer = document.getElementById("media-container");
            mediaContainer.innerHTML = '';
            displayData(sortedMedias);
        }   
    });
}