//* privet asscess only main class
//* protected asscess main class & sub class 

class BankAccount {
  userName: string;
   userID: number;
  private userBalanc: number;

  constructor(userName: string, usarID: number, userBalanc: number) {
    this.userName = userName;
    this.userID = usarID;
    this.userBalanc = userBalanc;
  }
  
  add(n: number) {
    this.userBalanc += n;
  }
}

const myBalanc = new BankAccount("Nahid", 111, 10000);

myBalanc.userID = 159;
myBalanc.add(50);
myBalanc.userName = "Nisi";

console.log(myBalanc);
