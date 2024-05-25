import { MediaFactory } from "../factory/MediaFactory.js";

export class Lightbox {
    constructor(medias, photographerModel) {

        // Ajouter un gestionnaire d'événements pour la touche "Escape"
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                this.close(); // Appeler la fonction de fermeture de la lightbox
            } else if (event.key === 'ArrowLeft') {
                this.left(); // Appeler la fonction de défilement vers la gauche
            } else if (event.key === 'ArrowRight') {
                this.right(); // Appeler la fonction de défilement vers la droite
            }
        });

        this.medias = medias;
        this.photographerModel = photographerModel;
        this.index = 0;
        this.indexMax = this.medias.length;

        this.lightbox = document.createElement('div');
        this.lightbox.id = 'lightbox';

        // Créer une div pour contenir le bouton de fermeture
        this.closeLightbox = document.createElement('div');
        this.closeLightbox.classList.add('closeLightbox');
        const closeIcon = document.createElement('img');
        closeIcon.tabIndex = 0;

        closeIcon.src = "../../assets/icons/close.svg";
        closeIcon.alt = "close";
        closeIcon.classList.add('closeIcon');
        this.closeLightbox.appendChild(closeIcon);

        document.body.appendChild(this.lightbox);
        this.lightbox.appendChild(this.closeLightbox);

        this.closeLightbox.addEventListener('click', () => {
            this.close();
        });

        // Créer une div pour contenir le bouton de précédent
        this.prevButton = document.createElement('div');
        this.prevButton.classList.add('button_prev');

        const prevIcon = document.createElement('img');
        prevIcon.tabIndex = 0;

        prevIcon.src = "../../assets/icons/left.svg";
        prevIcon.alt = 'previous';
        prevIcon.classList.add('prevIcon');
        this.prevButton.appendChild(prevIcon);
        this.prevButton.addEventListener('click', () => {
            this.left(); // Appeler la fonction de défilement vers la droite
        });

        // Ajouter le bouton suivant à la lightbox
        this.lightbox.appendChild(this.prevButton);

        //creation du bouton suivant

        this.nextButton = document.createElement('div');
        this.nextButton.classList.add('button_next');
        const nextIcon = document.createElement('img');
        nextIcon.tabIndex = 0;
        nextIcon.src = "../../assets/icons/right.svg";
        nextIcon.alt = 'next';
        nextIcon.classList.add('nextIcon');
        this.nextButton.appendChild(nextIcon);

        this.nextButton.addEventListener('click', () => {
            this.right(); // Appeler la fonction de défilement vers la droite
        });

        // Ajouter le bouton suivant à la lightbox
        this.lightbox.appendChild(this.nextButton);

                
    }
    showOneMedia(index) {
        // Nettoyer le contenu existant de la lightbox
        this.lightbox.innerHTML = '';

        const mediaModel = (new MediaFactory(this.medias[index], this.photographerModel)).getMedia();

        // Créer une div pour contenir le média
        const mediaContainer = document.createElement('div');
        mediaContainer.classList.add('media-container');
        mediaContainer.appendChild(mediaModel.getRenderMedia());

        // Ajouter la div contenant le média à la lightbox
        this.lightbox.appendChild(mediaContainer);
        // Réafficher les boutons dans la lightbox
        this.lightbox.appendChild(this.prevButton);
        this.lightbox.appendChild(this.nextButton);
        this.lightbox.appendChild(this.closeLightbox);

    }


    right() {
        this.index++;
        if (this.index == this.indexMax) {
            this.index = 0;
        }
        this.showOneMedia(this.index);
    }

    left() {
        this.index--;
        if (this.index < 0) {
            this.index = this.indexMax - 1;
        }
        this.showOneMedia(this.index);
    }

    open(e, idMedia) {
        console.log(idMedia);
        e.preventDefault();

        const index = this.medias.findIndex(media => media.id === idMedia);
        if (index !== -1) {
            this.showOneMedia(index);
            this.lightbox.style.display = 'block';
            this.lightbox.appendChild(this.prevButton);
            this.lightbox.appendChild(this.nextButton);
            this.lightbox.appendChild(this.closeLightbox);

            //showOneMedia();
        }

        // getIndex oh media in medias

        //affichage du media

        //display block

        /*        const index = this.medias.findIndex(media => media.id === idMedia);
                if (index !== -1) {
                    this.index = index;
                    this.showOneMedia(index);
                    this.lightbox.style.display = 'block';}
            }*/
    }

    close() {
        //display none
        this.lightbox.style.display = 'none';

    }
}


