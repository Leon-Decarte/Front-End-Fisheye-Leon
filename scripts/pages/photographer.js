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

import { PhotographerLikesCalculator } from '../utils/likesManager.js';

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
        totalLikesSpan.textContent = `${this.totalLikes} likes`; // Assurez-vous que this.totalLikes est défini et mis à jour

        // Création du span pour le prix
        const priceSpan = document.createElement('span');
        priceSpan.className = 'photographer-price';
        priceSpan.textContent = `${this.photographerDatas.price}€ / jour`; // Assurez-vous que this.photographerDatas.price est défini

        const heartBlack = document.createElement('span');
        heartBlack.className = 'heart-black';
        heartBlack.innerHTML = '&#10084;';
        // Ajout des spans au div
        bottomBlock.appendChild(totalLikesSpan);
        bottomBlock.appendChild(heartBlack);
        bottomBlock.appendChild(priceSpan);

        // Ajout du bloc inférieur au corps du document ou à un autre élément parent
        document.body.appendChild(bottomBlock); // Vous pouvez remplacer `document.body` par un autre conteneur si nécessaire


        /* 
            const photographersSection = document.querySelector(".photographer_section");
    
            photographersJson.forEach(element => {
                const photographer=new Photographer(element);
                const photographerTemplate=new PhotographerTemplate(photographer);
                photographersSection.appendChild(photographerTemplate.render());
            });
            */
        const likesCalculator = new PhotographerLikesCalculator(this.mediasDatas);
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



        //light
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


//(new MediaFactory(mediaData)).getMedia()

//const mediaFactory=new MediaFactory(mediaData)
//mediaFactory.getMedia();
/*
const photographHeader = document.createElement('div');
photographHeader.classList.add('photograph-header');

const titleH1 = document.createElement('h1');
titleH1.classList.add('title');
titleH1.textContent = 'Mimi Keel';

const locationP = document.createElement('p');
locationP.classList.add('location');
locationP.textContent = 'London, UK';

const taglineP = document.createElement('p');
taglineP.classList.add('tagline');
taglineP.textContent = 'Voir le beau dans le quotidien';

photographHeader.appendChild(titleH1);
photographHeader.appendChild(locationP);
photographHeader.appendChild(taglineP);

document.body.appendChild(photographHeader);

const button = document.createElement('button');


const img = document.createElement('img');

img.setAttribute('id', 'about-photographer-img');
img.setAttribute('src', 'assets/photographers/MimiKeel.jpg');
img.setAttribute('width', '200px');
img.setAttribute('height', '200px');

document.body.appendChild(img);

photographHeader.appendChild(img)
*/