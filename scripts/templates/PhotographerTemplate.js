

export class PhotographerTemplate {
    constructor(photographer) {
        this.photographer = photographer;
    }

    renderCardForIndex() {
        const photographerLink = document.createElement('a');
        photographerLink.href = 'photographer.html?id=' + this.photographer.id;
        photographerLink.classList.add('photographer__card');
        photographerLink.setAttribute('aria-label', 'Lien vers la page de ' + this.photographer.name);
    
        const article = document.createElement('article');
        article.classList.add('photographer');
    
        const img = document.createElement('img');
        img.setAttribute('src', 'assets/photographers/' + this.photographer.portrait);
        img.setAttribute('alt', 'Portrait de ' + this.photographer.name);
        img.classList.add('photographer__portrait');
    
        const h2 = document.createElement('h2');
        h2.textContent = this.photographer.name;
        h2.classList.add('photographer__name');
    
        const h3 = document.createElement('h3');
        h3.textContent = this.photographer.city + ', ' + this.photographer.country;
        h3.classList.add('photographer__location');
    
        const tagline = document.createElement('p');
        tagline.textContent = this.photographer.tagline;
        tagline.classList.add('photographer__tagline');
    
        const price = document.createElement('p');
        price.textContent = this.photographer.price + '€/jour';
        price.classList.add('photographer__price');
    
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(tagline);
        article.appendChild(price);
        photographerLink.appendChild(article);
    
        return photographerLink;
    }
    

    renderCardForPhotographerContent1() {
        const div = document.createElement('div');
        div.classList.add('photographer__info');
    
        const h1 = document.createElement('h1');
        h1.textContent = this.photographer.name;
        h1.classList.add('name__photographer');
    
        const photographerLocation = document.createElement('div');
        photographerLocation.classList.add('location__photographer');
        photographerLocation.textContent = this.photographer.city + ',' + this.photographer.country;
    
        const tagline = document.createElement('p');
        tagline.textContent = this.photographer.tagline;
        tagline.classList.add('tagline__photographer');
    
        div.appendChild(h1);
        div.appendChild(photographerLocation);
        div.appendChild(tagline);
    
        return div;
    }
    renderCardForPhotographerContent2() {
        const divForImg = document.createElement('div');
        divForImg.classList.add('header-img')
        const img = document.createElement( 'img' );
        img.setAttribute("src",'assets/photographers/'+ this.photographer.portrait)
    

    divForImg.appendChild(img);

        return (divForImg);
    }

}
