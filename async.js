// noraml Promise
// function myfunction(){
//     return Promise.resolve("hello");
// }
//  async it same as
// async function myfunction(){
//     return "hello";
// } 

// if we expect a error then use two functions 
// myfunction().then(
//     function(value){myDisplayer(value);},
//     function(error){myDisplayer(error);}
// );

// if you dont expect error then use one function in then
// myfunction().then(
//     function(value){myDisplayer(value);}
// );
// function myDisplayer(some) {
//     document.getElementById("notification").innerHTML = some;
// }

// async function myDisplayer(){
//     let myPromise=new Promise(function(resolve, reject){
//         setTimeout(() => {
//             resolve("i love you");
//         }, 3000);
//     })
//     document.getElementById("notification").innerHTML= await myPromise;
// }
// myDisplayer();
// console.log(myDisplayer());

function resolveAfter(){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve("resolved");
            console.log("wait for 2 seconds");
        }, 3000);
    });
}

async function asyncCall(){
    console.log("calling");
    const result= await resolveAfter();
    console.log("after results");
}

asyncCall();