// the variables

var today = new Date();
var hour = today.getHours();
var greeting = document.querySelector('#h3');

// the greeting due to time
 
if (hour > 18) {
    greeting.innerHTML = "Good Evening!";
}

else if (hour > 12) {
    greeting.innerHTML = "Good Afternoon!";
}

else if (hour > 0){
    greeting.innerHTML = "Welcome!";
}

else {
    greeting.innerHTML = "See you tomorrow";
}

console.log(hour)