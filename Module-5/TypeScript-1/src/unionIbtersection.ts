type userRole = "admin" | "user";

const userRol = (role: userRole) => {
  if (role === "admin") {
    return "admmin dhsbot";
  } else if (role === "user") {
    return "user deshbot";
  } else {
    return "gest deshbot";
  }
};

console.log(userRol("admin")); // output --> admmin dhsbot //

//intersction

type empoly = {
  name: string;
  id: number;
};

type menager = {
  age: number;
  dep: string;
};

type menage = {
  age: number;
  sub: string;
  
};

type empolymenager = empoly & menage;

const Info: empolymenager = {
  name: "Nahid",
  id: 111,
  age: 17,
  sub: "bgl",
};

console.log(Info);

