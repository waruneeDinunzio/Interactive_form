window.addEventListener('DOMContentLoaded', (event) => { 
    const nameFocus = document.getElementById('name').focus();
    const otherTitle = document.getElementById('other-title');
    //hide Job role: other
    otherTitle.style.display = 'none';

    const otherOption = document.getElementById('title');
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
    const size = document.getElementById('size');
    const design = document.getElementById('design');
    const colorDiv = document.getElementById("colors-js-puns")
    const color = document.getElementById('color');
    const colorOption = document.querySelectorAll('#color option')
    //console.log(colorOption);
    //console.log(design);
    let designSelect = document.querySelectorAll('#design option');
        //Hide the "Select Theme" option
        //console.log(designSelect[0]);
        designSelect[0].hidden = true;
        colorDiv.hidden = true;

    //console.log(colorOption);
    design.addEventListener('change', (e) => {
       const eventTheme = e.target.value;
       console.log(designSelect[1].value);
       console.log(eventTheme);
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
   let totalActivitiesCost = 0;
   let totalCost = document.createElement('h2');
   totalCost.innerHTML = "Total cost: " + totalActivitiesCost + " $";
   const activity = document.querySelector('.activities');
   //console.log(activity);
   activity.appendChild(totalCost);
   const activityInput = document.querySelectorAll('.activities input');
        //console.log(activityInput);
    //crate event listener when user selected the activity
    activity.addEventListener('change', (e) => {
       const activityTarget = e.target;
       console.log(activityTarget);
       const activityCost = parseInt(activityTarget.getAttribute('data-cost'));
        console.log(activityCost);
        if (activityTarget.checked) {
            totalActivitiesCost= totalActivitiesCost+activityCost;
            console.log(totalActivitiesCost);
            totalCost.innerHTML = "Total cost: " + totalActivitiesCost + " $"
        } else {
            totalActivitiesCost= totalActivitiesCost-activityCost;
            totalCost.innerHTML = "Total cost: " + totalActivitiesCost + " $"
        }
        const activityDayTime = activityTarget.getAttribute('data-day-and-time');
        console.log(activityDayTime);
        //const activityInput = activity.input;
        //console.log(activityInput);
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
   const payment = document.getElementById('payment');
   const paymentSelect = document.querySelectorAll('#payment option');
   const cardNum = document.querySelector("#cc-num");
   const zipNum = document.querySelector("#zip");
   const cvvNum = document.querySelector("#cvv");
   cardNum.placeholder = "enter 13 -16 digits";
   zipNum.placeholder = "enter 5 digits";
   cvvNum.placeholder = "enter 3 digits";
   //Hide the "Select Payment Method" option
   console.log(paymentSelect);
   paymentSelect[0].hidden = true;
   //paymentSelect[0].disabled = true;
   paymentSelect[1].selected = true;
    const creditCard = document.getElementById('credit-card');
    const paypal = document.getElementById('paypal');
    const bitcoin = document.getElementById('bitcoin');
    console.log(creditCard);
    console.log(paypal);
    console.log(payment);
    paypal.style.display = 'none';
    bitcoin.style.display = 'none';
    payment.addEventListener('change', (e) => {
        let paymentTarget = e.target.value;
        console.log(paymentTarget);
        console.log(paymentSelect[1].value);
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