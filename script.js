const input1 = document.getElementById('text');
const input2 = document.getElementById('delay');
const btn = document.getElementById('btn');
const output = document.getElementById('output');

btn.addEventListener('click', () => {
    // Clear output before starting new operation
    output.textContent = '';

    // Handle first input (text input)
    if (input1.value.trim()) {
        const myFunction = async () => {
            try {
                await promise(1000); // Wait for 1000ms delay
                output.textContent = input1.value.trim(); // Set the output text after delay
            } catch (error) {
                console.log(error);
            }
        };
        myFunction();
    }

    // Handle second input (delay input)
    if (input2.value.trim()) {
        const myFunction = async () => {
            try {
                await promise(Number(input2.value.trim())); // Use the value from input2 for delay time
                output.textContent = input2.value.trim(); // Display delay time in output (or text)
            } catch (error) {
                console.log(error);
            }
        };
        myFunction();
    }
});

function promise(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, timeout);
    });
}
