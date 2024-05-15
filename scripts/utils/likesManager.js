export class PhotographerLikesCalculator {
    constructor(mediasDatas) {
        this.mediasDatas = mediasDatas;
       
    }

    calculateTotalLikes() {
        try {
            let totalLike=this.mediasDatas.reduce((acc, media) => acc + media.likes, 0);
            console.log(totalLike);
            //affichage du total des likes.
            const totalLikesElement = document.querySelector('.totalLikes');
            totalLikesElement.innerHTML = totalLike;
            
        } catch (error) {
            console.error("Erreur lors de la récupération des médias :", error);
            return 0;
        }
    }

    async init() {


        this.calculateTotalLikes();  

        const heartIcons = document.querySelectorAll('.heart-icon');
       
        heartIcons.forEach((heartIcon) => {
            heartIcon.addEventListener('click', () => {
                const media = this.mediasDatas.find(media => media.id == heartIcon.dataset.id);

                heartIcon.classList.contains('liked') ? media.likes-- : media.likes++;
                heartIcon.classList.toggle('liked');

                let likes = heartIcon.previousElementSibling;
                likes.innerHTML = media.likes;

                this.calculateTotalLikes();     // Met à jour l'affichage des likes
            });
        });
    }



}