import { PhotographerApi } from "../Api/PhotographerApi.js";
import { Photographer } from "../model/Photographer.js";
import { PhotographerTemplate } from "../templates/PhotographerTemplate.js";
class App {
    constructor() {
        this.PhotographerApi=new PhotographerApi();

    }

    async init() {
        const photographersJson=await this.PhotographerApi.getPhotographers();
        const photographersSection = document.querySelector(".photographer_section");

        photographersJson.forEach(element => {
            const photographer=new Photographer(element);
            const photographerTemplate=new PhotographerTemplate(photographer);
            photographersSection.appendChild(photographerTemplate.renderCardForIndex());
        });

    }
}


const app=new App();
await app.init();


