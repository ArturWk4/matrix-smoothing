function isUndefined(value) {
	return typeof(value) === 'undefined';
}

let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];

let smoothMatrix = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0]
];

let combinations = [
	{r: -1, c: -1},
	{r: -1, c: 0 },
	{r: -1, c: 1 },
	{r: 0,	c: -1},
	{r: 0, 	c: 1 },
	{r: 1, 	c: -1},
	{r: 1,  c: 0 },
	{r: 1,  c: 1 }
];

let sum = 0;
let elemLength = 0;

for (let row = 0; row < matrix.length; ++row) {
	for (let col = 0; col < matrix[row].length; ++col) {
		for (let i = 0; i < combinations.length; ++i) {
			if (!isUndefined(matrix[row + combinations[i].r]) && 
					!isUndefined(matrix[row + combinations[i].r][col + combinations[i].c]) ) {
				sum += matrix[row + combinations[i].r][col + combinations[i].c];
				++elemLength;
			}
		}
		smoothMatrix[row][col] = Math.trunc(sum / elemLength * 100) / 100;
		sum = 0;
		elemLength = 0;
	}
}

console.log(smoothMatrix);

