import { ImageModel } from "../model/ImageModel.js";
import { VideoModel } from "../model/VideoModel.js";

export class MediaFactory {

    constructor(media,photographerModel) {
        this.media=media;
        this.photographerModel=photographerModel;
    }

    getMedia() {
        if(this.media.image) {
            return new ImageModel(this.media,this.photographerModel);
        } else {
            return new VideoModel(this.media,this.photographerModel);
        }
    }
}