
const cars =["saab", "volvo", "BMW"];
const colors= new Array ("white", "red", "black");

// document.getElementById("demo").innerHTML=cars;

// document.getElementById("demo").innerHTML=colors;

// console.log(cars[2]);
// console.log(colors[2]);
// let b=cars[2];
// console.log(b);
// console.log(cars.length);

// let text= "<ul>";
// for (let i =0; i<cars.length; i++){
//     text=text + "<li>" +cars[i] + "</li>";
// }
// text=text+"</ul>";
// document.getElementById("demo").innerHTML=text;

// document.getElementsByClassName("demo")[0].innerHTML=text;
// document.getElementsByClassName("demo")[1].innerHTML=text;

// document.getElementsByClassName("demo")[0].innerHTML=text;
// console.log(Array.isArray(cars));

// array methods

// document.getElementsByClassName("demo")[0].innerHTML=cars.toString();
// document.getElementsByClassName("demo")[0].innerHTML=cars.join(" a ");

// console.log(cars);
// cars.push("newcars");
// console.log(cars);
// console.log(cars.pop());
// document.getElementsByClassName("demo")[0].innerHTML=cars;
// cars.shift();
// document.getElementsByClassName("demo")[1].innerHTML=cars;
// console.log(cars);
// cars.unshift("unshiftcar");
// document.getElementsByClassName("demo")[1].innerHTML=cars;

// console.log(cars.length);
// console.log(cars[2]);
// console.log(cars[1]);
// delete makes unexpected hole, so use pop or shift;
// delete cars[1]; 
// cars.push("BMW");
// console.log(cars);
// console.log(cars.pop());
// document.getElementsByClassName("demo")[1].innerHTML=cars.concat(colors);

// cars.splice(2,0, "heloo cars");
// console.log(cars);
// cars.splice(2,1);
// console.log(cars);

// const newcars=cars.slice(1);
// console.log(newcars);

// sorting
// document.getElementsByClassName("demo")[0].innerHTML=cars.sort();
// document.getElementsByClassName("demo")[1].innerHTML=cars.reverse();

const a=[1,4,1,2,40,23,12];
// console.log(a.sort());
// a.sort(function (a,b) { return a-b;});
// console.log(a);
// a.sort(function (a,b) { return 0.5-Math.random() });
// console.log(a);

// document.getElementsByClassName("demo")[1].innerHTML=arrayMin(a);
// function arrayMin(arr) {
//     return Math.min.apply(null, arr);
// }

// let txt="";
// a.forEach(myfunction);
// function myfunction(value, index, array) {
//     txt=txt+ value*2 +"<br>";
// }
// document.getElementsByClassName("demo")[0].innerHTML=txt;

// function myfunction(value, index, array) {
//     return value*2;
// }

// document.getElementsByClassName("demo")[0].innerHTML=a.map(myfunction);

function myfunction(value, index, array) {
    return value>5;
}
// document.getElementsByClassName("demo")[0].innerHTML=a.filter(myfunction)

// function myfunction(total, value) {
//     return total+value;
// }
// document.getElementsByClassName("demo")[0].innerHTML=a.reduce(myfunction);
// console.log(a);
let b=a.every (myfunction);
// let c=a.find(myfunction)
let c=a.findIndex(myfunction)

// document.getElementsByClassName("demo")[0].innerHTML= b;
// document.getElementsByClassName("demo")[0].innerHTML=c;
// console.log(a.indexOf(40));
console.log(a.includes(40));
