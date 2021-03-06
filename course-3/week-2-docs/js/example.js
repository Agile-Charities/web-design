/*
The notes this week (week 2) will be referring to this file.
*/

/* example function, use for basic syntax */
function add_two_nums(num1, num2) {
    /* this part is the function's "body" */
    output = num1 + num2;
    return output;
}

/* Same as above, but industry style */
var add_two_again = function(num1, num2) {
    /* this part is the function's "body" */
    output = num1 + num2;
    return output;
}

/* Get the user's name, and welcome them - no return value */
var welcome = function(){
    name = prompt("What is your name?");
    alert("Welcome, " + name + ", to this website!");
}

/* Get the user's name, and return it to use in some other JS code */
var get_name = function(){
    name = prompt("What is your name?");
    return name;
}

/* Same as above, but a different style */
var get_name_2 = function(){
    return prompt("What is your name?");
}



/**********************
Events, click to cause stuff to happen
**********************/
var update_bio = function() {
    /* collect information from the user */
    name = prompt("What is your name?");
    age = prompt("How many years old are you?");
    learning = prompt("What are you learning right now?");

    /* build a short biography (just a string) using the user's info */
    bio_string = "My name is " + name;
    bio_string +=", and I'm " + age + " years old.";
    bio_string += " Today, I'm learning about " + learning + "!";

    /* write the bio_string into an HTML element that has the ID "bio" */
    document.getElementById("bio").innerHTML = bio_string;
}

var favorite = function(){
    thing = prompt("What is your favorite thing?");
    alert("Your favorite thing is " + thing);
    document.getElementById("favorite").innerHTML = "Your favorite thing is " + thing;
}

/***************
`this`
***************/

// get the `id` of the calling DOM element
// and replace the innerHTML with its `id`
var getID = function(elem){
    element_id = elem.id;
    elem.innerHTML = element_id;
}

var some_numbers = [1,2,3,4,5,6,7,8,9,10];

var loop = function() {
    for (j = 0; j < some_numbers.length; j++) {
        // this code will be applied to every element in our array
        console.log(some_numbers[j]);
    }
}

var loop2 = function(arr) {
    for (i=0; i < arr.length; i++) {
        arr[i].innerHTML = i;
    }
}

var alcohol_age = function(age, has_id) {
    if (age >= 21) {
        if (has_id == true) {
            console.log("This person can buy alcohol.");
        }
        else {
            console.log("This person has no ID, so no alcohol.");
        }
    }
    else {
        console.log("This person is too young for alcohol.");
    }
}