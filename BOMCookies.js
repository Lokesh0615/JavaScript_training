// document.cookie="username=lokesh;expires=Thu, 18 Dec 2023; path=/";
// document.cookie="name=lokesh;expires=Thu, 18 Dec 2023; path=/";

// console.log(document.cookie);
// setCookie(prompt("name"), prompt("value"), prompt("days"));
// setCookie("email", "lokeshhhhh@gmail", 1);
const s = document.getElementById("set");
s.addEventListener("click", detailes);
function detailes(){
    let name = document.getElementById("name").value;
    let val = document.getElementById("value").value;
    let daysTOLive = document.getElementById("days").value;
    setCookie(name, val, daysTOLive);
}
function setCookie(name, value, daysTOLive) {
    const date = new Date();
    date.setTime(date.getTime() + (daysTOLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
    // console.log(document.cookie);

}
// console.log(document.cookie);

// deleteCookie("email");
// deleteCookie("username");
// deleteCookie("n");
// deleteCookie("name");

let dc=document.getElementById("delete");
dc.addEventListener("click", deleteCookie);

// function deleteCookie(name) {
function deleteCookie(){
    let name =document.getElementById("dc").value;
    setCookie(name, null, null);
    document.getElementById("dis").innerHTML = name + " deleted";
    console.log(document.cookie);
}

let gc=document.getElementById("get");
gc.addEventListener("click", getCookie);

function getCookie(ename) {
// function getCookie(){
    // let ename=document.getElementById("gc").value;
    const cDecoded = decodeURIComponent(document.cookie);
    const cArry = cDecoded.split("; ");
    let result;
    // console.log(cArry);
    cArry.forEach(item => {
        if (item.indexOf(ename) == 0) {
            result = item.substring(ename.length + 1);
        }
    })
    return result;
    // document.getElementById("dis").innerHTML = result;
}
// setCookie("name", "lokesh", 2);
// setCookie("email", "lokesh@gamil",2);

// getCookie("email");
// console.log(getCookie("email"));
console.log(document.cookie);

function checkCookie(){
    let user = getCookie("email");
    if(user !="" && user!=undefined){
        alert("welcome " + user);
    }
    else{
        user = prompt("enter name");
        if(user !="" && user!=null){
            setCookie("name", user, 2);
        }
    }
}