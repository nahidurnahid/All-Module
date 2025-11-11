const friends = ["Topu", "Nipu", "Dipu"];

const friendsSurcal = ["Topu", "Nipu", "Dipu", "Abir", "Ismail"];

 const friendsTime = ["Jumon", "Syam", "Rafi", "Sibu"];

friends.push(...friendsSurcal);
friends.push(...friendsTime)
console.log(friends);



const user = {name: "Nahid", Phone: "01712808570"};

const otherInfo = {hobby: "outint", color:"green"};

const userInfo = {...user, ...otherInfo};

console.log(userInfo);

//rest operator 

const sendInvite = (...friends: string[]) => {

    friends.forEach((friend: string) => console.log(`Sand invitation to ${friend}`))
};

sendInvite("Jumon", "Syam", "Rafi", "Sibu","Nipu", "Dipu")