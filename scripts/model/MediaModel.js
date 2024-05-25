

export class MediaModel {

    constructor(datas) {
        const {id, photographerId, title,  likes, date, price}=datas;

        this.id= id;
        this.photographerId= photographerId;
        this.title= title;
        
        this.likes= likes;
        this.date= date;
        this.price= price;

        
    }




}
