var stocks = new Stocks('6W6EITDI2T0S3SN9'); // Replace with your own

// Let's get the stock data of Tesla Inc for the last 10 minutes

async function searchstock(){
  var select = document.getElementById("code"); 
  //console.log(code);
  var result = [];
  var options = select && select.options;
  var opt;

  for (var i=0, iLen=options.length; i<iLen; i++) {
    opt = options[i];

    if (opt.selected) {
      result.push(opt.value || opt.text);
    }
  }
  console.log(result);
  var charts=[]
  for(var res=0;res<result.length;res++){
    charts[res] = await stocks.timeSeries({
      symbol: result[res],
      interval: 'daily',
      amount: 10
     });
     console.log(charts[res]);
  }
  console.log(charts);
  /*var result = await stocks.timeSeries({
    symbol: code,
    interval: 'daily',
    amount: 10
   });*/
   var rate=[];
   charts.forEach(function(chart,ind){
    
   rate[ind]=[];
    for(var i=0;i<chart.length;i++)
    {
      rate[ind][i] = chart[i]["close"];
    }
    rate[ind]={values:rate[ind]}
    console.log(rate[ind]);
   })
   console.log(rate);
   /*var rate= [];
   
   for(var i=0;i<charts.length;i++)
   {
     rate[i] = charts[i]["close"];
   }
   console.log(rate);
   */zingchart.render({
    id: 'stockdata',
    data: {
      type: 'line',
      series: rate
    }
  });
  //document.getElementById("stockdata").innerHTML=JSON.stringify(result);
  //console.log(JSON.stringify(result)); 
}
