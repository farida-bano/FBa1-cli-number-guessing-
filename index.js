#! /usr/bin/evn node 
import inquirer from "inquirer";
// 1)computer will generate a random number-Done
// 2) User input for guessing number-Done
// 3) Cpmpare user input with computer genertednumber and result 
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number:",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congtratulations !you guessed right number.");
}
else {
    console.log("you guessed worng number");
}
