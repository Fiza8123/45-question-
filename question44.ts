function orderSandwich(...items: string[]) {
    console.log("Sandwich Order:");
    console.log("Items: " + items.join(", "));
    console.log("--------------------");
}

orderSandwich("Turkey", "Lettuce", "Tomato");
orderSandwich("Ham", "Cheese");
orderSandwich("Tuna", "Onion", "Pickles", "Mayo");