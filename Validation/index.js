let form = document.forms.info;
firstname.addEventListener("blur", validationForName);
firstname.addEventListener("focus", focusForEveryInputElement);
firstname.addEventListener("input", onInputForName);
lastname.addEventListener("blur", validationForName);
lastname.addEventListener("focus", focusForEveryInputElement);
lastname.addEventListener("input", onInputForName);
middlename.addEventListener("blur", validationForName);
middlename.addEventListener("focus", focusForEveryInputElement);
middlename.addEventListener("input", onInputForName);
email.addEventListener("blur", validationForEmail);
email.addEventListener("focus", focusForEveryInputElement);
email.addEventListener("input", onInputForEmail);
password.addEventListener("blur", validationForPassword);
password.addEventListener("focus", focusForEveryInputElement);
password.addEventListener("input", onInputForPassword);
submit.addEventListener("click", processSubmit);

document.getElementById("submit").disabled = true;

function checkForSubmit(){
    if(!document.getElementsByClassName("invalid")[0]){
        document.getElementById("submit").disabled = false;
    }
    else{
        document.getElementById("submit").disabled = true;
    }
}

function validationForName (){
    if(!(/^[a-z]+$/i.test(this.value))){
       let temp=this.id;
       if(this.value){
            forBlur(temp, "Please only enter alphabets");
       }
       else{
            forBlur(temp, "Field must not be empty");
       }
    }
}

function onInputForName(){
    if(!(/^[a-z]+$/i.test(this.value))){
        this.classList.add('invalid');
    }
    else{
        this.classList.remove('invalid');
    }
    checkForSubmit();
}
        
function focusForEveryInputElement(){
    if(this.classList.contains("invalid")){
        document.getElementById("error" + this.id).innerHTML = "";
    }
}

function validationForEmail(){
    let x = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
    if(!x.test(this.value)){
        let temp = this.id;
        forBlur(temp, "Please enter valid email address")
    }
}

function onInputForEmail(){
    let x = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
    if(!x.test(this.value)){
        this.classList.add('invalid');
    }
    else{
        this.classList.remove('invalid');
    }
    checkForSubmit();
}

function validationForPassword (){
    if(!(/^[\S]{8,}$/.test(this.value))){
       let temp=this.id;
       forBlur(temp, "Password must be atleast of length 8");
    }
}

function onInputForPassword(){
    if(!(/^[\S]{8,}$/.test(this.value))){
        this.classList.add('invalid');
    }
    else{
        this.classList.remove('invalid');
    }
    checkForSubmit();
}

function processSubmit(){
    submit.disabled = true;
    let radios = document.getElementsByTagName('input');
    function checkRadios(){
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].type === 'radio' && radios[i].checked) {
                return radios[i].value;       
            }
         }
    }
    function checkCheckboxes(){
        let value = new Array();
        let j = 0;
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].type === 'checkbox' && radios[i].checked) {
             value[j] = radios[i].value;   
             j++    
            }
         }
         return value;
    }
    let rowElement = '<tr><td>' + firstname.value + '</td><td>' + lastname.value + '</td><td>' + middlename.value + '</td><td>' + email.value + '</td><td>' + password.value + '</td><td>' + checkRadios() + '</td><td>' + checkCheckboxes() + '</td></tr>' ; 
    DataTable.innerHTML+=rowElement;
}

function forBlur(temp, message){
    //document.getElementById(temp).classList.add('invalid');
    document.getElementById("error" + temp).innerHTML = message;
 }
        