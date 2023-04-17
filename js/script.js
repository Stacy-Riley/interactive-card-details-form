//Connections to pages:
const ccPage = document.querySelector(".entry-page-display");
const thankYouPage = document.querySelector(".thank-you-page-display");

//Connections to inputs:
const inputFields = document.querySelectorAll("input");
const cardholderName = document.getElementById("cardholder-name");
const cardNum = document.getElementById("card-number");
const expMonth = document.getElementById("exp-date-month");
const expYear = document.getElementById("exp-date-year");
const cvcCode = document.getElementById("cvc-code");
const confirmButton = document.querySelector("form");

//Minimum of 15 numbers and no other characters:
const cardNumberPattern = /^[0-9]{15,16}$/;
const datePattern = /^[0-9]{2,2}$/;
const cvcPattern = /^[0-9]{3,3}$/;

//Error message Section:
const nameError = document.querySelector(".name-error-message");
const ccError = document.querySelector(".card-number-error-message");
const monthError = document.querySelector(".month-error-message");
const yearError = document.querySelector(".year-error-message");
const cvcError = document.querySelector(".cvc-code-error-message");

//Error images section:
const errorImageFront = document.getElementById("error-image-front");
const errorImageBack = document.getElementById("error-image-back");
const initialImageFront = document.getElementById("initial-image-front");
const initialImageBack = document.getElementById("initial-image-back");

//Function to verify name:
const verifyName = function(){
    if(cardholderName.value === ""){
        nameError.textContent = "Can't be blank";
        cardholderName.classList.add("error");
        initialImageBack.classList.add("hide-image");
        initialImageFront.classList.add("hide-image");
        errorImageBack.classList.remove("hide-image");
        errorImageFront.classList.remove("hide-image");
        confirmButton.disabled = true;
        return false;
    } else {
        nameError.textContent = "";
        cardholderName.classList.remove("error");
        initialImageBack.classList.remove("hide-image");
        initialImageFront.classList.remove("hide-image");
        errorImageBack.classList.add("hide-image");
        errorImageFront.classList.add("hide-image");
        confirmButton.disabled = false;
    }
    return true;
}

//Function to verify the CC number:
const verifyCardNumber = function(){
    if(cardNum.value === ""){
        ccError.textContent = "Can't be blank";
        cardNum.classList.add("error");
        initialImageBack.classList.add("hide-image");
        initialImageFront.classList.add("hide-image");
        errorImageBack.classList.remove("hide-image");
        errorImageFront.classList.remove("hide-image");


        confirmButton.disabled = true;
        return false;
    } else if(cardNum.value.length > 16) {
        ccError.textContent = "Too many numbers"
        cardNum.classList.add("error");
        initialImageBack.classList.add("hide-image");
        initialImageFront.classList.add("hide-image");
        errorImageBack.classList.remove("hide-image");
        errorImageFront.classList.remove("hide-image");
        confirmButton.disabled = true;
        return false;
    } else if(!cardNumberPattern.test(cardNum.value)){
        //If input contains non-numeric characters
        ccError.textContent = "Wrong format, numbers only"
        initialImageBack.classList.add("hide-image");
        initialImageFront.classList.add("hide-image");
        errorImageBack.classList.remove("hide-image");
        errorImageFront.classList.remove("hide-image");
        cardNum.classList.add("error");
        confirmButton.disabled = true;
        return false;
    } else {
        //Input contains only numeric characters
        ccError.textContent = ""
        confirmButton.disabled = false;
        cardNum.classList.remove("error");
        initialImageBack.classList.remove("hide-image");
        initialImageFront.classList.remove("hide-image");
        errorImageBack.classList.add("hide-image");
        errorImageFront.classList.add("hide-image");       
    }
    return true;
}

