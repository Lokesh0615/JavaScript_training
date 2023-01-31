
// let person =new Object();
// const person = {
//     firstName: "john",
//     lastName: "doe",
//     age: 34,
//     eyeColor: "black",
//     "work exp": 10
//     // fullName: 
// };
// console.log(person);
// person.nationality="india";
// console.log(person);
// // delete person.nationality;
// console.log(person);

// console.log(person.age);
// console.log(person["eyeColor"]);
// console.log(person["work exp"]);
// document.getElementById("notification").innerHTML=person.firstName + " "+person.lastName;

// nested objects
// const myObj ={
//     ename:"lokesh",
//     age:"21",
//     cars:{
//         car1:"ford",
//         car2:"bmw",
//         car3:"fait"
//     }
// };

// console.log(myObj.cars.car1);
// console.log(myObj["cars"]["car2"]);
// console.log(myObj.cars["car3"]);

// 

// nested array and objects
// const myObj = {
//     ename: "loesk",
//     age: 21,
//     cars: [
//         { mName: "ford", models: ["modle1", "modle2", "model3"] },
//         { mName: "BMw", models:["modle1","model2"]}
//     ]
// };
// let x="";
// for(let i in myObj.cars){
//     x=x+"<h2>"+myObj.cars[i].mName+"</h2>";
//     for(let j in myObj.cars[i].models){
//         x=x+myObj.cars[i].models[j]+ "<br>";
//     }
// }
// document.getElementById("notification").innerHTML=x;

// object methods
// const person = {
//     firstName: "john",
//     lastName: "doe",
//     age: 34,
//     eyeColor: "black",
//     "work exp": 10,
//     fullName: function(){
//         return this.firstName + " " + this.lastName;
//     }
// };
// // document.getElementById("notification").innerHTML=person.fullName();

// person.name = function(){
//     return (this.firstName + " " + this.lastName).toUpperCase();
// }
// console.log(person);
// document.getElementById("notification").innerHTML=person.name();


// display objects
const person = {
        firstName: "john",
        lastName: "doe",
        age: 34,
        eyeColor: "black",
        "work exp": 10,
        // fullName: function(){
        //     return this.firstName + " " + this.lastName;
        // }
    };
// // object proferties
// document.getElementById("notification").innerHTML=person.fullName() + "," + person.age +"," + person.eyeColor;

// object in a loop
// let text="";
// for(let x in person){
//     text=text+person[x] + " ";
// };
// document.getElementById("notification").innerHTML=text;

// display objects by values by converting to an array using Objects.values()
const myArray= Object.values(person);
document.getElementById("notification").innerHTML=myArray;

// by using JSON.stringify()
let myString= JSON.stringify(person);
// document.getElementById("notification").innerHTML=myString;
