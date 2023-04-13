const cardholderName = document.getElementById("cardholder-name");
const cardNum = document.getElementById("card-number");
const expMonth = document.getElementById("exp-date-month");
const expYear = document.getElementById("exp-date-year");
const cvcCode = document.getElementById("cvc-code");
const confirmButton = document.querySelector(".confirm-button");
//Minimum of 15 numbers and no other characters
const cardNumberPattern = /^[0-9]{15,}$/;
const datePattern = /^[0-9]{2,}$/;

const checkInfo = function(event){
    event.preventDefault()
    verifyCardNumber();

     //Add checks for input fields
    if(cardholderName === ""){
        cardholderName.setCustomValidity("Please enter the name on the card");
    } else if(expMonth === "") {
        expMonth.setCustomValidity("Can't be blank");
    } else if(expYear === ""){
        expYear.setCustomValidity("Can't be blank");
    } else if(cvcCode === ""){
        cvcCode.setCustomValidity("Can't be blank");
    } else {
        return true
    }
}

const verifyCardNumber = function(){
    if(!cardNumberPattern.test(cardNum.value)){
        //Input contains non-numeric characters
        cardNum.setCustomValidity("Wrong format; numbers only");
        confirmButton.disabled = true;

    } else {
        //Input contains only numeric characters
        cardNum.setCustomValidity("");
        confirmButton.disabled = false;
    }
}
//Next step is to verify date info here:
// const verifyDate = function (){
//     if(!datePattern.test(expMonth.value) || !datePattern.test(expYear.value)){

//     }
// }