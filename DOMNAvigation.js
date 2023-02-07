// let a=document.getElementById("b1");
// console.log(a.nodeValue);
// console.log(a.nodeName);

// let c=document.createTextNode("hellooooooooooo");
// let d=document.getElementById("bt1");
// // let b=document.getElementById("buttons").appendChild(c,d);
// // console.log(b);

// document.getElementById("bt2").childNodes[0].nodeValue;
// console.log(d);

let init=function (){
let t1=document.getElementById("target1");
let t2=document.getElementById("target2");

div1=document.querySelector(".content");
// to move
// t1.appendChild(div1);
// to  shallowcopy or clone
// t1.appendChild(div1.cloneNode());
// to deep clone
t1.appendChild(div1.cloneNode(true));


}

document.addEventListener("DOMContentLoaded", init);