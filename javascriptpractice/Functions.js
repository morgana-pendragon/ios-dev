// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: light-gray; icon-glyph: magic;
/* COMPLETED

You know how old your dog is in human years, but what about dog years? Calculate it!

Requirements: 

Uses arguments.
Calculated the dog's age based on the conversion rate of 1 human year = 7 dog years.

Returns the dog's age. 
Outputs the dog's age in a new Alert()

Call the function four times.
*/

//Dogs' Age 
const dogsAge = [3, 9, 12, 15]
console.log(dogsAge.length)
console.log(dogsAge[0] * 7)

//Convert 
dogsAge.convert = function() {
  return (dogsAge.element * 7)
};

dogsAge.convert()


console.log("Luna is " + dogsAge[0] + " years old in dog years!")
console.log("Sparky is " + "" + " years old in dog years!")
console.log("Rage is " + "" + " years old in dog years!")
console.log("Sophia is " + "" + " years old in dog years!")