

export class PhotographerTemplate {
    constructor(photographer) {
        this.photographer=photographer;
    }

    renderCardForIndex() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src",'assets/photographers/'+ this.photographer.portrait)
        const h2 = document.createElement( 'h2' );
        h2.textContent = this.photographer.name;
        const h3 = document.createElement( 'h3' );
        h3.textContent = this.photographer.city + ',' + this.photographer.country;
        const tagline = document.createElement( 'p' );
        tagline.textContent = this.photographer.tagline;
        const price = document.createElement( 'p' );
        price.textContent = this.photographer.price + "€/jour";
        const photographerLink = document.createElement( 'a' );
        photographerLink.href='photographer.html?id=' + this.photographer.id;
        photographerLink.classList.add('photographer__card');
        
        
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(tagline);
        article.appendChild(price);
        photographerLink.appendChild(article)



        return (photographerLink);
    }

    renderCardForPhotographerContent1() {

        
        const div =document.createElement('div');
        const h1 = document.createElement( 'h1' );
        h1.textContent = this.photographer.name;
        const photographerLocation = document.createElement('div');
        photographerLocation.classList.add('photographer__content')
        photographerLocation.textContent = this.photographer.city + ',' + this.photographer.country;
        const tagline = document.createElement( 'p' );
        tagline.textContent = this.photographer.tagline;
        


    /*    const photographerLocation = document.createElement( '.photographer_location' );
        photographerLocation.textContent = this.photographer.city + ',' + this.photographer.country;
        const tagline = document.createElement( 'p' );
        tagline.textContent = this.photographer.tagline;
        
        const img = document.createElement( 'img' );
        img.setAttribute("src",'assets/photographers/'+ this.photographer.portrait)
        
        const photographerHeader = document.querySelector(".photographerHeader")
        
        const contactButton = document.querySelector('.contact_button')

        */
       //        article.appendChild(photographerLocation);


       div.appendChild(h1);
       div.appendChild(photographerLocation);    
       div.appendChild(tagline);

       return div;

        /*article.appendChild(tagline);
        photographerHeader.appendChild(img);

        photographerHeader.appendChild(article);    
        photographerHeader.appendChild(contactButton);

*/


    }
    renderCardForPhotographerContent2() {
        const article = document.createElement( 'article' );
        
    
    /*    const photographerLocation = document.createElement( '.photographer_location' );
        photographerLocation.textContent = this.photographer.city + ',' + this.photographer.country;
        const tagline = document.createElement( 'p' );
        tagline.textContent = this.photographer.tagline;
        
        const img = document.createElement( 'img' );
        img.setAttribute("src",'assets/photographers/'+ this.photographer.portrait)
        
        const photographerHeader = document.querySelector(".photographerHeader")
        
        const contactButton = document.querySelector('.contact_button')

        */
       //        article.appendChild(photographerLocation);
        /*article.appendChild(tagline);
        photographerHeader.appendChild(img);

        photographerHeader.appendChild(article);    
        photographerHeader.appendChild(contactButton);

*/


        return (article);
    }

}
