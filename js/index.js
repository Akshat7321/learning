import Home from "../views/Home.js";
import Signin from "../views/Signin.js";
import {isLoggedin, logOut} from "./loginStatus.js";
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

function NavBar(){
    console.log("called NavBAr");
    if(isLoggedin()){
        document.getElementById("navbarSupportedContent").innerHTML = 
        ` <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/" data-link>Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/profile" data-link>Profile</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/home" logout>Logout</a>
        </li>
    </ul>
        `
    }
    else{
        document.getElementById("navbarSupportedContent").innerHTML = 
        ` <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/" data-link>Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/signin" data-link>Sign In</a>
        </li>
    </ul>
        `
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    console.log("Hello world");
    NavBar();
    document.body.addEventListener("click", e=>{
        if(e.target.matches("[data-link]")){
            e.preventDefault();  
            navigateTo(e.target.href);
            console.log(location.pathname);
            ///router();
        } 
        else if(e.target.matches("[logout]")){
            e.preventDefault();
            logOut();
            NavBar();
        }
     });
     router();
})