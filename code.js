
function printPattern(rows) {

    if (typeof rows !== 'number' || rows <= 0) {
        console.error("Invalid input: 'rows' must be a positive number.");
        return;
    }

    let startPower = rows - 1;

    for (let i = 0; i < rows; i++) {

        let currentPower = startPower - i;

        let outputLine = "";

        for (let s = 0; s < i; s++) {
            outputLine += " ";
        }

        let val = 1; 

        for (let k = 0; k <= currentPower; k++) {

            outputLine += val;

            if (k < currentPower) {
                outputLine += " ";
            }

            val = (val * (currentPower - k)) / (k + 1);
        }

        console.log(outputLine);
    }
}

const ROWS = 5;

printPattern(ROWS);


















