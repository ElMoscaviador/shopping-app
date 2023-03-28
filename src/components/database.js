const categories = [
  { name: "Sonics", id: "sonics" },
  { name: "Costumes", id: "costumes" },
  { name: "Figures", id: "figures" },
];

const items = [
  {
    category: "sonics",
    description: `Reverse the polarity with the Tenth Doctor's sonic screwdriver.`,
    sku: "sonic-10",
    name: { short: "10th Sonic", full: `The Tenth Doctor's Sonic` },
    price: 5,
  },
  {
    category: "sonics",
    description: `Never leave home without the Eleventh Doctor's sonic screwdriver - or a fez!`,
    sku: "sonic-11",
    name: { short: "11th Sonic", full: `The Eleventh Doctor's Sonic` },
    price: 7,
  },
  {
    category: "sonics",
    description:
      "Never get stuck in the time vortex again with this handcrafted Thirteenth Doctor sonic screwdriver.",
    sku: "sonic-13",
    name: { short: "13th Sonic", full: `The Thirteenth Doctor's Sonic` },
    price: 6.5,
  },
  {
    category: "costumes",
    description: `This fantastic leather jacket is all the Ninth Doctor needed to usher in a new era of Doctor Who. Get yours now!`,
    sku: "costume-9",
    name: { short: "Nine", full: `The Ninth Doctor` },
    price: 42,
  },
  {
    category: "costumes",
    description: `Allons-y, Alonso! Get the iconic Ten Doctor's costume and defend Earth against mischievous aliens.`,
    sku: "costume-10",
    name: { short: "Ten", full: `The Tenth Doctor` },
    price: 24,
  },
  {
    category: "costumes",
    description:
      "Close the cracks in the universe with this high quality Eleventh Doctor costume. Fez not included.",
    sku: "costume-11",
    name: { short: "Eleven", full: `The Eleventh Doctor` },
    price: 32,
  },
  {
    category: "costumes",
    description: `This beautiful Twelfth Doctor costume will come in handy the next time you'll need to hit a wall for billions of years.`,
    sku: "costume-12",
    name: { short: "Twelve", full: `The Twelth Doctor` },
    price: 28,
  },
  {
    category: "costumes",
    description:
      "Travel with your fam and escape the Flux with this brilliant Thirteenth Doctor costume.",
    sku: "costume-13",
    name: { short: "Thirteen", full: `The Thirteenth Doctor` },
    price: 34,
  },
  {
    category: "costumes",
    description: `Don't regenerate into David Tennant with this handcrafted Fifteenth Doctor costume.`,
    sku: "costume-15",
    name: { short: "Fifteen", full: `The Fifteenth Doctor` },
    price: 65,
  },
  {
    category: "figures",
    description:
      "Exterminate your boredom by playing with this high end Dalek action figure.",
    sku: "figure-dalek",
    name: { short: "Dalek", full: `The Dalek` },
    price: 25,
  },
  {
    category: "figures",
    description:
      "Become a potato-headed warrior yourself & conquer the universe with this handcrafted Sontaran action figure.",
    sku: "figure-sontaran",
    name: { short: "Sontaran", full: `The Sontaran` },
    price: 47,
  },
  {
    category: "figures",
    description: `Just don't blink & you'll be fine having this weeping angel figure in your house. We hope.`,
    sku: "figure-weeping_angel",
    name: { short: "Weeping Angel", full: `The Weeping Angel` },
    price: 68,
  },
  {
    category: "figures",
    description: "Take any form you like with this handcrafted Zygon figure.",
    sku: "figure-zygon",
    name: { short: "Zygon", full: `The Zygon` },
    price: 18,
  },
];

function fetchCategoryItems(category) {
  const categoryItems = items.filter((item) => item.category === category);
  return categoryItems;
}

function fetchSpecificItem(sku) {
  const specificItem = items.find((item) => item.sku === sku);
  return specificItem;
}

export { items, categories, fetchCategoryItems, fetchSpecificItem };
