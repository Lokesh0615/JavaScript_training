
const person = {
    firstName:"john",
    lastName:"Doe",
    language:" en",
    age:"",
    get lang (){
        return this.language.toLocaleUpperCase();
    },
    set ageSet(a){
        this.age=a;
    }
};
document.getElementById("notification").innerHTML=person.lang;
// function myfunction(){
//     person.ageSet=document.getElementById("test").value;
//     document.getElementById("notification").innerHTML=person.age;
// }


// Object,defineProperty() also used to add getters and setters
const obj = { counter: 0};

Object.defineProperty( obj, "reset", {
    get: function(){ this.counter=0;}
});
console.log(obj.counter);

Object.defineProperty( obj, "increment", {
    get : function() { this.counter++;}
});
console.log(obj.counter);

Object.defineProperty( obj, "decrement",{
    get: function(){this.counter--;}
});
console.log(obj.counter);

Object.defineProperty( obj, "add",{
    set: function(value){this.counter+=value;}
});

function myfunction(){
    obj.add=document.getElementById("test").value;
    document.getElementById("notification").innerHTML=obj.counter;
    obj.reset;
}

