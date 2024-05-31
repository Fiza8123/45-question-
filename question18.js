"use strict";
//making array and print in its original order
let Contriestovisit = ["China", "korea", "Canada", "brazil"];
console.log("original Order", Contriestovisit);
// print the array in alphebatical order without modifing tha actual array list
console.log("Alphebatical order:", [...Contriestovisit].sort);
//show that the array is still in its original order
console.log("stillin original order", Contriestovisit);
//print the array in reverseorder without modifing the actual array list
console.log("reverse order:", [...Contriestovisit].reverse());
//show that the array is still in its original order
console.log("stillin original order", Contriestovisit);
//we have changed the original array order
console.log("original array reversed:", Contriestovisit.reverse());
//orint the array to show that it's back to its original order
console.log("back to original arder:", Contriestovisit.reverse());
//print the array to show that it order has been change  in alphabetical order
console.log("sorted in alphebatical order:", Contriestovisit.sort());
//// we have to changed again the original order array order now in reverse order again
console.log("original array reversed:", Contriestovisit.reverse());
