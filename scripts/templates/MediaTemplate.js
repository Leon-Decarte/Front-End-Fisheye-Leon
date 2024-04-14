export class MediaTemplate {

    constructor(mediaModel, lightbox) {
        this.mediaModel = mediaModel;
        this.lightbox = lightbox;
    }

    renderCard() {
        const div = document.createElement('div');
        //    span.innerHTML = ;
        const media = this.mediaModel.getRenderHtml();
        console.log('add Event');
        media.addEventListener('click', (e) => { this.lightbox.open(e, this.mediaModel.id) });
        div.appendChild(media);


        return div;
    }
}