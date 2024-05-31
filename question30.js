// creating a array 
var username = ["mahad", "ali", "zeeshan", "admin", "usman"];
//using foreach loop of array
username.forEach(function (oneUser) {
    if (oneUser === "admin") {
        console.log("hello ".concat(oneUser, ",would yuo like to see a status report?"));
    }
    else {
        console.log("hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
