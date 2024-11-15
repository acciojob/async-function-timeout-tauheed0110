// Retrieve the necessary elements from the HTML
const inputText = document.getElementById('text');
const inputDelay = document.getElementById('delay');
const btn = document.getElementById('btn');
const output = document.getElementById('output');

// Function to simulate a delay
function promise(timeout) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
}

// Event listener for the button click
btn.addEventListener('click', async () => {
    // Retrieve the user input
    const text = inputText.value.trim();
    const delay = parseInt(inputDelay.value.trim(), 10);

    // Clear previous output (if any)
    output.textContent = '';

    // Check if the user has provided valid inputs
    if (text && !isNaN(delay)) {
        try {
            // Await the delay and display the text after the delay
            await promise(delay);
            output.textContent = text;
        } catch (error) {
            console.error('Error during delay operation:', error);
        }
    } else {
        // If inputs are invalid, inform the user
        output.textContent = 'Please provide valid text and delay values.';
    }
});
