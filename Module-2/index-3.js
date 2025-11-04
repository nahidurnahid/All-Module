const rawApiData = [
  {
    id: 1,
    product_name: "Wireless Mouse",
    category: "Electronics",
    price: 850,
    rating: 4.5,
    stock: 35,
  },
  {
    id: 2,
    product_name: "Bluetooth Headphones",
    category: "Electronics",
    price: 1800,
    rating: 4.7,
    stock: 20,
  },
  {
    id: 3,
    product_name: "Running Shoes",
    category: "Fashion",
    price: 2500,
    rating: 4.3,
    stock: 15,
  },
  {
    id: 4,
    product_name: "Water Bottle",
    category: "Home & Kitchen",
    price: 300,
    rating: 4.1,
    stock: 50,
  },
  {
    id: 5,
    product_name: "Smart Watch",
    category: "Electronics",
    price: 3200,
    rating: 4.8,
    stock: 10,
  },
  {
    id: 6,
    product_name: "Backpack",
    category: "Accessories",
    price: 1200,
    rating: 4.4,
    stock: 25,
  },
  {
    id: 7,
    product_name: "LED Desk Lamp",
    category: "Home & Office",
    price: 950,
    rating: 4.2,
    stock: 30,
  },
  {
    id: 8,
    product_name: "Gaming Keyboard",
    category: "Electronics",
    price: 2200,
    rating: 4.6,
    stock: 18,
  },
  {
    id: 9,
    product_name: "Cotton T-Shirt",
    category: "Fashion",
    price: 750,
    rating: 4.0,
    stock: 40,
  },
  {
    id: 10,
    product_name: "Portable Charger",
    category: "Electronics",
    price: 1500,
    rating: 4.5,
    stock: 22,
  },
];

//? Output => [{name: "Phone"}, {name: "Smart Watch"}]

//* Process
//TODO Filter => Electroices
//TODO Sort by => Rating
//TODO Slice => first 3 (top 3)
//TODO Map => transfrom object shape to {name: "Name"}

//const allData = rawApiData
  // .filter((item) => item.category === "Electronics")
  // .sort((x, y) => y.price - x.price)
  // .slice((0, 3))
  // .map((item) => {
  //   return {
  //     Name: item.product_name
  //   };
  // });

//console.log(allData); ==>> //output[ { Name: 'Portable Charger' }, { Name: 'Wireless Mouse' } ]


const allData = rawApiData
  .filter((item) => item.category === "Electronics")
  .sort((x, y) => y.price - x.price) 
  .slice(0, 4)
  .map((item) => {
    return { Name: item.product_name };
  });

console.log(allData); 
//output
/*[
  { Name: 'Smart Watch' },
  { Name: 'Gaming Keyboard' },
  { Name: 'Bluetooth Headphones' },
  { Name: 'Portable Charger' }
]*/
