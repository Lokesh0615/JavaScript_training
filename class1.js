// class is not a object , its a template to the objects
class myCars{
    constructor(ename, year){
        this.ename=ename;
        this.year=year;
    };
    
    age (){
        let date= new Date();
        return date.getFullYear()-this.year;
    }
    
}
let myCar = new myCars("ford", 2013);
document.getElementById("notification").innerHTML="my car is "+ myCar.age()+ " years old";