// Function to verify date info here:
const verifyMonth = function () {
    if (expMonth.value === "") {
        monthError.textContent = "Can't be blank";
        expMonth.classList.add("error");
        initialImageBack.classList.add("hide-image");
        initialImageFront.classList.add("hide-image");
        errorImageBack.classList.remove("hide-image");
        errorImageFront.classList.remove("hide-image");
        confirmButton.disabled = true;
        return false;
  
    } else if (!datePattern.test(expMonth.value)) {
        monthError.textContent = "Numbers only";
        expMonth.classList.add("error")
        initialImageBack.classList.add("hide-image");
        initialImageFront.classList.add("hide-image");
        errorImageBack.classList.remove("hide-image");
        errorImageFront.classList.remove("hide-image");
        confirmButton.disabled = true;
        return false;
    } else {
        monthError.textContent = "";
        expMonth.classList.remove("error") 
        initialImageBack.classList.remove("hide-image");
        initialImageFront.classList.remove("hide-image");
        errorImageBack.classList.add("hide-image");
        errorImageFront.classList.add("hide-image");  
    }   
    return true
}

//Function to verify expYear here:
const verifyYear = function(){
    if (expYear.value === "") {
        //There isn't enough space to have 2 messages under the mm/yy input fields-sending the message to the month field
        monthError.textContent = "Can't be blank";
        expYear.classList.add("error");
        initialImageBack.classList.add("hide-image");
        initialImageFront.classList.add("hide-image");
        errorImageBack.classList.remove("hide-image");
        errorImageFront.classList.remove("hide-image");
        confirmButton.disabled = true;
        return false;

    } else if (!datePattern.test(expYear.value)) {
        monthError.textContent = "Numbers only";
        initialImageBack.classList.add("hide-image");
        initialImageFront.classList.add("hide-image");
        errorImageBack.classList.remove("hide-image");
        errorImageFront.classList.remove("hide-image");
        expYear.classList.add("error")
        confirmButton.disabled = true;
        return false;
    } else {
        expYear.classList.remove("error") 
        initialImageBack.classList.remove("hide-image");
        initialImageFront.classList.remove("hide-image");
        errorImageBack.classList.add("hide-image");
        errorImageFront.classList.add("hide-image"); 
    }
        return true;   
}

// Function to verify cvcCode here:
const verifyCvc = function() {
    if(cvcCode.value === ""){
        cvcError.textContent = "Can't be blank";
        cvcCode.classList.add("error");
        initialImageBack.classList.add("hide-image");
        initialImageFront.classList.add("hide-image");
        errorImageBack.classList.remove("hide-image");
        errorImageFront.classList.remove("hide-image");
        confirmButton.disabled = true;
        return false;
       
    } else if(!cvcPattern.test(cvcCode.value)){
        cvcError.textContent = "Numbers only";
        cvcCode.classList.add("error");
        initialImageBack.classList.add("hide-image");
        initialImageFront.classList.add("hide-image");
        errorImageBack.classList.remove("hide-image");
        errorImageFront.classList.remove("hide-image");
        confirmButton.disabled = true;
        return false;
        
    } else {
        cvcError.textContent = "";
        cvcCode.classList.remove("error")
        initialImageBack.classList.remove("hide-image");
        initialImageFront.classList.remove("hide-image");
        errorImageBack.classList.add("hide-image");
        errorImageFront.classList.add("hide-image"); 
    }
        return true;
}

//Event Listeners:
//name input field
cardholderName.addEventListener("change", function(event){
    verifyName();
})
// Credit card input field
cardNum.addEventListener("change", function(event){
    verifyCardNumber();
});

//expMonth input field
expMonth.addEventListener("change", function(event){
    verifyMonth();
});
//expYear input field
expYear.addEventListener("change", function(event){
    verifyYear();
});

//cvcCode input field
cvcCode.addEventListener("change", function(event){
    verifyCvc();
});
//Click event to listen for the submit button:
confirmButton.addEventListener("submit", function(event){
    event.preventDefault();
    verifyName();
    verifyCardNumber();
    verifyMonth();
    verifyYear();
    verifyCvc();
    //Add checks for input fields
    if( verifyName() === true && 
        verifyCardNumber() === true && 
        verifyMonth() === true && 
        verifyYear() === true &&
        verifyCvc() === true){
        
        ccPage.style.display = "none";
        thankYouPage.style.display = "block";
     } 

    //Gather the data
    const ccInfo = {
        cardholderName: cardholderName.value,
        cardNumber: cardNum.value,
        expirationMonth: expMonth.value,
        expirationYear: expYear.value,
        cvcCode: cvcCode.value
      };
      
      //Displaying entered data here so you can see that the code works:
      console.log(ccInfo);
});

