var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName(){
    var name = document.getElementById("contact-name").value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    else if(name.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)){
        nameError.innerHTML = "write full name";
        return false;
    }else{
        nameError.innerHTML = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>'
        return true
    }
}

function validatePhone(){
    var phone = document.getElementById("contact-phone").value;

    if(phone.length == 0 ){
        phoneError.innerHTML = "Phone is required";
        return false;
    }else if(phone.length !== 10){
        phoneError.innerHTML = "Phone no should be 10 digits";
        return false
    }else if( !phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits Please';
        return false
    }
    else{
        phoneError.innerHTML = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>';
        return true;
    }
}


function validateEmail(){
    var email = document.getElementById("contact-email").value;

if(email.length == 0){
    emailError.innerHTML = "Email is required";
    return false;
}else if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = "Email invalid";
    return false;
}
else{
emailError.innerHTML = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>';
    }
}

function validateMessage(){
    var message = document.getElementById("contact-message").value;
    var required = 30;
    var left = required - message.length;


    if(left>0){
        messageError.innerHTML = left + "more characters requires";
        return false;
    }else{
        messageError.innerHTML = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>';

    }
}

function validateForm(){

    if(!validateName() && !validatePhone() && !validateEmail() && !validateMessage()){
        submitError.innerHTML = "PLease fix error to sibmit";
        submitError.style.display = 'block';


        setTimeout(function(){submitError.style.display= "none";},3000)
        
        return false;
    }else{

    }
}