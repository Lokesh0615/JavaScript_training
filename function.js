var x = myFunction(4,6);
document.getElementById("demo").innerHTML = x;

function myFunction(a,b) {
 return a*b;
// console.log(a+b); it is undifiend
    
}
let text= "the multiplication is"+ " "+x;
// console.log(text);
document.getElementById("demo").innerHTML = text;