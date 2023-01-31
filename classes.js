
class Car{
    constructor(cname, year, price){
        this.cname=cname;
        this.year=year;
        this.price=price;
    }
    age(){
        let date=new Date();
        return date.getFullYear()-this.year;
    }
    netCost(sell){
        return this.price-sell;
    }

}

let myCar = new Car("ford", 2013,2334567);
let sellPrice=12345;
document.getElementById("notification").innerHTML="My cars is"+ myCar.age()+ " years old and profit is" + myCar.netCost(sellPrice);
