import { MediaFactory } from "../factory/MediaFactory.js";

export class Lightbox {
    constructor(medias) {

        this.medias = medias;
        this.index = 0;
        this.indexMax=this.medias.length;
        console.log(this.indexMax);


        this.lightbox = document.createElement('div');
        this.lightbox.id = 'lightbox';
        document.body.appendChild(this.lightbox);

        
    }

    showOneMedia(index) {

        const mediaModel = (new MediaFactory(this.medias[index], photographerModel)).getMedia();
        this.lightbox.appendChild(mediaModel.getRenderHtml);

    }

    right() {
        this.index++;
        if(this.index==this.indexMax) {
            this.index=0;
        }
        showOneMedia(this.index);
    }

    left () {
        this.index--;
        if(this.index==0) {
            this.index=this.indexMax;
        }
        showOneMedia(this.index);
    }

    open(e,idMedia) {
        e.preventDefault;
        console.log(idMedia);
        // getIndex oh media in edias

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


