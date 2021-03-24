function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function isLoggedin(){
    if(getCookie("Username").length>0 && getCookie("Password").length>0){
        return true;
    }
    else {
        return false;
    }
}

function logOut(){
    document.cookie = "Username=;";
    document.cookie = "Password=;";
    console.log("This is the cookie --> ", document.cookie);
}

export {isLoggedin,logOut};