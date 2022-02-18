import firstTShirt from "./assets/productImages/firstTShirt.jpg";
import firstJean from "./assets/productImages/firstJean.jpg";

const productList = [
  {
    id: 1,
    src: firstTShirt,
    name: "Rugged Tee",
    description: "Comfortable to wear and flexible",
    price: (Math.random() * 50).toFixed(0),
    quantity: (Math.random() * 10).toFixed(0),
  },
  {
    id: 2,
    src: firstJean,
    name: "Classic Jean",
    description: "A classic with a vintage feel ",
    price: (Math.random() * 50).toFixed(0),
    quantity: (Math.random() * 10).toFixed(0),
  },
];

function getProductList() {
  return productList;
}

export default getProductList;
