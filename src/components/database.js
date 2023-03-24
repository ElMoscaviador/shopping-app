const categories = [
  { name: "Sonics", id: "sonic" },
  { name: "Costumes", id: "costume" },
  { name: "Figures", id: "figure" },
];

const items = [
  {
    category: "sonic",
    sku: "sonic-10",
    name: "10th Sonic",
    price: 5,
  },
  {
    category: "sonic",
    sku: "sonic-11",
    name: "11th Sonic",
    price: 7,
  },
  {
    category: "sonic",
    sku: "sonic-13",
    name: "13th Sonic",
    price: 6.5,
  },
  {
    category: "costume",
    sku: "costume-9",
    name: "Nine",
    price: 42,
  },
  {
    category: "costume",
    sku: "costume-10",
    name: "Ten",
    price: 24,
  },
  {
    category: "costume",
    sku: "costume-11",
    name: "Eleven",
    price: 32,
  },
  {
    category: "costume",
    sku: "costume-12",
    name: "Twelve",
    price: 28,
  },
  {
    category: "costume",
    sku: "costume-13",
    name: "Thirteen",
    price: 34,
  },
  {
    category: "costume",
    sku: "costume-15",
    name: "Fifteen",
    price: 65,
  },
  {
    category: "figure",
    sku: "figure-dalek",
    name: "The Dalek",
    price: 25,
  },
  {
    category: "figure",
    sku: "figure-sontaran",
    name: "The Sontaran",
    price: 47,
  },
  {
    category: "figure",
    sku: "figure-weeping_angel",
    name: "The Weeping Angel",
    price: 68,
  },
  {
    category: "figure",
    sku: "figure-zygon",
    name: "The Zygon",
    price: 18,
  },
];

function fetchCategoryItems(category) {
  const categoryItems = items.filter((item) => item.category === category);
  return categoryItems;
}

export { items, categories, fetchCategoryItems };
