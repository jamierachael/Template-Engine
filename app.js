// Team-Generator
// Homework-9 Jamie Morris
// Entry Point script
// Start JS
// Declare requiements with variables
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generate = require('./generateHTML');
const axios = require("axios");

// Require Class Files 
// const Employee = require("./lib/Employee");
// const Engineer = require("./lib/Engineer");
// const Manager = require("./lib/Manager");
// const Intern = require("./lib/Intern");


// This will write the file, and modify it to a promise
const writeFileAsync = util.promisify(fs.writeFile);

// Array would go here
// const Employee = ["Manager", "Engineer", "Intern"];
// Prompts user for employee info
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the email on your GitHub account?"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter a unique id"
        },
        {
            type: "rawlist",
            name: "title",
            choices: ["Manager", "Engineer",
                "Intern"],
            message: "What is your role in your company?"
        }

    ]);
}

// Function call generate HTML
// For loop with If for roles 
// Then input team members function

// Turns user prompt into answers to pull data
let userAnswers = {};
promptUser()
    .then(function (answers) {
        // const html = generate(answers);
        userAnswers = answers;
        console.log(answers);

        // Makes API call 
        // Return data, then write file

        const queryUrl = `https://api.github.com/users/${answers.username}`;
        // Axious (API) call
        return axios.get(queryUrl)


    })
    .then(function (response) {
        console.log(response);
        const html = generate(userAnswers, response);
        // Writes data into an HTML doc
        // Will be updated to team.html in the output folder
        return writeFileAsync("./output/team.html", html);

    })
    .then(function () {
        console.log("Successfully wrote to team.html");


    })

    // Error testing 
    .catch(function (err) {
        console.log(err);

    });

