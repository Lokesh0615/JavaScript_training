//  local storage
// let key=prompt("key u want to set");
// let value = prompt("enter valuve");

// localStorage.setItem(key, value);
// function sub(){
//     let k=document.getElementById("key").value;
//     let v=document.getElementById("value").value;
    
//     localStorage.setItem(k,v);
// }

// // localStorage.removeItem();
// // localstorge.key(0); returns the name of 0 position key
// console.log(localStorage.key(0));
// console.log(localStorage.getItem("red")); 
// // localStorage.removeItem("red");
// // clear methods delets everything in local storage
// // localStorage.clear();
// console.log(window.localStorage.length);

// let arr =["lokesh", "kk",4];
// let brr =["lkeo",9889];
// // let c=[arr, brr];
// // let c=c.from(arr, brr);
// let c=arr.concat(brr);
// console.log(c);
// console.log(Array.isArray(arr));


// session storage
let k=document.getElementById("key");
let v = document.getElementById("value");
let arr=["lokesh","N", 22];
sessionStorage.setItem("ar",arr);
function sub(){
    window.sessionStorage.setItem(k.value, v.value);
}
let i=window.sessionStorage.getItem("ar");
console.log(typeof(i));

