// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: purple; icon-glyph: magic;
/* COMPLETED 

Conditionals in Javascript practice exercises

One problem for each:

if/else statement
if elseif statement
Switch statement 

Utilise these:
comparison operators
Logical operators 
Ternary operator
*/

//Checks for a season and assigns a string value to the response variable 
let season = "winter";
let sRes;

if (season === "summer") {
  sRes = "It is currently " + season
} else if (season === "winter") {
  sRes = "It is currently " + season
} else if (season === "spring") {
  sRes = "It is currently " + season
} else if (season === "fall") {
  sRes = "It is currently " + season
}
console.log(sRes) //Works

//Check whether a machine is on/off. Machine status based on score should be displayed if the machine is on. 

let mRes;
let score = 90;
let machineOn = true;

if (machineOn === true) {
  
  if (score < 0 || score > 100) {
    
    mRes = "ERROR (0xe859): UNACCEPTABLE VALUE, please refer to the product manual for troubleshooting"
  } 
  if (score >= 0 && score <= 19) {
     mRes = "The machine is currently on." + "\n Current Score: " + score + "\n Machine is in need if service. It will power off soon."
  }
  if (score >= 20 && score <= 39) {
    mRes = "The machine is currently on." + "\n Current Score: " + score + "\n Machine is operating at MIN efficiency."
  }
  if (score >= 40 && score <= 69) {
    mRes = "The machine is currently on." + "\n Current Score: " + score + "\n Machine is operating at GOOD efficiency." 
  }
  if (score >= 70 && score <= 89) {
    mRes = "The machine is currently on." + "\n Current Score: " + score + "\n Machine is operating at PEAK efficiency." 
  }
  if (score >= 90 && score <= 100) {
    mRes = "The machine is currently on." + "\n Current Score: " + score + "\n Machine is operating at MAX efficiency." 
  } 
    } else if (machineOn === false) {
    
    mRes = "The machine is currently off!"
  }
  console.log(mRes) //Works


//Bouns replace the second task with a switch statement 

let cRes;
let capacityCPU = 18;
let computerOn = true;

if (computerOn === true) {
  switch (true) {
    
case (capacityCPU < 0 || capacityCPU > 100):
cRes = "ERROR (0xe859): RANGE TOO LOW/HIGH"
break;

case (capacityCPU >= 0 && capacityCPU <= 19):
cRes = "Current Operating Efficiency: ENERGY SAVING MODE The PC's battery is low, please connect to the charger." + "\n CPU Usage: " + capacityCPU + "%"
break;

case (capacityCPU >= 20 && capacityCPU <= 39):
cRes = "Current Operating Efficiency: GOOD" + "\n CPU Usage: " + capacityCPU + "%"
break;

case (capacityCPU >= 40 && capacityCPU <= 69):
cRes = "Current Operating Efficiency: MODERATE" + "\n CPU Usage: " + capacityCPU + "%"
break;


case (capacityCPU >= 70 && capacityCPU <= 89):
cRes = "Current Operating Efficiency: PEAK" + "\n CPU Usage: " + capacityCPU + "%"
break;

case (capacityCPU >= 90 && capacityCPU <= 100):
cRes = "Current Operating Efficiency: MAXIMUM" + "\n CPU Usage: " + capacityCPU + "%"
break;
} 
} else if (computerOn === false) {
  cRes = "The PC is currently turned off."
}
console.log(cRes)
//Switch statement 



//Input Valodation