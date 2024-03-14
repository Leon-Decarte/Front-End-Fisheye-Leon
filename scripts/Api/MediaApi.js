import { Api } from "./Api.js";

export class MediaApi {

    constructor() {
        this.api=new Api("data/photographers.json");
    }
    
    async getMedias() {
        const response=await this.api.fetchApi();
        return response.media;
    }


    
    async getMediasForOnePhotographer(id) {
        const mediasJson=await this.getMedias();
        return mediasJson.filter(p => p.photographerId==id);
    }
}

