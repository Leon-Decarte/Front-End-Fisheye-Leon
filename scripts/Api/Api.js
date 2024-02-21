export class Api {

    constructor(url) {
        this.url=url;
    }

    async fetchApi() {
        try {
            const response= await fetch(this.url);
            return response.json();
        } catch(error) {
            throw new Error(error);
        }
    }
}