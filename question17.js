"use strict";
// creating a guest list array
let Guestslists = ["Fiza", "Ifra", "Maryam", "Esha"];
//making variable for the guest who not come
let doesnot = Guestslist[3];
//print the name of guest who dont come
console.log(donotcome, "nai ahh skta han");
// add and remove valuse from array
Guestslist.splice(0, 1, "hamza");
//massage of biggest table
console.log("Good news ! WE have found the biggest table for lunch");
//add the new value at the starting of array
Guestslist.unshift("ali");
// add the new value at the end index of array 
Guestslist.push('Zain');
//adding the new guest at the middle index of array 
let middleindex = Math.floor(Guestslist.length / 2);
//adding the new guest at middlew index of array 
Guestslist.splice(middleIndex, 0, "osama");
//print massager of updated list
console.log(" updated list of our guests");
// sending a invitation to our guest one by one
Guestslist.forEach(onesguest => console.log(`salam ${onesguest}, would you like to dinner with me?`));
// only two guest are invited at the time
console.log("unfortunately,the new dinner table wont arrive on time, so i can invite only two guest to dinner with me");
//using while-loop to remove the guest from array
while (Guestslist.length > 2) {
    let removedguest = Guestslist.pop();
    console.log(`Sorry,${removedguest} I cant invite you for dinner`);
}
// sending a invitation to the last two guest on the list
console.log(" invitation to the last 2 guest");
Guestslist.forEach(lasttwo => console.log(`Lucky ${lasttwo}, you arre stiil invited to dinner`));
//removing last two guest
Guestslist.pop();
Guestslist.pop();
console.log("empty list:", Guestslist);
