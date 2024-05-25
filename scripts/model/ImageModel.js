import { MediaModel } from "./MediaModel.js";

export class ImageModel extends MediaModel {

    
    constructor(datas, photographerModel) {
        // parent = constructucteur de MediaModel
        super(datas);
        this.image= datas.image;
        this.type = 'image';
        this.url = `./assets/photographers/${photographerModel.getFirstName()}/${datas.image}`;
    }

    getRenderMedia () {
        const img=document.createElement('img');
        img.src=this.url;
        img.alt = this.title;
        return img;
    }
}
