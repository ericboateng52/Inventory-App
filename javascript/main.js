let btn = document.getElementById("btn");
let sidebar = document.querySelector(".sidebar")
searchBtn = document.querySelector(".bx-search")

 function active(){
 sidebar.classList.toggle("active")   
}
//Logout
var buttn  = document.querySelector("#log_out")
 function logout_home(){
        window.location = "./html/login.html";
        return false;
}
function logout(){
    window.location = "../html/login.html";
    return false;
}


