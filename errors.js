// try{
//     // alert is there
//     adddlert("welcome guest");
// }
// catch(err){
//     document.getElementsByClassName("demo")[0].innerHTML=err.message;
// }


// function myfunction() {
//     const message=document.getElementById("notification");
//     message.innerHTML="";
//     let x= document.getElementById("test").value;
//     try {
//         if (x.trim()=="") {
//             throw "empty";
//         }
//         if (isNaN(x)) {
//             throw "not a number";
//         }
//         // x=Number(x);
//         if(x<5){
//             throw "too low";
//         }
//         if(x>10){
//             throw "too high";
//         }
//     } catch (err) {
//         message.innerHTML="input is "+ err;
//     }
//     finally{
//         document.getElementsByClassName("demo")[0].value="";
//     }
// }

// range error
// let num=1;
// try {
//     num.toPrecision(500);
// } catch (err) {
//     document.getElementsByClassName("demo")[0].innerHeight=err.message;
//     document.getElementById("notification").innerHTML=err.name;
//     // document.getElementById("notification").innerHTML=err.message;
// }

// reference error
// let x=5;
// try {
//     x=y+3;
// } catch (err) {
//     document.getElementById("notification").innerHTML=err.name;
//     // document.getElementById("notification").innerHTML=err.message;
// }

// syntax error
// try {
//     eval("alert('hello)");
// } catch (err) {
//     document.getElementById("notification").innerHTML=err.name;
//     document.getElementById("notification").innerHTML=err.message;

// }

// Type error
// let num=10;
// try {
//    num.toUpperCase(); 
// } catch (error) {
//     document.getElementById("notification").innerHTML=error.name;
//     document.getElementsByClassName("demo")[0].innerHTML=error.message;
// }

// uri error
try {
    decodeURI("%^%%^&");
} catch (err) {
    document.getElementById("notification").innerHTML=err.name;
    document.getElementById("notification").innerHTML=err.message;
}

