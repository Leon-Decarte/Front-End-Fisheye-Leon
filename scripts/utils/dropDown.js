export class DropDown {
    constructor(photographer) {
        this.setupEventListeners();
        this.photographer=photographer;
    }

    setupEventListeners() {
        const sortByLikesButton = document.getElementById('sort-by-likes');
        const sortByDateButton = document.getElementById('sort-by-date');
        const sortByTitleButton = document.getElementById('sort-by-title');

        sortByLikesButton.addEventListener('click', () => {
            this.sortBy('popularity');
        });

        sortByDateButton.addEventListener('click', () => {
            this.sortBy('date');
        });

        sortByTitleButton.addEventListener('click', () => {
            this.sortBy('title');
        });
    }

    sortBy(choiceFilter) {

         // Clear existing content before rendering sorted content
    const mediaContainer = document.querySelector('.photographer-media');
    mediaContainer.innerHTML = ''; // Clear the existing content

        switch (choiceFilter) {
            case "popularity":
                console.log("populaire");
                this.photographer.mediasDatas.sort((a, b) => b.likes - a.likes);
                this.photographer.renderMedia(this.photographer.mediasDatas,this.photographer.photographerModel);
                break;
            case "date":
                console.log("date")

                this.photographer.mediasDatas.sort((a, b) => new Date(b.Date) - new Date(a.Date));
                this.photographer.renderMedia(this.photographer.mediasDatas,this.photographer.photographerModel);
                break;
            case "title":
                console.log("titre")

                this.photographer.mediasDatas.sort((a, b) => a.title.localeCompare(b.title));
                this.photographer.renderMedia(this.photographer.mediasDatas,this.photographer.photographerModel);
                break;
        }
    }
}
