// create a object
myNumbers ={};
console.log(myNumbers);
// make it iterable
myNumbers[Symbol.iterator]=function(){
    let n=0;
    done=false;
    return {
        next (){
            n=n+10;
            if(n==100){done=true}
            return { value:n, done:done};
        }
    };
};

let text="";
for(const num of myNumbers){
    text=text+num+"<br>";
};

document.getElementById("notification").innerHTML=text;
