// let time;
// function displayTime(){
//     let d= new Date();
//     document.getElementById("date").innerHTML=d.toLocaleTimeString();
// }
// displayTime();

// function startTime(){
//     time=setInterval(displayTime,1000);
// };
// function stopTime(){
//     clearInterval(time);
// }


var a=setTimeout(enable, 2000);
function enable(){
    let b=document.getElementById("myBtn");
    b.removeAttribute("disabled");
    b.style.backgroundColor="green";
}
// let c=document.getElementById("clearBtn");
// c.addEventListener("click",clear1);
function clear1(){
    clearTimeout(a);
}