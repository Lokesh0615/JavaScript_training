// creating node
const para=document.createElement("p");
const node = document.createTextNode("hello text node");
para.appendChild(node);

// const a=document.getElementsByClassName("demo")[0];
// a.appendChild(para);

// let para=document.createElement("p");
// let node=document.createTextNode("hello insert");
// para.appendChild(node);
// let a=document.getElementsByClassName("demo")[0];

// // a.appendChild(para);
// let b=document.getElementById("ok");
// a.insertBefore(b,para);

// remove  a element, so browsers dose not support remove(), so use removeChild()
let el=document.getElementById("demo");
// el.remove();
let a=document.getElementById("ok");
// el.parentNode.removeChild(a);

// replcaechild()
el.parentNode.replaceChild(para, a);