export class ContactForm {
	constructor() {

	}

	initEvent() {
		const form = document.getElementById("form_submit");
		form.addEventListener("click", (e) => { this.validForm(e); });

		const prenom = document.getElementById("prenom")
		prenom.addEventListener("keyup", (e) => { this.checkForm(e); });

		const nom = document.getElementById("nom")
		nom.addEventListener("keyup", (e) => { this.checkForm(e); });

		const email = document.getElementById("email")
		email.addEventListener("keyup", (e) => { this.checkForm(e); });

		const message = document.getElementById("message")
		message.addEventListener("keyup", (e) => { this.checkForm(e); })
		/*
				this.checkFirstName();
				this.checkLastName();
				this.checkEmail();
				this.checkForm();
				this.initForm();
		
		*/
		const contactButton = document.querySelector(".contact_button");
		const closeButton = document.querySelector(".close_button");
		const ValidateButton = document.getElementById("form_submit")
		// Add event listener to the button

		contactButton.addEventListener("click", (e) => { this.displayModal(e); });
		closeButton.addEventListener("click", (e) => { this.closeModal(e); });
		ValidateButton.addEventListener("click", (e) => { this.closeModal(e); });
	}


	render(photographerModel) {
		const title = document.getElementById("contact_title");
		title.innerText = "Contactez-moi " + photographerModel.name;

		this.initEvent();
	}

	checkFirstName() {
		return this.checkInput("prenom", "Le prénom est incorrect");
	}
	checkLastName() {
		return this.checkInput("nom", "Le nom est incorrect");
	}



	checkEmail() {
		let retour = this.checkInput("email", "Le mail est incorrect");
		if (!retour) {
			return false;
		}
		return this.isMail("email", "Le format du mail est incorrect");
	}

	checkMessage(){
		return this.checkInput("message", "Pas de message");
	}

	isMail(input, errorMessage) {
        const inputElement = document.getElementById(input);
        this.hideMessageError(inputElement);
        if (!inputElement.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            this.showMessageError(inputElement, errorMessage);
            return false;
        }
        return true;
    }

    checkInput(input, errorMessage) {
        const inputElement = document.getElementById(input);
        this.hideMessageError(inputElement);

        if (inputElement.value === "" || inputElement.value == null || inputElement.value.length <= 2) {
            this.showMessageError(inputElement, errorMessage);
            return false;
        }
        return true;
    }

    hideMessageError(inputElement) {
        const errorSpan = document.getElementById(inputElement.id + "_error");
        if (errorSpan) {
            errorSpan.style.display = 'none';
        }
    }

    showMessageError(inputElement, message) {
        const errorSpan = document.getElementById(inputElement.id + "_error");
        if (errorSpan) {
            errorSpan.innerText = message;
            errorSpan.style.display = 'block';
        }
    }

	checkForm() {
		if (this.checkFirstName() && this.checkLastName() && this.checkEmail() && this.checkMessage()) {
			this.enabledBtnSubmit(true);
			console.log("ça marche")
		} else {
			this.enabledBtnSubmit(false);
			console.log("ça marche pas")

		}
	}



	initForm() {
		this.enabledBtnSubmit(false); // Désactiver le bouton de soumission au chargement de la page
	}


	// Fonction pour activer ou désactiver le bouton de soumission

	enabledBtnSubmit(isEnabled) {
		const btn = document.getElementById("form_submit");
		if (isEnabled) {
			// Le bouton est activé
			btn.disabled = false;
			btn.style.backgroundColor = 'red';
		} else {
			// Le bouton est désactivé
			btn.disabled = true;
			btn.style.backgroundColor = 'grey';
		}
		btn.disabled = !isEnabled;
	}




	validForm(event) {
		event.preventDefault();

		// Validate form inputs here
	}


	displayModal(event) {
		event.preventDefault();
		const modal = document.getElementById("contact_modal");
		modal.style.display = "block";
	}

	closeModal(event) {
		event.preventDefault();
		const modal = document.getElementById("contact_modal");
		modal.style.display = "none";
	}
}