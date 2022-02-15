import { useState } from "react";

const ItemsCart = () => {
  const [itemList, setItemList] = useState([]);

  function addToCart(item: any) {
    setItemList(itemList.concat(item));
  }

  function getItemList() {
    return itemList;
  }

  return { addToCart, getItemList };
};

export default ItemsCart;
