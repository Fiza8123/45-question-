let userName = ["mahad", "ali", "zeeshan", "admin","usman"];

userName = []

if(userName.length === 0){
 console.log(" you array is Empty we need to find some users!")
}else{
    // using foreach loop on array
    userName.forEach(oneUser =>{
     if(oneUser ==="admin"){
    console.log(`hello ${oneUser},would yuo like to see a status report?`)
     } else{
            console.log(`hello ${oneUser}, thank you for logging in again.`)
     }
 })
}