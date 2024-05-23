export class MediaTemplate {

    constructor(mediaModel, lightbox) {
        this.mediaModel = mediaModel;
        this.lightbox = lightbox;
    }

    renderCard() {
        const div = document.createElement('div');
        div.classList.add('media-card');
        div.tabIndex = 0; // Make the media-card focusable


        // Créer un div pour encapsuler le média
        const mediaContainer = document.createElement('div');
        mediaContainer.classList.add('media-container');

        const media = this.mediaModel.getRenderMedia();
        media.addEventListener('click', (e) => { this.lightbox.open(e, this.mediaModel.id) });
        mediaContainer.appendChild(media); // Ajouter le média dans le conteneur d'encapsulation
        div.appendChild(mediaContainer); // Ajouter le conteneur d'encapsulation au div principal

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
        heartIcon.tabIndex = 0;
        heartIcon.src = '../assets/icons/heart.svg';
        heartIcon.alt = 'Heart';
        heartIcon.dataset.id = this.mediaModel.id;
        heartIcon.classList.add('heart-icon');
        likesContainer.appendChild(heartIcon);

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