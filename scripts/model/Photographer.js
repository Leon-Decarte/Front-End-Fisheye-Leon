

export class Photographer {

    constructor(datas) {
        const {id, name, city, country, tagline, price, portrait}=datas;

        this.id= id;
        this.name= name;
        this.portrait= portrait;
        this.city= city;
        this.country= country;
        this.tagline= tagline;
        this.price= price;
    }

    getFirstName() {
        let firstName= (this.name.split(' '))[0]; 
        return firstName.replace('-',' ');
    }

}
