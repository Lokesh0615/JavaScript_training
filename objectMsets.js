
const names =new Set(["a","b","lokesh","oka"]);
names.add("lokkk");
names.add("ksdjksjdjk");
names.add("kaj");

console.log(names);

names.delete("kaj");
// names.delete("")

console.log(names);
console.log(names.has("a"));

console.log(names.keys());
console.log(names.values());
console.log(names.entries());
console.log(names.size);
