// creating node
// const para=document.createElement("p");
// const node = document.createTextNode("hello text node");
// para.appendChild(node);

// // const a=document.getElementsByClassName("demo")[0];
// // a.appendChild(para);

// // let para=document.createElement("p");
// // let node=document.createTextNode("hello insert");
// // para.appendChild(node);
// // let a=document.getElementsByClassName("demo")[0];

// // // a.appendChild(para);
// // let b=document.getElementById("ok");
// // a.insertBefore(b,para);

// // remove  a element, so browsers dose not support remove(), so use removeChild()
// let el=document.getElementById("demo");
// // el.remove();
// let a=document.getElementById("ok");
// // el.parentNode.removeChild(a);

// // replcaechild()
// el.parentNode.replaceChild(para, a);

// let n1=document.createElement("div.nodess");
// let para=document.createElement("p.paragraph").document.createTextNode("hellooooooooo");
// let text=document.createTextNode("1st paragrap");
// // para.appendChild(text);
// n1.appendChild(para);
// let b=document.getElementsByTagName("body");
// b.appendChild(n1)

let d=document.createElement("div");
d.classList.add("neee");
d.style.margin="30px";
let text=document.createTextNode("this is a dynamic text");
d.appendChild(text);
// let i=document.createElement("img").setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxki06T5ldOg2XEX7aQdtRxi_wzVX-AorObA&usqp=CAU");
// d.appendChild(i);

// adding div to html page
// let target=document.getElementById("target1");
let conainer=document.getElementsByClassName("content")[0];
let b=document.querySelector(".content h2")
// target.appendChild(d);
// conainer.insertBefore(d, b);
conainer.insertAdjacentElement("beforeend",d);

// d.createElement("img").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxki06T5ldOg2XEX7aQdtRxi_wzVX-AorObA&usqp=CAU";

// document.getElementById("target1").appendChild(d);


