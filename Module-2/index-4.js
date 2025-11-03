// const arr = [2, 4, 1, 6, 3, 8];
// const somearr = arr.some((item) => item % 2 !== 0);
// console.log(somearr);

// const corr = [1, 2, 6];
// const cole = [4, 5, 3];

// const check = corr.some((itme) => cole.includes(itme));
// console.log(check);

// const arr = Array.from({ length: 5 }).fill( );
// const arr = Array.from({ length: 5 }, (_, i) => i);
// const arr = Array.from([2, 5, 7], (value, i) => value * value);
// console.log(arr);

const reng = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step
  );

console.log(reng(1, 501, 2));
