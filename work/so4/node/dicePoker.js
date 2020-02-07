/**
 * A simple test program importing a class Dice.
 *
 * @author Marin Zannato
 */
"use strict";

var Dice = require("./dice.js");

// Prepare a dice hand to hold the dices (its an array)
var hand = [];

// Add the dices to the dice hand and roll them once
for (let i=0; i<5; i++) {
    hand[i] = new Dice();
    hand[i].roll();
}

console.info("Here is the dices you have rolled.");

// Print out the whole datastructure
console.log(hand);

// Join the elements and print out as a string.
// This construct is using the builtin class method toString.
console.info(hand.join());

for (let i=0; i<5; i++) {
    hand[i] = new Dice();
    hand[i].roll();
}

console.info("Here is what your opponent rolled.");

// Print out the whole datastructure
console.log(hand);

// Join the elements and print out as a string.
// This construct is using the builtin class method toString.
console.info(hand.join());
