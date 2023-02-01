
function myfunction(a,b){
    return a*b;
}

// function with expresion
const x= function(a,b){
    // return a*b;
    return arguments.length;

}
console.log(x(3,5));

// Function constructor
const y= new Function("a","b", "return a*b");
console.log(y(2,4));
// let z=x(2,4)*3;
let z= x(2,3);
console.log(z);

// arrow function
// in ES6
let mname=(x,y)=> x+y;
console.log(mname("lo","kesh"));

// self invoking function
let a=function(){
    document.getElementById("notification").innerHTML="hello self invoking function";
}();