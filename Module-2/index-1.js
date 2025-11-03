// obj = {
//   num: "Nahid",
//   age: 17,
//   id: 111,
//   "full Name": "MD Nahid"
// };

// console.log(obj);
// console.log(obj["full Name"]);

// const obj = {};

// obj.num = {"Anabia": "Mojnu"};
// obj.id = {111: 112};
// obj.age = {35: 22};
// obj["full Name"] = {Md: "Habib"};
// obj[true] = {Abu:"Hamja"}

// console.log(obj);
// console.log(obj.id[111]);
// console.log(obj.true);

const obj1 = { nume: "Simu" };
const obj2 = { nume: "Libi" };

const map = new Map();

map.set("student", "Sobuj");
map.set(obj1, { name: "Alif" });

console.log(map);
console.log(map.size);
map.forEach((key,value) => console.log(`key: ${key}, value: ${value}`));
console.log(map.entries());