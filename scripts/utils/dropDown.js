export class DropDown {
    constructor(photographer) {
        this.photographer = photographer;
        this.setupEventListeners();
    }

    setupEventListeners() {
        const sortByLikesButton = document.getElementById('sort-by-likes');
        sortByLikesButton.classList.add('sort__option');
        sortByLikesButton.tabIndex = 0; // Add tabindex to sortByLikesButton
    
        const sortByDateButton = document.getElementById('sort-by-date');
        sortByDateButton.classList.add('sort__option');
        sortByDateButton.tabIndex = 0; // Add tabindex to sortByDateButton
    
        const sortByTitleButton = document.getElementById('sort-by-title');
        sortByTitleButton.classList.add('sort__option');
        sortByTitleButton.tabIndex = 0; // Add tabindex to sortByTitleButton
        const detailsElement = document.querySelector('.dropDown');
        const valueElement = document.querySelector('.dropDown summary .value');
        const optionsContainer = document.querySelector('.dropDown .options');

        const closeDropdown = () => {
            detailsElement.removeAttribute('open'); // Close the dropdown
        };

        const updateDisplayedValue = (newValue) => {
            valueElement.innerText = newValue;
        };

        const reorderOptions = (selectedOption) => {
            const options = Array.from(optionsContainer.children);
            const selectedElement = options.find(option => option.id === selectedOption);
            optionsContainer.prepend(selectedElement);
        };

        sortByLikesButton.addEventListener('click', () => {
            this.sortBy('popularity');
            updateDisplayedValue('popularité');
            reorderOptions('sort-by-likes');
            closeDropdown();
        });
        sortByLikesButton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.sortBy('popularity');
            updateDisplayedValue('popularité');
            reorderOptions('sort-by-likes');
            closeDropdown();n
            }
        });

        sortByDateButton.addEventListener('click', () => {
            this.sortBy('date');
            updateDisplayedValue('date');
            reorderOptions('sort-by-date');
            closeDropdown();
        });
        sortByDateButton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.sortBy('date');
            updateDisplayedValue('date');
            reorderOptions('sort-by-date');
            closeDropdown();
            }
        });

        sortByTitleButton.addEventListener('click', () => {
            this.sortBy('title');
            updateDisplayedValue('titre');
            reorderOptions('sort-by-title');
            closeDropdown();
        });
        sortByTitleButton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.sortBy('title');
                updateDisplayedValue('titre');
                reorderOptions('sort-by-title');
                closeDropdown();
            }
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
                break;
            case "date":
                console.log("date");
                this.photographer.mediasDatas.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case "title":
                console.log("titre");
                this.photographer.mediasDatas.sort((a, b) => a.title.localeCompare(b.title));
                break;
        }
        this.photographer.renderMedia(this.photographer.mediasDatas, this.photographer.photographerModel);
    }
}