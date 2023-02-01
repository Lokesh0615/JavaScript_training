function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

Person.ind="pp";
console.log(Person.ind);

Person.prototype.nationality = "English";
const myFather = new Person("lokesh", "lo", 23, "black");
document.getElementById("notification").innerHTML = myFather.age;
console.log(Person);
// myFather.nation="india";