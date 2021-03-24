import {DataBinder} from "./loginDataBinding.js";

function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form__message");
    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success","form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function validateName(text){
    text.length>3 ? console.log("Valid FirstName or LastName") : console.log("Invalid FirstNaame or Lastname");
    return text.length>3;
}

function validateUserName(text){
    text.length>6 ? console.log("Valid UserName") : console.log("Invalid UserName");
    return text.length>6;
}

function validateEmail(inputText){
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //console.log(inputText.match(mailformat));
    if(inputText.match(mailformat)){
        console.log("valid Emailid");
        return true;
    }
    else {
        console.log("Invalid Emailid");
        return false;
    }
}

function validatePassword(text){
    return text.length>4;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function setInputError(inputElement, message){
    inputElement.classList.add('form__input--error');
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement){
    inputElement.classList.remove('form__input--error');
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}


function start(){
    var obj = {};
    obj.Message ="Hello";

    var dataBinder = new DataBinder({
        "model" : obj,
        "property" : "Message"
    });

    dataBinder.addDataBinding("signinUserName", "value", "keyup");
    dataBinder.addDataBinding("dataBindedName", "innerHTML");
    obj.Message ="";
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click",e=>{
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    })

    document.querySelector("#linkLogin").addEventListener("click",e=>{
        e.preventDefault();
        createAccountForm.classList.add("form--hidden");
        loginForm.classList.remove("form--hidden");
    }) 

    createAccountForm.addEventListener("submit", e=>{
        e.preventDefault();
        console.log("inside");
        
        
        let ele = createAccountForm.getElementsByClassName("form__input")
        console.log(ele);
        if(validateName(ele[0].value) && validateName(ele[1].value) && validateUserName(ele[2].value) && 
        validateEmail(ele[3].value) && validatePassword(ele[4].value) ){
            for(var i=0;i<ele.length;i++){
                document.cookie = `${ele[i].placeholder}`+"="+`${ele[i].value}`+";";
            }   
            console.log(document.cookie);
            setFormMessage(createAccountForm, "success", "Login");
            createAccountForm.classList.add("form--hidden");
            loginForm.classList.remove("form--hidden");
        }else{
            //createAccountForm.getElementsByClassName("form__message--error")[0].innerHTML ="Kindly fill the form correctly";
            setFormMessage(createAccountForm, "error", "Kindly fill the form correctly");
        }
    });

    loginForm.addEventListener("submit", e=>{
        e.preventDefault();
        console.log("received");
        // Form Validation 
        // Do authentication and check
        if(getCookie("Username") === document.getElementById("signinUserName").value 
        && getCookie("Password") === document.getElementById("signinPassword").value){
            setFormMessage(loginForm,"success", "Succesful Login");
            window.location="../index.html";
        }else{
            setFormMessage(loginForm, "error", "Incorrect Username or Password");
        }
        
    })

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur",e=>{
            switch(e.target.id){
                case "signinUserName":
                    if(!validateUserName(e.target.value)) 
                        setInputError(inputElement,"UserName length should be > 10 characters"); 
                    break;
                case "emailid":
                    if(!validateEmail(e.target.value))
                    setInputError(inputElement,"Invalid email id");
                    break;
                case "signinPassword":
                    if(!validatePassword(e.target.value))
                        setInputError(inputElement,"Password should be longer than 6 characters");
                break;
                case "signupPassword":
                    if(!validatePassword(e.target.value))
                        setInputError(inputElement,"Password should be longer than 6 characters");
                break; 
                default: 
                break;
            }
            // if(e.target.id ==="signupUserName" && e.target.value.length < 10){
            //     setInputError(inputElement,"UserName length should be > 10 characters");
            // }

        });

        inputElement.addEventListener("input",e=>{
            clearInputError(inputElement);
        });
    })
}

export {start};