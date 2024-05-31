// creating a guest list array
let Guestslist = ["Fiza","Ifra","Maryam","Esha"];

//making variable for the guest who not come
let donotcome = Guestslist[3];

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
let middleIndex: number = Math.floor(Guestslist.length / 2);

//adding the new guest at middlew index of array 
Guestslist.splice(middleIndex, 0, "osama");

//print massager of updated list
console.log(" updated list of our guests");

// sending a invitation to our guest one by one
Guestslist.forEach(onesguest => console.log(`salam ${onesguest}, would you like to dinner with me?`));
