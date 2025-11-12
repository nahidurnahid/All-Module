// type Alies

type User = {
  org: "Web Deploper";
  name: {
    firstname: string;
    midname: string;
    lastname: string;
  };
  age: number;
  id: number;
}


const user1: User =  {
  org: "Web Deploper",
  name: {
    firstname: "Nahidur",
  midname: "Rohman",
  lastname: "Nahid",
  },
  age: 17,
  id: 111,
};


const user2: User = {
  org: "Web Deploper",
  name: {
    firstname: "Bunga",
  midname: "Gazi",
  lastname: "Zidan",
  },
  age: 19,
  id: 125,
};

const user3: User = {
  org: "Web Deploper",
  name: {
    firstname: "Ashik",
  midname: "Rohman",
  lastname: "Mir",
  },
  age: 25,
  id: 1511,
};

console.log(user1,user2,user3);   
// ---> output
/*{
  org: 'Web Deploper',
  name: { firstname: 'Nahidur', midname: 'Rohman', lastname: 'Nahid' },
  age: 17,
  id: 111
} {
  org: 'Web Deploper',
  name: { firstname: 'Bunga', midname: 'Gazi', lastname: 'Zidan' },
  age: 19,
  id: 125
} {
  org: 'Web Deploper',
  name: { firstname: 'Ashik', midname: 'Rohman', lastname: 'Mir' },
  age: 25,
  id: 1511
}
*/


type asd = true;
const asdf: asd = true ;

console.log(asdf)// ---> output true
 