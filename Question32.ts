// array of currunt user
let new_users = ["usama","fiza","maryam","hamza","ali"];

//array of new user name
let current_users = ["abdullah", "HAMZA", "ahad", "usman","yahya"];


// loop through new user to check for usernames ability
new_users.forEach(new_one_user => {
    //making a conditionfor username already exist and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase())

    //print different messages using if else statement
    if(our_condition){
        console.log(`sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`this Username ${new_one_user} is available`)
    }
})
