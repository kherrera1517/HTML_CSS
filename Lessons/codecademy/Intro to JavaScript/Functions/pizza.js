let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log(`Order: ${crustType} pizza topped with ${topping}` );
}

takeOrder('sausage', 'thin crust');
takeOrder('onions and ham', 'stuffed crust');
takeOrder('pepperoni', 'normal crust');

const getSubTotal = (itemCount) => {
  return 7.5*itemCount;
}

const getTax = (orderCount) => {
  return getSubTotal(orderCount)*0.06;
}

const getTotal = () => {
  return getSubTotal(orderCount) + getTax(orderCount);
}

console.log(getSubTotal(orderCount));
console.log(getTotal());