import Abstractview from "./Abstractview.js";
import {start} from "../js/login.js"
export default class extends Abstractview{
    constructor(params){
        super(params);
        this.setTitle("Home - TNL Bank");
    }

    async getHtml(){
        return `
        <!--Get Starteed=======================================================================-->
        <div class="getstarted row col-12 bg-light">
          <div class="col-lg-5">
            <img src="images/getstarted.jpg" class="img-fluid" alt="">
          </div>
          <div class="getstartedcontent  col-lg-7">
            <h2 class="getstartedtitle">Welcome to a more personal way to think about your wealth.</h2><br>
            <a class="btn btn-primary" href="#" role="button">Get Started</a>
          </div>
        </div>
        
        <!--Two ways=============================================================================-->
        <div class="twoway row col-12">
          <h1 class="getstartedtitle" style="text-align: center;">Here are two ways to get started</h1>
          <div class="col-lg-4">
            <img src="images/mob.png" class="img-fluid" alt="">
          </div>
          <div class="twowaycontent col-lg-5">
            <p><h2>Trade on your own</h2></p>
            <p>With Self-directed investing, make unlimites $0 online trades securely through Mobile app or website.</p>
            <ul>
              <li>$0 commission</li>
              <li>$0 minimum investment</li>
            </ul><br>
            <a class="btn btn-primary" href="#" role="button">Open an Account</a>
            <br><br>
            <a class="" href="#" role="button">Learn about Self directed Investment ></a>
          </div>
        </div>
          <div class="twoway row col-12">
              <div class="twowaycontent col-lg-5">
              <p><h2>Invest with our robo-advisor</h2></p>
              <p>With Automated investing, make unlimites $0 online trades securely through Mobile app or website.</p>
              <ul>
                <li>Select fund fees are returned to you</li>
                <li>$500 minimum investment</li>
              </ul><br>
              <a class="btn btn-primary" href="#" role="button">Open an Account</a>
              <br><br>
              <a class="" href="#" role="button">Learn about Automated Investing ></a>
            </div>
            <div class="col-lg-7" >
              <img src="images/mob.png" class="img-fluid" alt=""style="float: right;">
            </div>
          </div>
        `
    }
}