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

// combinations which will add to element's index of matrix for check neighbors elements
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

// amount of summed elements 
let elemLength = 0;

// we add item of every combinations to element's index and check is the item 'undefined'
// if it is false than we add element to sum, and to increment amount of summed elements
// after we calc average and insert it into smooth matrix 
// after we reset the variable

for (let row = 0; row < matrix.length; ++row) {
	for (let col = 0; col < matrix[row].length; ++col) {
		for (let i = 0; i < combinations.length; ++i) {
			if (!isUndefined(matrix[row + combinations[i].r]) && 
					!isUndefined(matrix[row + combinations[i].r][col + combinations[i].c]) ) {
				sum += matrix[row + combinations[i].r][col + combinations[i].c];
				++elemLength;
			}
		}
		smoothMatrix[row][col] = Math.trunc(sum / elemLength * 10) / 10;
		sum = 0;
		elemLength = 0;
	}
}

// print smooth matrix
for (let row of smoothMatrix) {
	console.log(...row);
}


