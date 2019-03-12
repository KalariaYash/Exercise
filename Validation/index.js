const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
const nameRegex = /^[a-z]+$/i ;
const passwordRegex = /^[\S]{8,}$/ ;

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

function checkForSubmit(){
    document.getElementById("submit").disabled = document.getElementsByClassName("invalid")[0];
}

function validationForName (){
    if(!(nameRegex.test(this.value))){
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
    if(!(nameRegex.test(this.value))){
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
    
    if(!emailRegex.test(this.value)){
        let temp = this.id;
        forBlur(temp, "Please enter valid email address")
    }
}

function onInputForEmail(){
    if(!emailRegex.test(this.value)){
        this.classList.add('invalid');
    }
    else{
        this.classList.remove('invalid');
    }
    checkForSubmit();
}

function validationForPassword (){
    if(!(passwordRegex.test(this.value))){
       let temp=this.id;
       forBlur(temp, "Password must be atleast of length 8");
    }
}

function onInputForPassword(){
    if(!(passwordRegex.test(this.value))){
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
    function checkedRadio(){
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].type === 'radio' && radios[i].checked) {
                return radios[i].value;       
            }
         }
    }
    function checkedCheckboxes(){
        let value = new Array();
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].type === 'checkbox' && radios[i].checked) {
             value.push(radios[i].value);    
            }
         }
         return value;
    }
    let rowElement = '<tr>\n  <td>' + firstname.value + '</td>\n  <td>' + lastname.value + '</td>\
\n  <td>' + middlename.value + '</td>\n  <td>' + email.value + '</td>\
\n  <td>' + password.value + '</td>\n  <td>' + checkedRadio() + '</td>\
\n  <td>' + checkedCheckboxes() + '</td>\n</tr>' ; 
    DataTable.innerHTML+=rowElement;
}

function forBlur(temp, message){
    document.getElementById("error" + temp).innerHTML = message;
 }
        