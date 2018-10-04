// Conditionally add to array & object
const test = 1 === 1;

const arr = [ ...test && [1, 2, 3], 4 ];

const obj = {
	...test && { prop1: 1 },
  	prop2: 2
}