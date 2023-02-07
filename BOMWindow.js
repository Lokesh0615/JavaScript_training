
// document.getElementById("demo").innerHTML="browser inner window width: "+window.innerWidth +"px<br>"+"browser inner height is:" +window.innerHeight+"px";

// let h=window.innerHeight;
// let w= window.innerWidth;
// console.log(h+" "+w);
// let h1=window.outerHeight;
// let w1=window.outerWidth;
// console.log(h1, w1);

// let myWIndow;
// function handlewindow(){
//     myWIndow= window.open("","_blanck", "width=200px, height=200px, top=100px, left=400px")
// }
// function resizeWindow(){
//     // myWIndow.resizeTo(400, 400);
//     // myWIndow.resizeBy(400,300)
//     myWIndow.moveBy(100,100)
//     myWIndow.focus();
// }

// function closewindow(){
//     myWIndow.close();
// }

// function myAlert(){
//     // window.alert("welcome");
//     // let action=confirm("do you want to delete");
//     let action=prompt("enter name");
//     console.log(action);
//     if(action==true){
//         alert("record deleted succssefully");
//     }else{
//         alert("record not deleted");
//     }

// }

// function myPrint(){
//     window.print();
// }

// function myFocus(){
//     window.document.getElementById("title").focus();
// }

function getStyle(){
    let m=document.getElementById("mydiv");
    let prop=window.getComputedStyle(m,null).getPropertyValue("width")
    document.getElementById("ppp").innerHTML=prop;
}