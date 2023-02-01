const person ={
    fullName: function(){
        return this.firstName+ " "+ this.lastName;
    }
};
const person1={
    firstName:"lokesh",
    lastName:"N"
}
const person2={
    firstName:"llll",
    lastName:"kk"
};

console.log(person.fullName.call(person1));
// console.log(person.fullName.bind(person1));
