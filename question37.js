// Function to make a shirt
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Size: ".concat(size, ", Message: ").concat(message));
}
// Making a large shirt with default message
make_shirt();
// Making a medium shirt with default message
make_shirt("medium");
// Making a custom-sized shirt with a different message
make_shirt("small", "Hello, World!");
