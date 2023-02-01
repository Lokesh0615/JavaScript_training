function myfunction(x,y) {
    if(y==undefined){
        y=2;
    }
    return x+y;
};
document.getElementById("notification").innerHTML=myfunction(2);

function f1(x,y=10){
    return x+y;
}
document.getElementById("notification").innerHTML=f1(3,4);

// rest parameter
function sum(...args) {
    let a=0;
    for(let x of args){
        a=a+x;
    }
    return a;
}
document.getElementById("notification").innerHTML=sum(12,34,23,4,6,7,5,3,2,4,4);
