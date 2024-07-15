#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: chalk.bgYellowBright("Q1. What is the correct way to check if two values are not equal in Typescript?\n"),
        choices: ["a == b", "a === b", "a = b", "a !== b"]
    },
    {
        name: "question_2",
        type: "list",
        message: chalk.bgBlueBright("Q2. Which of the following characters is commonly allowed in variables names in Typescript?\n"),
        choices: ["$", "@", "#", "&"]
    },
    {
        name: "question_3",
        type: "list",
        message: chalk.bgMagenta("Q3. Which operator is commonly used for string concatenation in Typescript?\n"),
        choices: ["+", "-", "*", "/"]
    },
    {
        name: "question_4",
        type: "list",
        message: chalk.bgGreenBright("Q4. In Typescript, which symbol is commonly used to terminate a statement?\n"),
        choices: [".", ",", ":", ";"]
    },
    {
        name: "question_5",
        type: "list",
        message: chalk.bgCyanBright("Q5. Which methood of inquirer.js is used to start the prompt interface and recieve user input?\n"),
        choices: ["start()", "prompt()", "init()", "run()"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "a !== b":
        console.log("1. Correct!!");
        ++score;
        break;
    default:
        console.log("1. Incorrect!!!");
}
switch (quiz.question_2) {
    case "$":
        console.log("2. Correct!!");
        ++score;
        break;
    default:
        console.log("2. Incorrect!!!");
}
switch (quiz.question_3) {
    case "+":
        console.log("3. Correct!!");
        ++score;
        break;
    default:
        console.log("3. Incorrect!!!");
}
switch (quiz.question_4) {
    case ";":
        console.log("4. Correct!");
        ++score;
        break;
    default:
        console.log("4. Incorrect!!!");
}
switch (quiz.question_5) {
    case "prompt()":
        console.log("5. Correct!!");
        ++score;
        break;
    default:
        console.log("5. Incorrect!!!");
}
console.log(`Score : ${score}`);
console.log("********** THE END **********");
