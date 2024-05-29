export class MediaTemplate {

    constructor(mediaModel, lightbox) {
        this.mediaModel = mediaModel;
        this.lightbox = lightbox;
    }

    renderCard() {
        const div = document.createElement('div');
        div.classList.add('media-card');


        // Créer un div pour encapsuler le média
        const mediaContainer = document.createElement('div');
        mediaContainer.classList.add('media-container');

        
        const media = this.mediaModel.getRenderMedia();
        media.tabIndex = ''; 
        media.addEventListener('click', (e) => { this.lightbox.open(e, this.mediaModel.id) });
        media.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            this.lightbox.open(e, this.mediaModel.id); 
        }
    });
    
        mediaContainer.appendChild(media);
        div.appendChild(mediaContainer); 

        const infoContainer = document.createElement('div');
        infoContainer.classList.add('media-info');

        const title = document.createElement('span');
        title.classList.add('title');
        title.innerHTML = this.mediaModel.title;
        infoContainer.appendChild(title);

        const likesContainer = document.createElement('div');
        likesContainer.classList.add('likes-container');

        const likes = document.createElement('span');
        likes.classList.add('media-likes');
        likes.innerHTML = this.mediaModel.likes;
        likesContainer.appendChild(likes);
        

        const heartIcon = document.createElement('img');
        heartIcon.tabIndex = "";
        heartIcon.src = './assets/icons/heart.svg';
        heartIcon.alt = 'Heart';
        heartIcon.dataset.id = this.mediaModel.id;
        heartIcon.classList.add('heart-icon');
        likesContainer.appendChild(heartIcon);
        heartIcon.setAttribute('aria-label', 'Like'); // Add aria-label to heart icon

        // Variable pour suivre si le cœur a déjà été cliqué
        let isLiked = false;


        infoContainer.appendChild(likesContainer);

        const date = document.createElement('span');
        date.classList.add('date');
        date.innerHTML = this.mediaModel.date;

        infoContainer.appendChild(date);

        div.appendChild(infoContainer);

        return div;
    }

    
}