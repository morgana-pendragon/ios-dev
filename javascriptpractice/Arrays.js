/* Arrays are variables that are a collection of elements. Arrays are objects.
Arrays can hold any type of variable. Arrays can even be constructed to hold 
different types of varaibles. Like an Array with strings and integers. or even one with json and boolean 
*/ 

/* Two different ways to initialize an Array */
const a = []; //Array literal syntax
const b = Array(); //Array Function
const letter = Array("a", "b", "c", "d", "e")
const nums = [ 1, 2, 3, 4, 5 ]

/*You cam pre-fill arrays using both initialization methods */
const c = [100, 200, 300, 400, 500, 600, 700, 800, 900 ];
const d = Array.of('Sarah', 'Mike', 'George', 'Alexis')

/*Arrays can also be multi-dimensional. Multi-dimensional arrays are called matrices (singular: matrix)
*/
const matrix = [
['a', 'b', 'c'],
['d', 'e', 'f'],
['g', 'h', 'i'],
['j', 'k', 'l'],                   
['m', 'n', 'o']                   
];
 
/* Arrays and matrices indices always start at 0. If you had an array with 10 elements....the first element would be index 0, and the last element would be
index 9. A matrix with with 4 dimensions would start at dimension 0 and end at dimension 3. Also, when calling matricies, you call the matric dimension first then array index */             
console.log(a[2]) //null
console.log(b[0]) //null
console.log(c[0]) //100
console.log(d[3]) //Alexis
console.log(matrix [0][2]) //c           
console.log([2][1]) //g
console.log([3][2]) //l              

/* We can initialize an array with a set number of elements */
Array(12).fill(0) //makes an array with 12 elements and fills each space with the number 0
Array(20) //Makes an array with 20 elements 

/* The number of elements in an array can be checked using the length property */
matrix.length //5 length property of matrices is number of dimensions
a.length //Equal to 0 since no elements
c.length //9
d.length //4

/* Add & remove items to/from array */
c.push(1000) //Adds to end
d.unshift('Joe') //Adds to beginning
matrix.push('p') //Added p outside dimension 4
matrix.unshift('z') //Added z outside dimension 0
d.pop() //Removes from end will remove 'Alexis'
c.shift() //Removes from beginning, will remove 100 
matrix.pop() //Removed ['a', 'b', 'c']
matrix.shift() //Removed ['m', 'n', 'o']

/* Merge arrays */
const  merge = letter.concat(nums)  //Merges in the order specified 
const letterTwo = Array("f", "g", "h", "i", "j")
const numsTwo = [ 6, 7, 8, 9, 10 ]
const  mergeTwo = [...letterTwo, ...numsTwo] //Spread operator can also merge arrays 

/* Find items */
const trees = [
  "birch",
  "maple",
  "oak",
  "poplar"
];
result = trees.find(tree => tree.startsWith("m"))
console.log(result) //Returns maple. Uses find function
 
/* Array.include returns a boolean based on the value passed */
const t = d.includes('Mike') //True
const f = c.includes(1300) //False
