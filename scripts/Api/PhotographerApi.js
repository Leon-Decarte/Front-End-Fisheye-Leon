import { Api } from "./Api.js";

export class PhotographerApi {

    constructor() {
        this.api=new Api("data/photographers.json");
    }
    
    async getPhotographers() {
        const response=await this.api.fetchApi();
        return response.photographers;
    }

    async getOnePhotographer(id) {
        const photographersJson=await this.getPhotographers();
        let datas=photographersJson.filter(p => p.id==id)[0];
        console.log('getOnePhotographer');
        console.log(datas);
        return datas;
    }
}

