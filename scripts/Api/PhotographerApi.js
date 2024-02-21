import { Api } from "./Api.js";

export class PhotographerApi {

    constructor() {
        this.api=new Api("data/photographers.json");
    }
    
    async getPhotographers() {
        const response=await this.api.fetchApi();
        return response.photographers;
        
    }
}

