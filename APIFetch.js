// console.log("hello");
// fetch("APIFetch.txt").then(x => x.text()).then(y => document.getElementById("ft").innerHTML=y);
// it is same as
getTxs("APIFetch.txt")
async function getTxs(file){
    let x= await fetch(file);
    let y =await x.text()
    document.getElementById("ft").innerHTML=y;

}

let a= ()=>{
    console.log("hello");
};
