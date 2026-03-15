/**
 * Generates a decreasing pattern based on binomial coefficients (Pascal's Triangle).
 * This function calculates each row dynamically to avoid hardcoding.
 * * Mathematical Logic:
 * Each row 'n' is generated using the iterative formula for combinations:
 * C(n, k) = C(n, k-1) * (n - k + 1) / k
 * * @param {number} rows - The number of rows to print in the decreasing sequence.
 */
function printPattern(rows) {
    // Validation: Ensures input is a valid positive number
    if (typeof rows !== 'number' || rows <= 0) {
        console.error("Invalid input: 'rows' must be a positive number.");
        return;
    }

    // The top row of a 5-row pattern corresponds to (a+b)^4
    const startPower = rows - 1;

    for (let i = 0; i < rows; i++) {
        // currentPower decreases each iteration (4, 3, 2, 1, 0)
        let currentPower = startPower - i;
        let outputLine = "";

        // Manual Spacing: Creates the pyramid indentation without .repeat()
        for (let s = 0; s < i; s++) {
            outputLine += " ";
        }

        // Row Generation: Calculates Pascal values without .push() or .join()
        let val = 1; 
        for (let k = 0; k <= currentPower; k++) {
            outputLine += val;
            
            // Add space between numbers for visual alignment
            if (k < currentPower) {
                outputLine += " ";
            }

            // Iterative Binomial Coefficient calculation
            // This avoids factorials and ensures O(n) complexity per row
            val = (val * (currentPower - k)) / (k + 1);
        }

        console.log(outputLine);
    }
}

/** * A value of 5 rows is used here to generate the specific 1-4-6-4-1 
 * sequence requested in the requirements.
 */
const ROWS_TO_GENERATE = 5;
printPattern(ROWS_TO_GENERATE);