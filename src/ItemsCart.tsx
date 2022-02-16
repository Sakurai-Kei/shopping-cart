let itemList: any[] = [];

function addToCart(item: any) {
  return (itemList = itemList.concat(item));
}

function getItemList() {
  return itemList;
}

export { addToCart, getItemList };
