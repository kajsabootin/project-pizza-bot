const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const menu = [vegetarian, hawaiian, pepperoni]

const pizzaPrice = 80

//a function that checks if the pizza is on the menu
const checkOrderName = (orderName) => {
  if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {
    return true;
  } else {
    return false;
  }
};

//a function that calculates how much the pizza will cost
const totalCost = (totalPrice) => {
  return totalPrice * pizzaPrice;
};

//a function that calculates how long the pizza takes
const cookingTime = (totalCookingTime) => {
  if(+totalCookingTime <= 2) {
    return 10
  } else if (+totalCookingTime <= 5){
    return 15
  } else {
    return 20
  }
};

const orderPizza = () => {
  alert (`Hey! Happy to serve you pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);



const SecondOrderName = prompt(`Enter the name of the pizza you want to order today.`);

if (checkOrderName(SecondOrderName)) {
  orderQuantity = prompt(`How many of ${SecondOrderName} do you want?`)
  alert(`Great, I'll get started on your ${SecondOrderName} right away, it will cost ${totalCost(orderQuantity)} kr. 
  The pizzas will take ${cookingTime(orderQuantity)} minutes.`) 
} else {
  alert (`Choose a pizza from the menu`)
}
}