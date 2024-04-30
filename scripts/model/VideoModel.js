

export class VideoModel {

    constructor(datas,photographerModel) {
        const {id, photographerId, title, video, likes, date, price}=datas;

        this.id= id;
        this.photographerId= photographerId;
        this.title= title;
        this.video= video;
        this.likes= likes;
        this.date= date;
        this.price= price;
        this.url = `./assets/photographers/${photographerModel.getFirstName()}/${video}`;
    }

    getRenderMedia () {
        const video=document.createElement('video');
        video.src = this.url;
        video.controls = true;
        video.alt = this.title;
        return video;
    }
}
