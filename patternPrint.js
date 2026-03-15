

function printPattern(rows) {

    // Validate input: rows must be a positive number
    if (typeof rows !== 'number' || rows <= 0) {
        console.error("Invalid input: 'rows' must be a positive number.");
        return;
    }

    // Determines the highest power for Pascal row (rows-1)
    let startPower = rows - 1;

    // Outer loop controls number of rows
    for (let i = 0; i < rows; i++) {

        // Current Pascal row index (decreasing each row)
        let currentPower = startPower - i;

        // String to store the current row output
        let outputLine = "";

        // Add leading spaces to create triangle shape
        for (let s = 0; s < i; s++) {
            outputLine += " ";
        }

        // First value in every Pascal row is always 1
        let val = 1; 

        // Generate Pascal row values using combination logic
        for (let k = 0; k <= currentPower; k++) {

            // Add current value to the row
            outputLine += val;

            // Add space between numbers except last
            if (k < currentPower) {
                outputLine += " ";
            }

            // Calculate next value using nCr relation
            // next = current * (n - k) / (k + 1)
            val = (val * (currentPower - k)) / (k + 1);
        }

        // Print the constructed row
        console.log(outputLine);
    }
}

// Define number of rows (avoids magic number)
const ROWS = 5;

// Call the pattern function
printPattern(ROWS);


















