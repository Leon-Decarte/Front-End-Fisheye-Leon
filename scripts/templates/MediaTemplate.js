export class MediaTemplate {

    constructor(mediaModel) {
        this.mediaModel=mediaModel;
    }

    renderCard() {
        const div = document.createElement('div');
        console.log(this.mediaModel);
       //    span.innerHTML = ;
        div.appendChild(this.mediaModel.getRenderHtml());
        return div;
    }
}