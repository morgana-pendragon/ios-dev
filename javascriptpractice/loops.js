/* Loops are the main way to control 
repeating actions in code. The three main types of loop
are while, for, and for..of. */

/* While loop…runs while the condition is true */
const list =  [1,2,3,4,5,6,7,8,9,10]
let i = 0 //Using let instead of const as i might change 
while (i < list.length) { 
 console.log("Loop counter: " + i);
  i++ //Increments the value of i at the end of the loop
} //Loop will only run while i < 10. Loop will run 10 times..

/* Do While Loop: basically the same as while, except condition 
is evaluated after the code block runs */
let i= 0
let n = 2500 
do {
let txtA = "This loop has ran "
let txtB = " number of times"
console.log(txtA + i + txtB)
i++
} while (i< n)


/* For Loop: For these instructions, the code will loop. Usually three instructions. */
let lol = [];
for (let i = 0 //Declare i; i < 25 //condition; i++ //Increment operator) {
  lol.push("Num: " + i)
} //Pushes a value into the lol array each time the loop is run. 

/* for...of Loop: Simplified version of the for loop for (variable of iterable) */

const penColor = ['black', 'blue', 'brown', 'green', 'gray', 'orange', 'pink', 'purple', 'red', 'yellow']
for (element of penColor) {
  console.log(element)
  }
