window.addEventListener('DOMContentLoaded', (event) => { 
    /*
    create global variables
    */
    const nameFocus = document.getElementById('name');
    const otherTitle = document.getElementById('other-title');
    const otherOption = document.getElementById('title');
    const design = document.getElementById('design');
    const colorDiv = document.getElementById("colors-js-puns")
    const color = document.getElementById('color');
    const designSelect = document.querySelectorAll('#design option');
    const activity = document.querySelector('.activities');
    const totalCost = document.createElement('h2');
    let totalActivitiesCost = 0;
    const activityInput = document.querySelectorAll('.activities input');
    const payment = document.getElementById('payment');
    const paymentSelect = document.querySelectorAll('#payment option');
    const cardNum = document.querySelector("#cc-num");
    const zipNum = document.querySelector("#zip");
    const cvvNum = document.querySelector("#cvv");
    const creditCard = document.getElementById('credit-card');
    const paypal = document.getElementById('paypal');
    const bitcoin = document.getElementById('bitcoin');

    //set name text field to be in focus
    nameFocus.focus();
    // Set placeholder text of 'Your Job Role'in Job Role: other section and hide it. 
    otherTitle.placeholder = "Your Job Role";
    otherTitle.style.display = 'none';
    //show when user select other option
    otherOption.addEventListener("change", () => {
        if (otherOption.value==="other"){
        otherTitle.style.display = ''; 
        }else{
        otherTitle.style.display ='none'; 
        }
    });
    /*
    T-Shirt Info section
    */
    //Hide the "Select Theme" option
    designSelect[0].hidden = true;
    colorDiv.hidden = true;
    //Add eventListener to design. 
    design.addEventListener('change', (e) => {
       const eventTheme = e.target.value;
       //set if user select Theme - JS puns show 'cornflow blur', 'dark slate grey' and 'gold'
       if (designSelect[1].value === eventTheme) {
            colorDiv.hidden = false;
            color[0].innerHTML = 'Cornflower Blue (JS Puns shirt only)';
            color[0].selected = true;
            color[0].style.display = 'block';
            color[1].style.display = 'block';
            color[2].style.display = 'block';
            color[3].style.display = 'none';
            color[4].style.display = 'none';
            color[5].style.display = 'none'; 
        // set if user selet Theme - i love JS show 'tomato', 'steel blue' and 'dim grey'
       } else {
            colorDiv.hidden = false;
            color[0].style.display = 'none';
            color[1].style.display = 'none';
            color[2].style.display = 'none';
            color[3].selected = true;
            color[3].style.display = 'block';
            color[4].style.display = 'block';
            color[5].style.display = 'block';  
       }  
    });
    /*
    Activity section
    */
    //crate element to display the total activity cost
    totalCost.innerHTML = "Total cost: " + totalActivitiesCost + " $";
    activity.appendChild(totalCost);
    //crate event listener when user selected the activity. calculating and show total cost
    activity.addEventListener('change', (e) => {
        const activityTarget = e.target;
        const activityCost = parseInt(activityTarget.getAttribute('data-cost'));
        if (activityTarget.checked) {
            totalActivitiesCost= totalActivitiesCost+activityCost;
            totalCost.innerHTML = "Total cost: " + totalActivitiesCost + " $"
        } else {
            totalActivitiesCost= totalActivitiesCost-activityCost;
            totalCost.innerHTML = "Total cost: " + totalActivitiesCost + " $"
        }
        const activityDayTime = activityTarget.getAttribute('data-day-and-time');
        for (let i = 0; i<activityInput.length; i +=1) {
            let checkInput = activityInput[i].getAttribute('data-day-and-time');
            if (activityDayTime === checkInput && activityTarget !== activityInput[i]) {
                if (activityTarget.checked) {
                    activityInput[i].disabled = true;
                } else {
                    activityInput[i].disabled = false;
                }
            }
        }
    });
    /*
    Payment Info section
    */
    // set placeholder text in card number, zip code and cvv input
    cardNum.placeholder = "enter 13 -16 digits";
    zipNum.placeholder = "enter 5 digits";
    cvvNum.placeholder = "enter 3 digits";
    //Hide the "Select Payment Method" option
    paymentSelect[0].hidden = true;
    paymentSelect[1].selected = true;
    //hide paypal and bitcoin selection
    paypal.style.display = 'none';
    bitcoin.style.display = 'none';
    payment.addEventListener('change', (e) => {
        let paymentTarget = e.target.value;
    // set if else condition to show and hide payment option    
        for (let i = 0; i < paymentSelect.length; i +=1) {
            if (paymentTarget=== 'credit card') {
                creditCard.style.display = '';
                paypal.style.display = 'none';
                bitcoin.style.display = 'none';
            } else if (paymentTarget=== 'paypal') {
                creditCard.style.display = 'none';
                paypal.style.display = '';
                bitcoin.style.display = 'none';   
            } else {
                creditCard.style.display = 'none';
                paypal.style.display = 'none';
                bitcoin.style.display = '';
            }
        }
    });
});