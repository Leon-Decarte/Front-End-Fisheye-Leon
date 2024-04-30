

export class ImageModel {

    constructor(datas, photographerModel) {
        const {id, photographerId, title, image, likes, date, price}=datas;

        this.id= id;
        this.photographerId= photographerId;
        this.title= title;
        this.image= image;
        this.likes= likes;
        this.date= date;
        this.price= price;
        this.type = 'image';
        this.url = `./assets/photographers/${photographerModel.getFirstName()}/${image}`;
    }




    getRenderMedia () {
        const img=document.createElement('img');
        img.src=this.url;
        img.alt = this.title;
        return img;
    }
}
