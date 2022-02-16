/*
    Assignment 1
    There is some errors in the codepen example from the lesson
    Copy the code from: https://codepen.io/dominoeffekten/pen/abVJGEr inside a HTML, CSS and JS file
    When the time is 20-22 the output should be: snacktime
*/

let textHolder = document.querySelector("p"); //get the element

let hour = new Date().getHours(); //get hour

if (hour >= 8 && hour <= 11) { 
  textHolder.innerHTML = "Good morning!";
} else if (hour > 11 && hour < 13 ) { 
  textHolder.innerHTML = "It is lunch time";
} else if (hour == 17) { 
  textHolder.innerHTML = "Good afternoon";
} else if (hour >= 18 && hour <= 19) { 
  textHolder.innerHTML = "It is dinner time";
} else if (hour >= 20 && hour <= 22) { 
    textHolder.innerHTML = "snacktime";
} else {
  textHolder.innerHTML = "Goodnight";
}


/*
    Assignment 2 - follow up from assignment 1
    Copy the code from: https://codepen.io/dominoeffekten/pen/abVJGEr inside a HTML, CSS and JS file
    Change the time, so it fits your day. It could be:
    8-14: School
    11: Lunch
    and so on..
*/
let textHolder = document.querySelector("p"); //get the element

let hour = new Date().getHours(); //get hour

if (hour >= 8 && hour <= 14) { 
  textHolder.innerHTML = "IBA";
} else if (hour == 11) { 
    textHolder.innerHTML = "Lunch";
} else if (hour > 14 && hour < 16 ) { 
  textHolder.innerHTML = "Danish";
} else if (hour >= 16 && hour <= 21) { 
  textHolder.innerHTML = "Work";
} else if (hour == 19) { 
    textHolder.innerHTML = "Dinner";
} else if (hour >= 21 && hour <= 23) { 
    textHolder.innerHTML = "Time with friends";
} else {
  textHolder.innerHTML = "Goodnight";
}

/*
    Assignment 3
    write a program where the user can write 2 numbers and display the larger one
*/


var x = prompt("Write first number: ");
var y = prompt("Write second number: ");
let larger;

if(x >= y) {
    larger = x;
}
else if (y >= x) {
    larger = y;
}

console.log("Larger number: " + larger);

/*  
    Assignment 4
    make a variable with 3 numbers and sort them with help of JS conditions
*/
var x = prompt("Write first number");
var y = prompt("Write second number");
var z = prompt("Write third number");
if(y > x && z > y) { 
    console.log("(x,y,z)");
} else if(x > y && y > z) { 
    console.log("(z , y, x)");
} else if(z > x && x > y) { 
    console.log("(y, x, z)");
}
