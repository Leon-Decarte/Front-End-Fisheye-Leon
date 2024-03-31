export class ContactForm {
    constructor() {
        this.initEvent();
    }

    initEvent() {
        const form = document.getElementById("form_submit");
        form.addEventListener("click", (e) => {
            this.validForm(e); 
        });
    }

    validForm(event) {
        event.preventDefault(); 

        // Validate form inputs here
    }

    displayModal() {
        const modal = document.getElementById("contact_modal");
        modal.style.display = "block";
    }

    closeModal() {
        const modal = document.getElementById("contact_modal");
        modal.style.display = "none";
    }
}