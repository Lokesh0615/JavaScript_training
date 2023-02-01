// setTimeout
// setTimeout(myfunction, 3000);
// function myfunction(){
//     document.getElementById("notification").innerHTML="i love you";
// }

// setTimeout(function(){myfunction("illoovveee");},3000);
// function myfunction(value){
//     document.getElementById("notification").innerHTML=value;
// }

// setInterval
setInterval(myfunction, 1000);
function myfunction(){
    let d= new Date();
    document.getElementById("notification").innerHTML=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
}
