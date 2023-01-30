const person = { 
    fisrtName:"lokesh", 
    lastName:"nanjunadappa",
    boi:12-01-2011,
    fullName: function(){
        return this.fisrtName + " " +this.lastName;
    }

};
console.log(person.fisrtName);

document.getElementById("demo").innerHTML = person.fullName();
// console.log(typeof(person.boi));