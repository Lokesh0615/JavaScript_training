

function valid(){

    let text;
    // let a=document.getElementById("i1");
    // if(!a.checkValidity()){
    //     a.style.border="1.5px solid red";
    // }
    // console.log(a.checkValidity());
    
    let n=document.getElementById("n");
    if(n.validity.rangeOverFlow){
        text="value is out of range";
    }
    else {
        text="input is ok";
    }
    document.getElementById("inn").innerHTML=text;
}
