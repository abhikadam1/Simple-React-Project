function generateStarPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let starRow = '';
        for (let j = 1; j <= i; j++) {
            starRow += '*';
        }
        console.log(starRow);
    }
}

// Example usage
node(5);
