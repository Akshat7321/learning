import Abstractview from "./Abstractview.js";

export default class extends Abstractview{
    constructor(params){
        super(params);
        this.setTitle("Home - TNL Bank");
    }

    async getHtml(){
        return `
        <div class="row">
        <div class="col-md-3">

  Select from Stock Market Leader
  </div>
  <div class="col-md-7">
  <select class="form-select form-select-md col-lg-5" aria-label=".form-select-sm example" name="code" id="code" multiple>
  <option selected>Open this select menu</option>
  <option value="TSLA">Tesla Inc</option>
  <option value="AAPL">Apple Inc</option>
  <option value="AMZN">Amazon.com Inc</option>
  <option value="VIAC">Viacomcbs Inc Cl B</option>
  <option value="MSFT">Micosoft Corp</option>
  <option value="BA">Boeing Company</option>
  <option value="FB">Facebook Inc</option>
  <option value="NIO">Nio Inc</option>
  <option value="INTC">Intel Corp</option>
</select><br/><br/>
<input type="submit" onclick="searchstock()" class="btn btn-primary" value="Select">
  <p id="stockdata"></p>
</div>
</div>
<script src="./js/stocklogic.js"></script>
`
    }
    
}