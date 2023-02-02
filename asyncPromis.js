function myDisplayer(some) {
    document.getElementById("notification").innerHTML = some;
  }

let myPromise =new Promise(function(resolve, reject){
    let x= 0;
    if (x==0){
        resolve(x);
    }
    else{
        reject("error");
    }
});

myPromise.then(
    function(value){myDisplayer(value);},
    function(error){myDisplayer(error);}
);


// let p1= new Promise(function(resolve, reject){
//     console.log("promise is pending");
//     setTimeout(() => {
//         console.log("i am a promise and i am fullfilled");
//         resolve(true)
//         // reject(new Error ("iam an error"))
//     }, 2000)
// });


// let p2= new Promise(function(resolve, reject){
//     console.log("promise is pending");
//     setTimeout(() => {
//         console.log("i am a promise and i am frejected");
//         // resolve(true)
//         reject(new Error ("iam an error"))
//     }, 2000)
// });

// p1.then((value)=>{
//     console.log(value);
// })
// p2.catch((error)=>{
//     console.log("some error is occured in p2");
// })
// // 