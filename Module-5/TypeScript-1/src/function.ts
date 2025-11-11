// Function
// arow, normal

function addNormal(num1: number, num2: number): number {
  return num1 + num2;
}

const addArow = (num1: number, num2: number): number => num1 + num2;

addNormal(2, 2);
addArow(2, 5);

// object --> function

const poorUser = {
  name: "nahid",
  blance: 10,
  addBalance(value: number): number {
    const totalBalance = this.blance + value;
    return totalBalance;
  },
};

console.log(poorUser.addBalance(50));

const arr: number[] = [8, 6, 2, 7, 3];

const squArray = arr.map((elem: number): number => elem * elem);
console.log(squArray);
