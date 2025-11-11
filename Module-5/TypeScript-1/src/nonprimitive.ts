// nonprimitive type --> array, object

//ts --> tuple

const list: string[] = ["milk", "sugar", "solt", "shampu"];

const numbers: number[] = [1, 2, 3, 4, 5, 11, 14];

let mixeArr: (string | number)[] = [
  "milk",
  1,
  "sugar",
  2,
  "solt",
  1,
  "shampu",
  5,
];

let copul: [string, number, number, string] = ["Nahid", 17, 10, "ssc"];

// reference type : object

const user1: {
  org: "Web Deploper";  // value => type : literal types
  firstname: string;
  midname?: string;  // optional Type
  lastname: string;
  age: number;
  id: number;
} = {
  org: "Web Deploper",
  firstname: "Nahidur",
  midname: "Rohman",
  lastname: "Nahid",
  age: 17,
  id: 111,
};

user1.id = 112;



const user2: {
  readonly org: "Web Deploper";  // access modifier
  firstname: string;
  midname?: string;  // optional Type
  lastname: string;
  age: number;
  id: number;
} = {
  org: "Web Deploper",
  firstname: "Nahidur",
  midname: "Rohman",
  lastname: "Nahid",
  age: 17,
  id: 111,
};

user2.id = 112;


console.log(user1);
console.log(user2);
