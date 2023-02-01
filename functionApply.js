const person = {
    firstName: "lokesh",
    lastName: "N",
    fullName: function () {
        return this.firstName + this.lastName;
    }
};
const person1={
    firstName:"lloo",
    lastName:"ooooo"
}
let fullName=person.fullName.bind(person1);
document.getElementById("notification").innerHTML=fullName();
console.log(fullName());