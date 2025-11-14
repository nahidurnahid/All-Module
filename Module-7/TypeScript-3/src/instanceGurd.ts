// instance Gurd

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getSleep(n: number) {
    console.log(`${this.name} sleep everyday ${n} hour.`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }
  Study(n: number) {
    console.log(`${this.name} study everyday ${n} hour.`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }
  takeClass(n: number) {
    console.log(`${this.name} take class everyday ${n} hour.`);
  }
}



const getUserInfo = (user: Person) =>{
   if(user instanceof Student){
    user.Study(4);
   } else if(user instanceof Teacher){
    user.takeClass(5);
   } else {
    user.getSleep(8)
   }
};






//const user1 = new Student("Mahin");
 const user1 = new Student("Nahid");
const Teacher1 = new Teacher("super Teacher");
const Person1 = new Person("Abir");

getUserInfo(user1)
getUserInfo(Person1)

// Teacher1.getSleep(8);
// Teacher1.takeClass(6);

 // console.log(user1);
// user1.Study(4);
// user1.getSleep(6);
