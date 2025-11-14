// getter Setter

class BankAccount {
  userName: string;
   userID: number;
  private userBalanc: number;

  constructor(userName: string, usarID: number, userBalanc: number) {
    this.userName = userName;
    this.userID = usarID;
    this.userBalanc = userBalanc;
  }
  
  set add(n: number) {
    this.userBalanc += n;
  }

  get sub() {
    return this.userBalanc
  }
}

const myBalanc = new BankAccount("Nahid", 111, 10000);

// myBalanc.userID = 159;
//myBalanc.add(50);
//myBalanc.sub(5000);
// myBalanc.userName = "Nisi";

myBalanc.add = 500
myBalanc.sub 


console.log(myBalanc);