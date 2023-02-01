
let a= {
    firstName:"lokesh",
    lastName:"N",
    fullName: function(){
        return this.firstName+ " "+ this.lastName;
    }
};

let b={
    firstName:"nammmm",
    lastName:"eeee"
};

let c=a.fullName.bind(b);
console.log(c);

