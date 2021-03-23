import Abstractview from "./Abstractview.js";
import {start} from "../js/login.js"
export default class extends Abstractview{
    constructor(params){
        super(params);
        this.setTitle("Timeline");
    }

    async getHtml(){
        return `
        <div class="container" > 
        <h1> Home Page </h1>
        </div>
        `
    }
}