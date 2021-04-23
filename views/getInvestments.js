
function start(){
    console.log("Investments start executed");
    fetchData();
}

async function fetchData(){
    var d;
    await fetch("https://api.mocki.io/v1/56750ff3")
    .then((res)=>res.json())
    .then((data)=>injectData(data));
}

function injectData(data){
    let docs = document.getElementsByClassName("bucket-body")
    for(var i=0; i<docs.length; i++){
      docs[i].innerHTML = data[i].text; 
    }
}

export {start};