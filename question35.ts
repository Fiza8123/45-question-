let animals: string[] = ["Dog", "Cat", "Rabbit"];

for (let animal of animals) {
    console.log(animal);
}

for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");