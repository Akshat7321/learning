import Abstractview from "./Abstractview.js";
import {start} from "./getInvestments.js"
export default class extends Abstractview{
    constructor(params){
        super(params);
        this.setTitle("Investments - TnI Bank");
    }

    async getHtml(){
        return `
        <link rel="stylesheet" href="/css/investments.css">
        <div class="investments-section1" >
        <h4 class="section-heading">
           Trade on your own 
        </h4>
        <h6 class="section-subheading">
            With J.P. Morgan Self-Directed Investing, make unlimited $0 online trades<span><sub>1</sub></span>securely through the Chase Mobile app® or at Chase.com
        </h6>
        <div class="row">
            <div class="col-md-4 col-s-12 parent-bucket">
                <div class="col">
                    <h6 class="bucket-heading"> General Investment</h6>
                    <p class="bucket-body">some random text</p>
                    <div style="height:40px;"></div>
                    <hr class="section-bucket-separator">
                </div>
                <button class="buckets-button child-bucket-element">Open an account</button>
                <!-- <button class="buckets-button bucket-button-allignment">Open an account</button> -->
            </div>
            <div class="col-md-4 col-s-12 parent-bucket">
                <div class="col">
                    <h6 class="bucket-heading"> Traditional IRA</h6>
                    <p class="bucket-body">some random text </p>
                    <div style="height:40px;"></div>
                    <hr class="section-bucket-separator">
                </div>
                <button class="buckets-button child-bucket-element">Open an account</button>
            </div>
            <div class="col-md-4 col-s-12 parent-bucket">
                <div class="col">
                    <h6 class="bucket-heading"> Roth IRA</h6>
                    <p class="bucket-body">some random text</p>
                    <div style="height:40px;"></div>
                    <hr class="section-bucket-separator">
                </div>
                <button class="buckets-button child-bucket-element">Open an account</button>
            </div>
        </div> 
    </div>

    <div class="investments-section2" >
        <h4 class="section-heading">
            Invest with our robo-advisor 
        </h4>
        <h6 class="section-subheading">
            With J.P. Morgan Automated Investing, you get professionally designed, low-cost portfolios, dynamically adjusted with our technology. Advisory fees start as low 15¢/month when you invest $500
        </h6>
        <div class="row">
            <div class="col-md-4 col-s-12 parent-bucket">
                <div class="col">
                    <h6 class="bucket-heading"> General Investment</h6>
                    <p class="bucket-body">some random text</p>
                    <div style="height:40px;"></div>
                    <hr class="section-bucket-separator">
                </div>
                <button class="buckets-button child-bucket-element">Open an account</button>
            </div>
            <div class="col-md-4 col-s-12 parent-bucket">
                <div class="col">
                    <h6 class="bucket-heading"> Traditional IRA</h6>
                    <p class="bucket-body">some random text</p>
                    <div style="height:40px;"></div>
                    <hr class="section-bucket-separator">
                </div>
                <button class="buckets-button child-bucket-element">Open an account</button>
            </div>
            <div class="col-md-4 col-s-12 parent-bucket">
                <div class="col">
                    <h6 class="bucket-heading"> Roth IRA</h6>
                    <p class="bucket-body">some random text</p>
                    <div style="height:40px;"></div>
                    <hr class="section-bucket-separator">
                </div>
                <button class="buckets-button child-bucket-element">Open an account</button>
            </div>
        </div> 
    </div>

    <div class="investments-section1 parent-bucket">
        <h4 class="section-heading">
        Work with a J.P Morgan Advisor 
        </h4>
        <h6 class="section-subheading">
            Get a free investment check-up to make sure you’re still on track to meet your financial goals.
        </h6>
        <div style="height: 20px;"></div>
        <button  class="buckets-button horizontal-center-button">Open an account</button>
        <hr>
    </div>
        `
    }

    async initiateScript(){
        start();
    }
}