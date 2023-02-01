
const price = new Map([["apple",500],["orange",200]]);
console.log(price);

price.set("banaa",100);
price.set("oka",100);
console.log(price);

console.log(price.get("banaa"));
console.log(price.get("apple"));

console.log(price.keys());
console.log(price.values());
price.delete("oka");
console.log(price);

console.log(price.entries());