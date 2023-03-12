import thumbnail from "../../assets/thumbnail-picture.png";
import picture1 from "../../assets/picture1.png";
import picture2 from "../../assets/picture2.png";

const data = {
  categoriesData: [
    { name: "Category 1", id: "cat-1" },
    { name: "Category 2", id: "cat-2" },
    { name: "Category 3", id: "cat-3" },
    { name: "Category 4", id: "cat-4" },
  ],
  itemsData: {
    "cat-1": [
      {
        img: { thumbnail: thumbnail, page: [picture1, picture2] },
        name: "name 1",
        price: "5.40",
      },
      {
        img: { thumbnail: thumbnail, page: [picture1, picture2] },
        name: "name 2",
        price: "3.70",
      },
      {
        img: { thumbnail: thumbnail, page: [picture1, picture2] },
        name: "name 3",
        price: "17.80",
      },
      {
        img: { thumbnail: thumbnail, page: [picture1, picture2] },
        name: "name 4",
        price: "5.80",
      },
    ],
    "cat-2": [
      {
        img: { thumbnail: thumbnail, page: [picture1, picture2] },
        name: "name 5",
        price: "5.40",
      },
      {
        img: { thumbnail: thumbnail, page: [picture1, picture2] },
        name: "name 6",
        price: "3.70",
      },
      {
        img: { thumbnail: thumbnail, page: [picture1, picture2] },
        name: "name 7",
        price: "17.80",
      },
      {
        img: { thumbnail: thumbnail, page: [picture1, picture2] },
        name: "name 8",
        price: "5.80",
      },
      {
        img: { thumbnail: thumbnail, page: [picture1, picture2] },
        name: "name 9",
        price: "15.80",
      },
      {
        img: { thumbnail: thumbnail, page: [picture1, picture2] },
        name: "name 10",
        price: "50.80",
      },
    ],
    "cat-3": [
      {
        img: { thumbnail: thumbnail, page: [picture1, picture2] },
        name: "name 11",
        price: "5.40",
      },
      {
        img: { thumbnail: thumbnail, page: [picture1, picture2] },
        name: "name 12",
        price: "3.70",
      },
      {
        img: { thumbnail: thumbnail, page: [picture1, picture2] },
        name: "name 13",
        price: "17.80",
      },
    ],
    "cat-4": [
      {
        img: { thumbnail: thumbnail, page: [picture1, picture2] },
        name: "name 14",
        price: "5.40",
      },
      {
        img: { thumbnail: thumbnail, page: [picture1, picture2] },
        name: "name 15",
        price: "3.70",
      },
      {
        img: { thumbnail: thumbnail, page: [picture1, picture2] },
        name: "name 16",
        price: "17.80",
      },
      {
        img: { thumbnail: thumbnail, page: [picture1, picture2] },
        name: "name 17",
        price: "5.80",
      },
      {
        img: { thumbnail: thumbnail, page: [picture1, picture2] },
        name: "name 18",
        price: "0.80",
      },
    ],
  },
};

export { data };
