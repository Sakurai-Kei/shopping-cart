const productList = [
  {
    src: "Link Here",
    name: "product 1",
    description: "Some description",
    price: (Math.random() * 50).toFixed(0),
    quantity: (Math.random() * 10).toFixed(0),
  },
  {
    src: "Link Here",
    name: "product 2",
    description: "Some description",
    price: (Math.random() * 50).toFixed(0),
    quantity: (Math.random() * 10).toFixed(0),
  },
];

function getProductList() {
  return productList;
}

export default getProductList;
