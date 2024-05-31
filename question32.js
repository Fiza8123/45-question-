// array of currunt user
var new_users = ["usama", "fiza", "maryam", "hamza", "ali"];
//array of new user name
var current_users = ["abdullah", "HAMZA", "ahad", "usman", "yahya"];
// loop through new user to check for usernames ability
new_users.forEach(function (new_one_user) {
    //making a conditionfor username already exist and save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase(); });
    //print different messages using if else statement
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("this Username ".concat(new_one_user, " is available"));
    }
});
