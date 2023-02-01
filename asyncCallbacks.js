
// function myFirst(){
//     myDisplayer("hello");
// }
// function mySecond(){
//     myDisplayer("goodbye");
// }

// mySecond();
// myFirst();

// sequense control
// function myDisplayer(text){
//     document.getElementById("notification").innerHTML=text;
// }
// function myCalculator(num1, num2){
//     let sum=num1+num2;
//     return sum;
// }
// let result = myCalculator(5,5);
// myDisplayer(result);

// function myDisplayer(text){
//     document.getElementById("notification").innerHTML=text;
// }
// function myCalculator(num1, num2){
//     let sum=num1+num2;
//     myDisplayer(sum);
// }
// myCalculator(2,3)


// function myDisplayer(text){
//     document.getElementById("notification").innerHTML=text;
// }
// function myCalculator(num1, num2, callback){
//     let sum= num1+num2;
//     callback(sum);
// }
// myCalculator(2,7,myDisplayer);

// create a array
const myNumbers =[4,1,-20,5,-2];

// call removeNeg with a callback
const posNumbers= removeNeg(myNumbers, (x)=> x >=0);


