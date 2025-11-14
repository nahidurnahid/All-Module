//Type Gurd

type Alpha = number | string;

const add = (num1: Alpha, num2: Alpha) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
};

console.log(add(2, 23)); //* output ---> [25]
 
// In Gurd

type User1 = {
  name: string;
};
type User2 = {
  id: number;
  name: string;
};

const getUserInfo = (user: User1 | User2) => {
  if ("id" in user) {
    console.log(`${user.name} er id holo ${user.id} `);
  } else {
    console.log(`${user.name}`);
  }
};

getUserInfo({ name: "Nahid", id: 111}); //* output ---> [Nahid er id holo 111]
