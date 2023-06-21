const pizza1 = {
  size: "large",
  toppings: ["cheese", "sauce", "pepperoni"],
  crust: "stuffed",
}

const smallPizzaPrice = 5;
const smallPizzaToppings = 1;
const mediumPizzaPrice = 7;
const mediumPizzaToppings = 1.5;
const largePizzaPrice = 9;
const largePizzaToppings = 2;



function getPrice(pizza) {
  const { size, toppings } = pizza;
  let price = 0;
  if (size === "small") {
    price += smallPizzaPrice;
    price += smallPizzaToppings * toppings.length;
    return price;
  }
  if (size === "large") {
      price += largePizzaPrice;
      price += largePizzaToppings * toppings.length;
      return price;
    }
  return;
}

const pizza2 = {
  size: "small",
  toppings: ["cheese", "mushroom", "pepperoni", "sausage"],
  crust: "stuffed",
};

const team = ['Alex', 'Sam', 'John', 'Jane', 'Bob'];
const [captain, assistant, ...players] = team;
console.log(players);
const newPrice = getPrice(pizza1);

console.log(newPrice);
