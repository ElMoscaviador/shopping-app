const categories = [
  { name: "Sonics", id: "sonic" },
  { name: "Costumes", id: "costume" },
  { name: "Figures", id: "figure" },
];

const items = [
  {
    category: "sonic",
    description: `Reverse the polarity with the Tenth Doctor's sonic screwdriver.`,
    sku: "sonic-10",
    name: { short: "10th Sonic", full: `The Tenth Doctor's Sonic` },
    price: 5,
  },
  {
    category: "sonic",
    description: `Never leave home without the Eleventh Doctor's sonic screwdriver - or a fez!`,
    sku: "sonic-11",
    name: { short: "11th Sonic", full: `The Eleventh Doctor's Sonic` },
    price: 7,
  },
  {
    category: "sonic",
    description:
      "Never get stuck in the time vortex again with this handcrafted Thirteenth Doctor sonic screwdriver.",
    sku: "sonic-13",
    name: { short: "13th Sonic", full: `The Thirteenth Doctor's Sonic` },
    price: 6.5,
  },
  {
    category: "costume",
    description:
      "This fantastic leather jacket is all the Ninth Doctor needed to usher in a new era of Doctor Who. Get yours now!",
    sku: "costume-9",
    name: { short: "Nine", full: `The Ninth Doctor` },
    price: 42,
  },
  {
    category: "costume",
    description: `Allons-y, Alonso! Get the iconic Ten Doctor's costume and defend Earth against mischievous aliens.`,
    sku: "costume-10",
    name: { short: "Ten", full: `The Tenth Doctor` },
    price: 24,
  },
  {
    category: "costume",
    description:
      "Close the cracks in the universe with this high quality Eleventh Doctor costume. Fez not included.",
    sku: "costume-11",
    name: { short: "Eleven", full: `The Eleventh Doctor` },
    price: 32,
  },
  {
    category: "costume",
    description: `This beautiful Twelfth Doctor costume will come in handy the next time you'll need to hit a wall for billions of years.`,
    sku: "costume-12",
    name: { short: "Twelve", full: `The Twelth Doctor` },
    price: 28,
  },
  {
    category: "costume",
    description:
      "Travel with your fam and save the universe with this brilliant Thirteenth Doctor costume.",
    sku: "costume-13",
    name: { short: "Thirteen", full: `The Thirteenth Doctor` },
    price: 34,
  },
  {
    category: "costume",
    description: `Don't regenerate into David Tennant with this handcrafted Fifteenth Doctor costume.`,
    sku: "costume-15",
    name: { short: "Fifteen", full: `The Fifteenth Doctor` },
    price: 65,
  },
  {
    category: "figure",
    description:
      "Exterminate your boredom by playing with this high end Dalek action figure.",
    sku: "figure-dalek",
    name: { short: "Dalek", full: `The Dalek` },
    price: 25,
  },
  {
    category: "figure",
    description:
      "Become a potato-headed warrior yourself & conquer the universe with this handcrafted Sontaran action figure.",
    sku: "figure-sontaran",
    name: { short: "Sontaran", full: `The Sontaran` },
    price: 47,
  },
  {
    category: "figure",
    description: `Just don't blink & you'll be fine having this weeping angel figure in your house. We hope.`,
    sku: "figure-weeping_angel",
    name: { short: "Weeping Angel", full: `The Weeping Angel` },
    price: 68,
  },
  {
    category: "figure",
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
