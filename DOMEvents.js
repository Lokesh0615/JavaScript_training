// document.getElementById("b1").onclick=changeColor;

document.getElementById("b1").onmouseover=changeColor;
function changeColor(){
    document.getElementById("b1").style.backgroundColor="red";
    document.getElementById("b1").style.backgroundColor="none";

 }
 document.getElementById("b1").onmouseleave=changeColor1;

 function changeColor1(){
    // document.getElementById("b1").style.backgroundColor="red";
    document.getElementById("b1").style.backgroundColor="white";

 }