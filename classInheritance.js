// // for methods we cant pass values, we assign values
// //  Car.present="lokesh";
// // for functions we pass values
// // Car.function("loeks");
// class Car {
//     constructor(brand){
//         this.carnName=brand;
//     }
//     present(){
//         return "i have a "+ this.carnName;
//     }
// };

// class Model extends Car{
//     constructor(brand, model){
//         super(brand);
//         this.model=model;
//     }
//     show(){
//         return this.present() + ", it is a " + this.model;
//     }
// };

// let myCar = new Model("ford", 2013);
// document.getElementById("notification").innerHTML=myCar.show();

// // getters and setters
// class Car{
//     constructor(brand){
//         this._carName=brand;
//     }
//     get carName(){
//         return this._carName;
//     }
//     set carName(x){
//         this._carName=x;
//     }
// }
// let myCar=new Car("ford");
// console.log(myCar.carName);
// myCar.carName="volov";
// console.log(myCar.carName);


// // static methods
class Car{
    constructor(ename){
        this.ename=ename;
    }
    static okay(){
        return "okk";
    }
    static hello(x){
        return "hello " + x.ename;
    }

}
let myCar=new Car("ford");
// we can call "okay()" on myCar object:
document.getElementById("notification").innerHTML=Car.okay();

// but you cant call "hello()" on myCar object;
// by sending it as a parameter you can call it
document.getElementsByClassName("demo")[0].innerHTML=Car.hello(myCar);
