// Task 36
function make_shirt(size, message) {
    console.log("Shirt size: ".concat(size, ", Message: ").concat(message));
}
make_shirt("Medium", "Hello, World!");
// Task 37
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Shirt size: ".concat(size, ", Message: ").concat(message));
}
make_shirt(); // Large shirt with default message
make_shirt("Medium"); // Medium shirt with default message
make_shirt("Small", "Keep Calm and Code On!"); // Custom shirt
