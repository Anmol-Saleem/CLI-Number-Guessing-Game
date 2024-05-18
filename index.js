#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a number 
// 2) user will guess a number
// 3) compare both numbers
const random_number = Math.floor(Math.random() * 6 + 1);
// for user input
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: " Please guess a number between 1-6"
    },
]);
// for comparing 
if (answer.userGuessedNumber == random_number) {
    console.log(" Congratulations! You have guessed a right number ");
}
else {
    console.log(" Sorry, you have guessed wrong number ");
}
