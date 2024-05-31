// Function to make a shirt
function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Size: ${size}, Message: ${message}`);
}

// Making a large shirt with default message
make_shirt();

// Making a medium shirt with default message
make_shirt("medium");

// Making a custom-sized shirt with a different message
make_shirt("small", "Hello, World!");