// a closure gives you access to an outer function's
//  scope from an inner function. 

function init() {
    var enanme="lokesh";
    function displayName() {
        document.getElementById("notification").innerHTML=enanme;
    }
    displayName();
};
console.log(init());

function makeFunc() {
    let ename="lokkk";
    function displayName() {
        document.getElementsByClassName("demo")[0].innerHTML=ename;
    }
    return displayName;
}
const myFunc =makeFunc();
myFunc();