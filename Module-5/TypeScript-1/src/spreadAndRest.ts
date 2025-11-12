const friends = ["Topu", "Nipu", "Dipu"];

const friendsSurcal = ["Topu", "Nipu", "Dipu", "Abir", "Ismail"];

const friendsTime = ["Jumon", "Syam", "Rafi", "Sibu"];

friends.push(...friendsSurcal);
friends.push(...friendsTime);
console.log(friends);
// --> output -->
// [
//   'Topu',  'Nipu',
//   'Dipu',  'Topu',
//   'Nipu',  'Dipu',
//   'Abir',  'Ismail',
//   'Jumon', 'Syam',
//   'Rafi',  'Sibu'
// ]

const user = { name: "Nahid", Phone: "01712808570" };

const otherInfo = { hobby: "outint", color: "green" };

const userInfo = { ...user, ...otherInfo };

console.log(userInfo);
//output -->
/*
{
  name: 'Nahid',
  Phone: '01712808570',
  hobby: 'outint',
  color: 'green'
}
*/

//rest operator

const sendInvite = (...friends: string[]) => {
  friends.forEach((friend: string) =>
    console.log(`Sand invitation to ${friend}`)
  );
};

sendInvite("Jumon", "Syam", "Rafi", "Sibu", "Nipu", "Dipu");

// output --->
/*
Sand invitation to Jumon
Sand invitation to Syam
Sand invitation to Rafi
Sand invitation to Sibu
Sand invitation to Nipu
Sand invitation to Dipu
*/
