//Mettre le code JavaScript lié à la page photographer.html
import { PhotographerApi } from "../Api/PhotographerApi.js";
import { MediaApi } from "../Api/MediaApi.js";
import { Photographer } from "../model/Photographer.js";
import { PhotographerTemplate } from "../templates/PhotographerTemplate.js";
import { MediaTemplate } from "../templates/MediaTemplate.js";
import { MediaFactory } from "../factory/MediaFactory.js";
import { ContactForm } from "../utils/contactForm.js";
import { Lightbox } from "../utils/lightbox.js";
import { DropDown } from '../utils/dropDown.js'; 

import { likesManager } from '../utils/likesManager.js';

class App {
    constructor() {
        this.photographerApi = new PhotographerApi();
        this.mediaApi = new MediaApi();
        this.contactForm = new ContactForm();
        this.dropDown = new DropDown(this); 
    }

    async init() {

        const id = this.getId();
        this.photographerDatas = await this.photographerApi.getOnePhotographer(id);
        this.mediasDatas = await this.mediaApi.getMediasForOnePhotographer(id);
        // Utiliser PhotographerLikesCalculator pour calculer la somme des likes





        const photographerModel = new Photographer(this.photographerDatas);
        this.lightbox = new Lightbox(this.mediasDatas, photographerModel);
        this.render();

        // Création du bloc inférieur pour afficher le total des likes et le prix du photographe
        const bottomBlock = document.createElement('div');
        bottomBlock.className = 'photographer-bottom-block';

        // Création du span pour les likes
        const totalLikesSpan = document.createElement('span');
        totalLikesSpan.className = 'totalLikes';
        totalLikesSpan.textContent = `${this.totalLikes} likes`; 

        // Création du span pour le prix
        const priceSpan = document.createElement('span');
        priceSpan.className = 'photographer-price';
        priceSpan.textContent = `${this.photographerDatas.price}€ / jour`;

        const heartBlack = document.createElement('span');
        heartBlack.className = 'heart-black';
        heartBlack.innerHTML = '&#10084;';
        // Ajout des spans au div
        bottomBlock.appendChild(totalLikesSpan);
        bottomBlock.appendChild(heartBlack);
        bottomBlock.appendChild(priceSpan);

        // Ajout du bloc inférieur au corps du document ou à un autre élément parent
        document.body.appendChild(bottomBlock); 


        const likesCalculator = new likesManager(this.mediasDatas);
        await likesCalculator.init();
    }


    render() {
        // header photographe

        const photographersContent1 = document.querySelector(".photographer__content1");
        const photographersContent2 = document.querySelector(".photographer__content2");
        this.photographerModel = new Photographer(this.photographerDatas);
        const photographerTemplate = new PhotographerTemplate(this.photographerModel);

        this.contactForm.render(this.photographerModel);

        photographersContent1.appendChild(photographerTemplate.renderCardForPhotographerContent1());
        photographersContent2.appendChild(photographerTemplate.renderCardForPhotographerContent2());

        //medias
        this.renderMedia(this.mediasDatas,this.photographerModel);

    }

    renderMedia(medias, photographerModel) {
        const mediaContent = document.querySelector(".photographer-media");
        medias.forEach(mediaData => {
            const mediaModel = (new MediaFactory(mediaData, photographerModel)).getMedia();
            const mediaTemplate = new MediaTemplate(mediaModel, this.lightbox);
            mediaContent.appendChild(mediaTemplate.renderCard());
        });
    }









    getId() {
        const params = new URL(document.location).searchParams;
        return parseInt(params.get("id"));
    }



}


const app = new App();
await app.init();

