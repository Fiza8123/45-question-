// creating a array 
let username = ["mahad", "ali", "zeeshan", "admin","usman"];

//using foreach loop of array
username.forEach(oneUser =>{
    if(oneUser ==="admin"){
console.log(`hello ${oneUser},would yuo like to see a status report?`)
    } else{
        console.log(`hello ${oneUser}, thank you for logging in again.`)
    }
})