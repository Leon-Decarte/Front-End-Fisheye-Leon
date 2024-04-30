export class MediaTemplate {

    constructor(mediaModel, lightbox) {
        this.mediaModel = mediaModel;
        this.lightbox = lightbox;
    }

    renderCard() {
        const div = document.createElement('div');
        //    span.innerHTML = ;
        const media = this.mediaModel.getRenderMedia();
        console.log('add Event');
        media.addEventListener('click', (e) => { this.lightbox.open(e, this.mediaModel.id) });
        div.appendChild(media);
        // Afficher le titre
        //afficher les likes
        //afficher la date

        // sur le coeur, tu vas ajouter un eventListener qui fera un +1 sur le like

        return div;
    }
}