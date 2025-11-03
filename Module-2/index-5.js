const pleyers = [
  { name: "Jamal Bhuyan", score: 88 },
  { name: "Shekh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Topu Barman", score: 91 },
  { name: "Sohel Rana", score: 72 },
];

const roApiData = pleyers
  .sort((a, b) => b.score - a.score)
  .slice(0, 1)
  .map((item) => {
    return { Name: item.name };
  });

console.log(roApiData);
