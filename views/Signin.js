import Abstractview from "./Abstractview.js";
import {start} from "../js/login.js"
export default class extends Abstractview{
    constructor(params){
        super(params);
        this.setTitle("Sign In - TNL Bank");
    }

    async getHtml(){
        return `
        <link href="/css/login.css" rel="stylesheet">
        <div class="login-container-body img-fluid">
        <div class="login-container">
    <form class="form form--hidden" id="login">
      <h1 class="form__title">Login</h1>
      <div class="form__message form__message--error "></div>
      <div class="form__input-group">
        <input id="signinUserName" type="text" class="form__input" autofocus placeholder="Username or email" required>
        <div class="form__input-error-message"></div>
        <p>Hi <span id="dataBindedName"> </span></p>
      </div>
      <div class="form__input-group">
        <input id="signinPassword" type="password" class="form__input" autofocus placeholder="Password" required>
        <div class="form__input-error-message"></div>
      </div>
      <button class="form__button" type="submit">Continue</button>
      <p class="form__text">
        <a href="#" class="form__link">Forgot Password</a>
      </p>
      <p class="form__text">
        <a href="" id="linkCreateAccount" class="form__link">Don't have an account? Create Account</a>
      </p>   
     </form>

     <form class="form" id="createAccount">
      <h1 class="form__title">Create Account</h1>
      <div class="form__message form__message--error "></div>
      <div class="form__input-group">
        <input type="text" class="form__input" autofocus placeholder="First Name" required>
        <div class="form__input-error-message"></div>
      </div>
      <div class="form__input-group">
        <input type="text" class="form__input" autofocus placeholder="Last Name" required>
        <div class="form__input-error-message"></div>
      </div>
      <div class="form__input-group">
        <input type="text" class="form__input" autofocus placeholder="Username" required>
        <div class="form__input-error-message"></div>
      </div>
      <div class="form__input-group">
        <input id="emailid" type="text" class="form__input" autofocus placeholder="Email" required>
        <div class="form__input-error-message"></div>
      </div>
      <div class="form__input-group">
        <input id="signupPassword" type="password" class="form__input" autofocus placeholder="Password" required>
        <div class="form__input-error-message"></div>
      </div>
      <button class="form__button" type="submit">Continue</button>
      <p class="form__text">
        <a href="" id="linkLogin" class="form__link">Already have an account?</a>
      </p>   
     </form>
  </div>
  </div>
  <script src="./js/login.js"></script>
        `
    }

    async initiateScript(){
        start();
    }
}