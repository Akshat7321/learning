var stocks = new Stocks('6W6EITDI2T0S3SN9'); // Replace with your own

// Let's get the stock data of Tesla Inc for the last 10 minutes

async function searchstock(){
  var code = document.getElementById("code").value; 
  var result = await stocks.timeSeries({
    symbol: code,
    interval: 'daily',
    amount: 10
   });
   document.getElementById("stockdata").innerHTML=JSON.stringify(result);
  console.log(JSON.stringify(result)); 
}
