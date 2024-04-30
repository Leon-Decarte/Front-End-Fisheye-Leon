//Mettre le code JavaScript lié à la page photographer.html
import { PhotographerApi } from "../Api/PhotographerApi.js";
import { MediaApi } from "../Api/MediaApi.js";
import { Photographer } from "../model/Photographer.js";
import { PhotographerTemplate } from "../templates/PhotographerTemplate.js";
import { MediaTemplate } from "../templates/MediaTemplate.js";
import { MediaFactory } from "../factory/MediaFactory.js";
import { ContactForm } from "../utils/contactForm.js";
import { Lightbox } from "../utils/Lightbox.js";


class App {
    constructor() {
        this.photographerApi=new PhotographerApi();
        this.mediaApi=new MediaApi();
        this.contactForm = new ContactForm();
    }

    async init() {

        const id=this.getId();
        this.photographerDatas=await  this.photographerApi.getOnePhotographer(id);
        this.mediasDatas=await this.mediaApi.getMediasForOnePhotographer(id);
        
        const photographerModel=new Photographer(this.photographerDatas);
        this.lightbox=new Lightbox(this.mediasDatas, photographerModel);
        this.render();

    /* 
        const photographersSection = document.querySelector(".photographer_section");

        photographersJson.forEach(element => {
            const photographer=new Photographer(element);
            const photographerTemplate=new PhotographerTemplate(photographer);
            photographersSection.appendChild(photographerTemplate.render());
        });
        */

    }

    render() {
            // header photographe

            const photographersContent1 = document.querySelector(".photographer__content1");
            const photographersContent2 = document.querySelector(".photographer__content2");
            const photographerModel=new Photographer(this.photographerDatas);
            const photographerTemplate=new PhotographerTemplate(photographerModel);

            this.contactForm.render(photographerModel);

            photographersContent1.appendChild(photographerTemplate.renderCardForPhotographerContent1());
            photographersContent2.appendChild(photographerTemplate.renderCardForPhotographerContent2());

            //medias

            const mediaContent = document.querySelector(".photographer-media");
            this.mediasDatas.forEach(mediaData => {
                const mediaModel=(new MediaFactory(mediaData,photographerModel )).getMedia();
                const mediaTemplate=new MediaTemplate(mediaModel, this.lightbox);
                mediaContent.appendChild(mediaTemplate.renderCard());
            });

            //light
    }

    getId() {
        const params=new URL(document.location).searchParams;
        return parseInt(params.get("id"));
    }



}


const app=new App();
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