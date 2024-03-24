import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { messege: "enter first number", type: "number", name: "firstNumber" },
    { messege: "enter second number", type: "number", name: "secondNumber" },
    { messege: "select an operator", type: "list", name: "operator", choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please enter valid number");
}
