
function printPattern(height) {
    if (typeof height !== 'number' || height <= 0) {
        return;
    }

    let currentRow = [1, 4, 6, 4, 1];
    let currentLength = 5;

    for (let i = 0; i < height; i++) {
        if (currentLength === 0) break;

        let outputLine = "";

        for (let s = 0; s < i; s++) {
            outputLine += " ";
        }

        for (let j = 0; j < currentLength; j++) {
            outputLine += currentRow[j];
            if (j < currentLength - 1) {
                outputLine += " ";
            }
        }

        console.log(outputLine);

        let nextRow = [];
        let nextLength = currentLength - 1;
        
        if (nextLength > 0) {
            nextRow[0] = 1;
            for (let k = 1; k < nextLength; k++) {
                nextRow[k] = currentRow[k] - nextRow[k - 1];
            }
        }

        currentRow = nextRow;
        currentLength = nextLength;
    }
}

const HEIGHT_TO_PRINT = 5;
printPattern(HEIGHT_TO_PRINT);