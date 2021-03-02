// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: teal; icon-glyph: magic;
/* COMPLETED Task 1: Define an object literal(D), store a value in the object using associative arrays(D), Pull a property using dot notation(D), update a property using both dot notation(D) & associative arrays, create a new data object. 
*/

const cat = {
name: "Tiny", 
color: "grey", 
DOB:"12/1/2020",  
Gender: "F",
hasOwner: "No" 
} //Object literal 


cat["eyes"] = "green"
console.log(cat.eyes)
console.log(cat["name"])
cat.hasOwner = "Yes"
console.log(cat.hasOwner)

var myDataName = "weight"
var myDataValue = "20LBS"
cat.weight = myDataValue
console.log(cat.weight)