var userName = ["mahad", "ali", "zeeshan", "admin", "usman"];
userName = [];
if (userName.length === 0) {
    console.log(" you array is Empty we need to find some users!");
}
else {
    // using foreach loop on array
    userName.forEach(function (oneUser) {
        if (oneUser === "admin") {
            console.log("hello ".concat(oneUser, ",would yuo like to see a status report?"));
        }
        else {
            console.log("hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
