"use strict";
let Guestlist = ["Fiza", "Ifra", "Maryam", "Esha"];
let dontcome = Guestlist[3];
console.log(dontcome, "nai ahh skta");
Guestlist.splice(3, 3, "hamza");
Guestlist.forEach(guest => console.log(`salam ${guest}, would you like to lunch with me ?`));
