
// let d=new Date();
// let d=new Date("october 13, 2014 11:30")
// let d=new Date("2019-12-23");
// "january starts with 0"
// let d= new Date(2019, 11, 28, 06,30,45,8)
// document.getElementsByClassName("demo")[0].innerHTML=d;
// document.getElementsByClassName("demo")[0].innerHTML=d.toString();
// document.getElementsByClassName("demo")[0].innerHTML=d.toDateString();
// document.getElementsByClassName("demo")[0].innerHTML=d.toUTCString();
// document.getElementsByClassName("demo")[1].innerHTML=d.toISOString();
// let c=new Date("03/10/2012");
// let c= Date.parse("january, 25, 2023")
// document.getElementsByClassName("demo")[1].innerHTML=c;

// date get methods

// let d= new Date("2019-10-25");
// let d= new Date();
// document.getElementsByClassName("demo")[0].innerHTML=d.getFullYear();
// document.getElementsByClassName("demo")[0].innerHTML=d.getMonth();
// document.getElementsByClassName("demo")[0].innerHTML=d.getHours() + ","+ d.getMinutes();
// document.getElementsByClassName("demo")[0].innerHTML=d.getDay();
// document.getElementsByClassName("demo")[1].innerHTML=d.getVarDate();
// document.getElementsByClassName("demo")[1].innerHTML=d.getUTCDay();
// document.getElementsByClassName("demo")[0].innerHTML=d.getTime();
// document.getElementsByClassName("demo")[0].innerHTML=Date.now();


// date set methods
let d=new Date();
document.getElementsByClassName("demo")[0].innerHTML=d;
d.setFullYear(2022,11,03);
document.getElementsByClassName("demo")[1].innerHTML=d;
d.setDate(14);
document.getElementsByClassName("demo")[1].innerHTML=d;
