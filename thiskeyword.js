
const person ={
    firstname:"lokesh",
    lastname:"loki",
    id:1234,
    fullName:function () {
        return this.firstname+" "+this.lastname;
    }
};
// document.getElementsByClassName("demo")[0].innerHTML=person.fullName();

function my() {
    return this;
}
// document.getElementsByClassName("demo")[1].innerHTML=person.fullName();

// call()
const person2 ={
    firstname:"lokkk",
    lastname:"kiii"
};

// bind()
// document.getElementsByClassName("demo")[0].innerHTML=person.fullName.call(person2);
let Fname=person.fullName.bind(person2);
document.getElementsByClassName("demo")[0].innerHTML=Fname();

// apply()
document.getElementsByClassName("demo")[1].innerHTML=person.fullName.apply(person2);


