/* Update the PhotographerLikesCalculator class in likesManager.js to handle both click and key press on the heart icon */
export class likesManager {
    constructor(mediasDatas) {
        this.mediasDatas = mediasDatas;
    }

    calculateTotalLikes() {
        try {
            let totalLike = this.mediasDatas.reduce((acc, media) => acc + media.likes, 0);
            console.log(totalLike);
            // Display total likes.
            const totalLikesElement = document.querySelector('.totalLikes');
            totalLikesElement.innerHTML = totalLike;
        } catch (error) {
            console.error("Error while fetching media:", error);
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

                this.calculateTotalLikes(); // Update the total likes display
            });

            heartIcon.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const media = this.mediasDatas.find(media => media.id == heartIcon.dataset.id);

                    heartIcon.classList.contains('liked') ? media.likes-- : media.likes++;
                    heartIcon.classList.toggle('liked');

                    let likes = heartIcon.previousElementSibling;
                    likes.innerHTML = media.likes;

                    this.calculateTotalLikes(); // Update the total likes display
                }
            });
        });
    }
}