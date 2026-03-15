function printPattern(n) {

    for (let i = 0; i < n; i++) {
        let row = "";
        for (let s = 0; s < i; s++) {
            row += " ";
        }
        let val = 1;

        for (let j = 0; j < n - i; j++) {

            row += val + " ";
            val = val * (n - i - 1 - j) / (j + 1);
        }
        console.log(row);
    }
}

printPattern(5);