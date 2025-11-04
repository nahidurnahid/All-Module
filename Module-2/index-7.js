const postsArray = ["A", "B", "C", "D", "B", "C", "D", "E", "D", "B", "E", "C"];

const postData = postsArray.reduce((table, post) => {
  if (table[post]) {
    table[post] = table[post] + 1;
  } else {
    table[post] = 1;
  }
  return table;
}, {});

// console.log(postData);

//output { A: 1, B: 3, C: 3, D: 3, E: 2 }

