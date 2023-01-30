// string lenght

// let ename="lokesh";
// console.log(ename.length);

// console.log(ename.slice(3));
// console.log(ename.slice(2, 6));
// console.log(ename.slice(-3));
// console.log(ename.slice(-5,-3));

// console.log(ename.substr(2,3));
// console.log(ename.substr(-6,2)); substr allows negative index, (starting point, lentgh)

// console.log(ename.substring(2,4));
// console.log(ename.substring(-5,-1)); no negative index in substring (starting point, end point)

// replace
// let text="Please visit Microsoft and Microsoft!";
// console.log(text.replace("Microsoft", "w333schools"));
// console.log(text.replace(/microsoft/i ,"3333333")); replace without capitol or samll 
// console.log(text.replace(/Microsoft/g ,"3")); replace all

// replaceAll
// console.log(text.replaceAll("i", "A"));

// toUpperCase
// let text1="HELLO world";
// console.log(text1.toUpperCase());

// toLowerCase
// console.log(text1.toLowerCase());

// concat
// let a="lokesh";
// let b="loky";
// console.log(a.concat(" " +b));
// console.log("hello".concat(" " + a));

// trim is use to remove the whitespace at satrt and end not in centre
// let a="    hello world  ";
// console.log(a.trim());

// console.log(a.trimStart()); "removes whitesapce at the starting of string"
// console.log(a.trimEnd()); "removes whitesapce after the string"


// padStart and padEnd, its a string, if u want to add padding for number ,convert to string
// let a="L";
// console.log(a.padStart(4,"k"));
// console.log(a.padEnd(4, "k"));

// charAt and charCodeAt(it displays the askii value)
// let a="lokesh hi";
// console.log(a.charAt(3));
// for (let i = 0; i < a.length; i++) {
//     console.log(a.charAt(i), " " + a.charCodeAt(i));

// }

// split
// let a= "lokesh kii";
// console.log(a.split(" "));

