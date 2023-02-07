let work=new Worker("APIWorker1.js")
let bg = document.getElementById("bgc");
let cal = document.getElementById("cal");

cal.addEventListener("click", (Event) => {

   
     work.postMessage("hello worker");

});
work.onmessage =function(message){
    // console.log(message);
    // alert(`the final sum is ${message.data}`);
    console.log(message);

}

bg.addEventListener("click", (event) => {
    // let co=0;
    if (document.querySelector("body").style.backgroundColor !== "red"){
        document.querySelector("body").style.backgroundColor = "red";
        
    }
    else{
        document.querySelector("body").style.backgroundColor="white";
    }
    
});

