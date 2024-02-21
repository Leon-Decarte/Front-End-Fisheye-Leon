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
            photographersSection.appendChild(photographerTemplate.render());
        });

    }
}


const app=new App();
await app.init();

/*

async function getPhotographers() {

    fetch("data/photographers.json")
        .then(res => res.json())
        .then(data => console.log(data))
    // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
    // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
    let photographers = [
        {
            "name": "Ma data test",
            "id": 1,
            "city": "Paris",
            "country": "France",
            "tagline": "Ceci est ma data test",
            "price": 400,
            "portrait": "account.png"
        },
        {
            "name": "Autre data test",
            "id": 2,
            "city": "Londres",
            "country": "UK",
            "tagline": "Ceci est ma data test 2",
            "price": 500,
            "portrait": "account.png"
        },
    ]
    // et bien retourner le tableau photographers seulement une fois récupéré
    return ({
        photographers: [...photographers, ...photographers, ...photographers]
    })
}

async function displayData(photographers) {
   
    photographers.forEach((photographer) => {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
}

init();
*/

