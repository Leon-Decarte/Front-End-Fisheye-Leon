

export class PhotographerTemplate {
    constructor(photographer) {
        this.photographer=photographer;
    }

    render() {
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
}
