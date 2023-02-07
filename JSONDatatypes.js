// let myJSON = fetch("JSONDatatypes.json").then(function(a){return a.json}).then(function(obj){ console.log(obj); }) ;
// let d=myText.then(b=>console.log(b));
// let e=d.catch(er=>{console.log("err");})
// let myObj = JSON.parse();
// let myObj=JSON.parse(myJSON);
// console.log(typeof(myText));
// console.log(myText);
// let a= '{"name":"lokesh", "BOD":"1238991"}';
// let obj =JSON.parse(a);
// console.log(typeof(a));
// console.log(typeof(obj));

// let b=JSON.stringify(obj);
// console.log(typeof(b));
// console.log(obj.name);
var a;
fetch("JSONDatatypes.json").then(function(r){
    return r.json();
}).then(function(obj){
    console.log(obj);
    a=obj;
    // console.log(a);
    console.log(a.friends[0]);
    document.getElementById("show").innerHTML=a.id;
    let arr=["lokeeee",9999];
    window.location="JSONDatatypes.json"+JSON.stringify(arr);
    console.log(arr);
})

