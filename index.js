const userInput = prompt(
  "Please enter your froyo flavors as a list, separating your items with a comma and no spaces:"
).split(",");

const order = {};

function countFlavors(orders) {
  for (let i = 0; i < userInput.length; i++) {
    if (orders[userInput[i]] === undefined) {
      orders[userInput[i]] = 1;
    } else {
      orders[userInput[i]]++;
    }
  }
  return orders;
}

console.table(countFlavors(order));
