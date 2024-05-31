"use strict";
// define variable
let apple = "apple";
let uppercaseApple = "APPLE";
let four = 4;
let six = 6;
'';
let fruits = ["banana", "apple", "orange"];
// test for equalitity and inequalitiy with string
console.log("is apple is equal to mango");
console.log(apple == "apple");
console.log("\nis apple is not equal to apple");
console.log(apple != "apple");
//test using lawer case function
console.log("\nis APPLE is equal to apple after convering to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nis APPLE is not equal to apple after convering to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
//numerical tests
//equal to
console.log("\n is four is equal to six?");
console.log(four == six);
//not equal to
console.log("\n is four is not equal to six?");
console.log(four != six);
//greater than
console.log("\n is four is greater then 0?");
console.log(four > 0);
//less than
console.log("\n is six is less then four?");
console.log(four > 6);
//greater than or equal to
console.log("\n is six is greater than or equal to 5?");
console.log(six >= 5);
//less than or equal to
console.log("\n is six is less than or equal to 5?");
console.log(six <= 5);
//test using "and" & "or" operator
//using && (and)
console.log("\n six is not equal to 10 and twenty is greater than 4");
console.log(six != 10 && six > 4);
console.log("\n six is not equal to 10 and twenty is greater than 4");
console.log(six != 10 && six > 30);
//using || (or)
console.log("\n 4 is greater than 6 or 4 is equal to 4");
console.log(4 > 6 || 4 == 4);
console.log("\n 4 is greater than 6 or 4 is not equal to 4");
console.log(4 > 6 || 4 != 4);
//test whether an item is include in array
console.log("\n is orange is include in my fruits array?");
console.log(fruits.includes("orange"));
console.log("\n is orange is not include in my fruits array?");
console.log(!fruits.includes("orange"));
