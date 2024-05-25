
import { MediaModel } from "./MediaModel.js";

export class VideoModel  extends MediaModel {

    constructor(datas,photographerModel) {
        super(datas)
        this.video= datas.video;
        this.url = `./assets/photographers/${photographerModel.getFirstName()}/${datas.video}`;
    }

    getRenderMedia () {
        const video=document.createElement('video');
        video.src = this.url;
        video.controls = true;
        video.alt = this.title;
        return video;
    }
}
