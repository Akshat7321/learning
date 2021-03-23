import Home from "../views/Home.js";
import Signin from "../views/Signin.js";
console.log("Executing index.js");

const navigateTo = url=>{
    history.pushState(null, null, url);
    router();
}

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");


const router = async() => {
    const routes = [
        {path: "/", view: Home},
        {path: "/signin", view: Signin},
      ];

    const potentialMatchs = routes.map(route => {
        return {
           route : route,
           result : location.pathname.match(pathToRegex(route.path))
        }
    });

    console.log(potentialMatchs);

    let match = potentialMatchs.find( obj => obj.result !=null);
    if(!match){
        match = {
            route : routes[0],
            isMatch : true
        }
    }

    const view= new match.route.view;
    let ele= document.querySelector("#app");
    ele.innerHTML = await view.getHtml();
    await view.initiateScript();    
    // let scriptsAdded = await view.getScript();
    // if(scriptsAdded != null){
    //     ele.appendChild(scriptsAdded);
    // }

};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded",()=>{
    console.log("Hello world");
    document.body.addEventListener("click", e=>{
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
            console.log(location.pathname);
            ///router();
        } 
     });
     router();
})