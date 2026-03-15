
function printPattern(height) {
    if (typeof height !== 'number' || height <= 0) {
        console.error("Invalid input: 'height' must be a positive number.");
        return;
    }

    let startPower = height - 1;

    for (let i = 0; i < height; i++) {
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