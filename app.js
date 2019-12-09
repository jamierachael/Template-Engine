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
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");


// This will write the file, and modify it to a promise
const writeFileAsync = util.promisify(fs.writeFile);

// Array would go here
// const newEmployee = [];
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
            name: "id",
            message: "Please enter a unique id"
        },
        {
            type: "input",
            name: "email",
            message: "What is the email on your GitHub account?"
        },
        {
            type: "rawlist",
            name: "title",
            choices: ["Manager", "Engineer",
                "Intern"],
            message: "What is your role in your company?"
        }
    ])
};

// I am having a reallu hard time with this homework. Mostly, I am unable to figure out how to extract the user data from the title selection; "Manager", "Engineer", "Intern". Since its an object, and a prompt on the backend I am not sure how to obtain the object data or extract the value of the user input.

// For this project, I intended to build an If Statement off of the title selection, where it would then further prompt the user. 

// The intention was to have a function that then worked with the Engineer.js, Intern.js, and Manager.js to fill in the data and populate the template for each individual card, and write the cards on to Employee.js to then writeFileAsync to team.hmtl.

// I missed quite a bit of time with this one due to the holiday, snow and being sick. I have several of the components, but feel unable to fit it all together. 

function promptManager() {
    return inquirer.prompt([
        {
            type: "input",
            name: "officeNumber",
            message: "what is your office?"
        },
        {
            type: "confirm",
            name: "addEmployee",
            message: "Would you like to add another employee?"
        }
    ])
}


function promptEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            name: "gihub",
            message: "what is their github?"
        },
        {
            type: "confirm",
            name: "addEmployee",
            message: "Would you like to add another employee?"
        }
    ])
}

function promptIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "School",
            message: "what school do you attend?"
        },
        {
            type: "confirm",
            name: "addEmployee",
            message: "Would you like to add another employee?"
        }
    ])
}


// Function call generate HTML
// For loop with If for roles 
// Then input team members function


// Turns user prompt into answers to pull data
// function generateHTML() {
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
// }
