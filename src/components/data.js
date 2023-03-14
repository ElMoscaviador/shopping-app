import thumbnail from "../assets/thumbnail-picture.png";
import picture1 from "../assets/picture1.png";
import picture2 from "../assets/picture2.png";

const categories = [
  { name: "Category 1", id: "cat-1" },
  { name: "Category 2", id: "cat-2" },
  { name: "Category 3", id: "cat-3" },
  { name: "Category 4", id: "cat-4" },
];

const items = [
  {
    category: "cat-1",
    sku: 1,
    name: "name 1",
    price: 5.4,
    img: { thumbnail: thumbnail, page: [picture1, picture2] },
  },
  {
    img: { thumbnail: thumbnail, page: [picture1, picture2] },
    name: "name 2",
    price: 3.7,
    sku: 2,
    category: "cat-1",
  },
  {
    img: { thumbnail: thumbnail, page: [picture1, picture2] },
    name: "name 3",
    price: 17.8,
    sku: 3,
    category: "cat-1",
  },
  {
    img: { thumbnail: thumbnail, page: [picture1, picture2] },
    name: "name 4",
    price: 5.8,
    sku: 4,
    category: "cat-1",
  },
  {
    img: { thumbnail: thumbnail, page: [picture1, picture2] },
    name: "name 5",
    price: 5.4,
    sku: 5,
    category: "cat-2",
  },
  {
    img: { thumbnail: thumbnail, page: [picture1, picture2] },
    name: "name 6",
    price: 3.7,
    sku: 6,
    category: "cat-2",
  },
  {
    img: { thumbnail: thumbnail, page: [picture1, picture2] },
    name: "name 7",
    price: 17.8,
    sku: 7,
    category: "cat-2",
  },
  {
    img: { thumbnail: thumbnail, page: [picture1, picture2] },
    name: "name 8",
    price: 5.8,
    sku: 8,
    category: "cat-2",
  },
  {
    img: { thumbnail: thumbnail, page: [picture1, picture2] },
    name: "name 9",
    price: 15.8,
    sku: 9,
    category: "cat-2",
  },
  {
    img: { thumbnail: thumbnail, page: [picture1, picture2] },
    name: "name 10",
    price: 50.8,
    sku: 10,
    category: "cat-2",
  },
  {
    img: { thumbnail: thumbnail, page: [picture1, picture2] },
    name: "name 11",
    price: 5.4,
    sku: 11,
    category: "cat-3",
  },
  {
    img: { thumbnail: thumbnail, page: [picture1, picture2] },
    name: "name 12",
    price: 3.7,
    sku: 12,
    category: "cat-3",
  },
  {
    img: { thumbnail: thumbnail, page: [picture1, picture2] },
    name: "name 13",
    price: 17.8,
    sku: 13,
    category: "cat-3",
  },
  {
    img: { thumbnail: thumbnail, page: [picture1, picture2] },
    name: "name 14",
    price: 5.4,
    sku: 14,
    category: "cat-4",
  },
  {
    img: { thumbnail: thumbnail, page: [picture1, picture2] },
    name: "name 15",
    price: 3.7,
    sku: 15,
    category: "cat-4",
  },
  {
    img: { thumbnail: thumbnail, page: [picture1, picture2] },
    name: "name 16",
    price: 17.8,
    sku: 16,
    category: "cat-4",
  },
  {
    img: { thumbnail: thumbnail, page: [picture1, picture2] },
    name: "name 17",
    price: 5.8,
    sku: 17,
    category: "cat-4",
  },
  {
    img: { thumbnail: thumbnail, page: [picture1, picture2] },
    name: "name 18",
    price: 0.8,
    sku: 18,
    category: "cat-4",
  },
];

const fetchCategoriesData = () => categories;

const fetchCompleteItemsData = (property, query) => {
  const searchingForCategoryItems = !!(property === "category");
  const queriedData = searchingForCategoryItems
    ? items.filter((item) => item.category === query)
    : items.find((item) => item[property] === query);
  return queriedData;
};

const fetchSingleItemsProperty = (completeData, property) => {
  const isCollection = !!Array.isArray(completeData);
  const queriedProperty = isCollection
    ? completeData.map((data) => data[property])
    : [completeData[property]];

  return queriedProperty;
};

const fetchItems = (property, query, onlySingleProperty) => {
  const completeData = fetchCompleteItemsData(property, query);
  const singleProperty = onlySingleProperty
    ? fetchSingleItemsProperty(completeData, onlySingleProperty)
    : [];
  return onlySingleProperty ? singleProperty : completeData;
};

export { fetchItems, fetchCategoriesData };

export {items, categories}