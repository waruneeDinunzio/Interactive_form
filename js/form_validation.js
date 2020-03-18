window.addEventListener('DOMContentLoaded', (event) => {
/*
 variable to store form inputs
 */
    const form = document.querySelector("form");
    const name = document.querySelector("#name");
    const email = document.querySelector("#mail");
    const activitiesInput = document.querySelectorAll(".activities input");
    const activities = document.querySelector(".activities");
    console.log(email);
    const creditCard = document.querySelector("#credit-card");
    const payment = document.querySelector("#payment");
    const creditCardNum = document.querySelector("#cc-num");
    const zipCodeNum = document.querySelector("#zip");
    const cvvNum = document.querySelector("#cvv");
    //const errorMassage = document.createElement("div");

    const NameErrorMassage = () => {
        let errorMassageDiv = document.querySelector('.nameErrorMassage');
        if (errorMassageDiv) {
        errorMassageDiv.remove();
        }
        const nameLabel = name.previousElementSibling;
        const errorMassage = document.createElement("div");
        errorMassage.className = "nameErrorMassage";
        errorMassage.innerHTML= "** Name field can not be blank. Please try agian.";
        errorMassage.style.color = "red"
        nameLabel.appendChild(errorMassage);
    }
    const emailErrorMassage = () => {
        let errorMassageDiv = document.querySelector('.emailErrorMassage');
        if (errorMassageDiv) {
        errorMassageDiv.remove();
        }
        const emailLabel = email.previousElementSibling;
        const errorMassage = document.createElement("div");
        errorMassage.className = "emailErrorMassage";
         errorMassage.innerHTML = "** Email must be a valid email address. Please try agian.";
         errorMassage.style.color = "red"
         emailLabel.appendChild(errorMassage);
    }
    const emailEmptyErrorMassage = () => {
        let errorMassageDiv = document.querySelector('.emailErrorMassage');
        if (errorMassageDiv) {
        errorMassageDiv.remove();
        }
        const emailLabel = email.previousElementSibling;
        const errorMassage = document.createElement("div");
        errorMassage.className = "emailErrorMassage";
         errorMassage.innerHTML = "** Email field can not be empty. Please try agian.";
         errorMassage.style.color = "red"
         emailLabel.appendChild(errorMassage);
    }
    const registerErrorMassage = () => {
        let errorMassageDiv = document.querySelector('.registerErrorMassage');
        if (errorMassageDiv) {
        errorMassageDiv.remove();
        }
        const registerLabel = activities.firstElementChild;
        console.log(registerLabel);
        const errorMassage = document.createElement("div");
        errorMassage.className = "registerErrorMassage";
        errorMassage.innerHTML= "** Please select at least one.";
        errorMassage.style.color = "red"
        registerLabel.appendChild(errorMassage);
    }

    // name validation
    const nameValidator = () => {
        let nameValid = name.value;
        console.log.nameValid;
        if (nameValid.length > 0) {
            name.style.borderColor = 'white';
            let errorMassageDiv = document.querySelector('.nameErrorMassage');
            if (errorMassageDiv) {
            errorMassageDiv.remove();
            }
            return true;
        } else {
            name.style.borderColor = 'red';
            NameErrorMassage();
            return false;   
        }
    }
    const emailValidator = () => {
        let emailValue = email.value;
        if (/^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue) && emailValue !== "") {
          email.style.borderColor = 'white';
          let errorMassageDiv = document.querySelector('.emailErrorMassage');
            if (errorMassageDiv) {
            errorMassageDiv.remove();
            }
          return true;
        } else if (emailValue === "") {
            email.style.borderColor = 'red';
          emailEmptyErrorMassage();
          return false;
        } else {
          email.style.borderColor = 'red';
          emailErrorMassage();
          return false;
        }
    }
    const activityValidator = () => {
        for (let i=0; i< activitiesInput.length; i ++) {
          if (activitiesInput[i].checked) {
            activities.style.borderColor = 'white';
            let errorMassageDiv = document.querySelector('.registerErrorMassage');
            if (errorMassageDiv) {
            errorMassageDiv.remove();
            }
            activities.style.boxShadow = '';
            activities.style.color = '';
            return true;
          } else {
            activities.style.boxShadow = '0 0 1px 2px red';
            activities.style.color = 'red';
            registerErrorMassage();
            return false;
          }
        }
    }

    const creditCardValidator = () => {
      let cardValue = creditCardNum.value;
      if (/^\d{13,16}$/.test(cardValue) && cardValue !== "") {
        creditCardNum.style.borderColor = 'white';
        return true;
      } else {
        creditCardNum.style.borderColor = 'red';
        //maybe put ErrorMassage(); here
        return false;
      }
    }
    form.addEventListener('keyup', (e) => {
        nameValidator();
        emailValidator();
        //activityValidator();
        
        });
        
        /* Submit listener on the form element */
        form.addEventListener('submit', (e) => {
          let cardPayment = payment[1];
          //console.log(cardPayment);
            if (!nameValidator()) {
              e.preventDefault();
            }
            if (!emailValidator()) {
                e.preventDefault();
            }
            if (!activityValidator()) {
                e.preventDefault();
            }
            if (cardPayment.selected && !creditCardValidator()) {
              e.preventDefault();
            } 
        });
});