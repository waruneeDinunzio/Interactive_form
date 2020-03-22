window.addEventListener('DOMContentLoaded', (event) => {
  /*
  create global variables
  */
  const form = document.querySelector("form");
  const name = document.querySelector("#name");
  const email = document.querySelector("#mail");
  const activitiesInput = document.querySelectorAll(".activities input");
  const activities = document.querySelector(".activities");
  const creditCard = document.querySelector("#credit-card");
  const payment = document.querySelector("#payment");
  const creditCardNum = document.querySelector("#cc-num");
  const zipCodeNum = document.querySelector("#zip");
  const cvvNum = document.querySelector("#cvv");
  //create name error massage function
  const nameErrorMassage = () => {
      const errorMassageDiv = document.querySelector('.nameErrorMassage');
      if (errorMassageDiv) {
          errorMassageDiv.remove();
      }
      const nameLabel = name.previousElementSibling;
      const errorMassage = document.createElement("div");
      errorMassage.className = "nameErrorMassage";
      errorMassage.innerHTML= "** Name field can not be blank or have digit and special character. Just your first and last name, Please.";
      errorMassage.style.color = "red"
      nameLabel.appendChild(errorMassage);
  }
  //create email error massage function
  const emailErrorMassage = () => {
      const errorMassageDiv = document.querySelector('.emailErrorMassage');
      if (errorMassageDiv) {
          errorMassageDiv.remove();
      }
      const emailLabel = email.previousElementSibling;
      const errorMassage = document.createElement("div");
      errorMassage.className = "emailErrorMassage";
      errorMassage.innerHTML = "** Email must be a valid email address. Please try again.";
      errorMassage.style.color = "red"
      emailLabel.appendChild(errorMassage);
  }
  const emailEmptyErrorMassage = () => {
      const errorMassageDiv = document.querySelector('.emailErrorMassage');
      if (errorMassageDiv) {
          errorMassageDiv.remove();
      }
      const emailLabel = email.previousElementSibling;
      const errorMassage = document.createElement("div");
      errorMassage.className = "emailErrorMassage";
      errorMassage.innerHTML = "** Email field can not be empty. Please enter your email.";
      errorMassage.style.color = "red"
      emailLabel.appendChild(errorMassage);
  }
  //create register activity error massage function
  const activityErrorMassage = () => {
      const errorMassageDiv = document.querySelector('.activityErrorMassage');
      if (errorMassageDiv) {
          errorMassageDiv.remove();
      }
      const registerLabel = activities.firstElementChild;
      const errorMassage = document.createElement("div");
      errorMassage.className = "activityErrorMassage";
      errorMassage.innerHTML= "** Please select at least one activity.";
      errorMassage.style.color = "red"
      registerLabel.appendChild(errorMassage);
  }
  //create name validation function
  const nameValidator = () => {
      const nameValue = name.value;
      if (/^[a-zA-Z]* [a-zA-Z]*$/.test(nameValue) && nameValue !== "") {
        name.style.borderColor = 'white';
        const errorMassageDiv = document.querySelector('.nameErrorMassage');
        if (errorMassageDiv) {
            errorMassageDiv.remove();
        }
        return true;
      } else {
        name.style.borderColor = 'red';
        nameErrorMassage();
        return false;   
      }
  }
  //create email validation function
  const emailValidator = () => {
      const emailValue = email.value;
      if (/^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue) && emailValue !== "") {
          email.style.borderColor = 'white';
          const errorMassageDiv = document.querySelector('.emailErrorMassage');
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
  //create register activity validation function
  const activityValidator = () => {
      for (let i=0; i < activitiesInput.length; i +=1) {
        if (activitiesInput[i].checked) {
            activities.style.borderColor = 'white';
            const errorMassageDiv = document.querySelector('.activityErrorMassage');
            if (errorMassageDiv) {
                errorMassageDiv.remove();
            }
            activities.style.boxShadow = '';
            activities.style.color = '';
            return true;
          } 
      }
      for (let i=0; i < activitiesInput.length; i +=1) {
        if (!activitiesInput[i].checked) {
            activities.style.boxShadow = '0 0 1px 2px red';
            activities.style.color = 'red';
            activityErrorMassage();
            return false;
        }
      }
    }
    //create credit card validation function
    const creditCardValidator = () => {
      const cardValue = creditCardNum.value;
      if (/^\d{13,16}$/.test(cardValue) && cardValue !== "") {
        creditCardNum.style.borderColor = 'white';
        return true;
      } else {
        creditCardNum.style.borderColor = 'red';
        //maybe put ErrorMassage(); here
        return false;
      }
    }
    //create zip code validation function
    const zipValidator = () => {
      const zipValue = zipCodeNum.value;
      if (/^\d{5}$/.test(zipValue) && zipValue !== "") {
        zipCodeNum.style.borderColor = 'white';
        return true;
      } else {
        zipCodeNum.style.borderColor = 'red';
        //maybe put ErrorMassage(); here
        return false;
      }
    }
    //create cvv number validation function
    const cvvValidator = () => {
      const cvvValue = cvvNum.value;
      if (/^\d{3}$/.test(cvvValue) && cvvValue !== "") {
        cvvNum.style.borderColor = 'white';
        return true;
      } else {
        cvvNum.style.borderColor = 'red';
        //maybe put ErrorMassage(); here
        return false;
      }
    }
    //create real time error messages
    form.addEventListener('keyup', (e) => {
        nameValidator();
        emailValidator();
    });    
    //Create submit listener on the form element. form will show error message if it's not validated
    form.addEventListener('submit', (e) => {
    //set credit card payment selected as default
      const cardPayment = payment[1];
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
      if (cardPayment.selected && !zipValidator()) {
          e.preventDefault();
      } 
      if (cardPayment.selected && !cvvValidator()) {
          e.preventDefault();
      }
    });
});