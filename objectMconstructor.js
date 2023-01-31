function Person(first, last, age, eye){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.eyeColr=eye;
};

const myFather= new Person("lokesh", "lo", 23, "black");
document.getElementById("notification").innerHTML=myFather.age;
myFather.nation="india";
console.log(myFather.nation);
console.log(myFather);
// we cant add a property to constructor
Person.nation="inida";
console.log(myFather.nation);