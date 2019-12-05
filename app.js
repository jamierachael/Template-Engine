// Developer-Profile-Generator
// Homework-8 Jamie Morris
// Entry Point script
// Start JS
// Declare requiements with variables
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
// var pdf = require('html-pdf');
const generate = require('./generateHTML');
const axios = require("axios");
// const open = require('open');

// This will write the file, and modify it to a promise
const writeFileAsync = util.promisify(fs.writeFile);


// Prompts user for username and favorite color
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your GitHub name?"
        },
        // {
        //     type: "input",
        //     name: "username",
        //     message: "What is your GitHub username?"
        // },
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
            choices: ["Employee", "Manager", "Engineer",
                "Intern"],
            message: "What is your role in your company?"
        }

    ]);
}


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
        return writeFileAsync("index.html", html);

    })
    .then(function () {
        console.log("Successfully wrote to index.html");
        // Reads the file before PDF conversion
        // Will be updated to team.html in the output folder
        var htmlPDF = fs.readFileSync('./index.html', 'utf8');
        var options = { format: 'Letter' };
        // Pass in HTML file to function to create PDF 
        // Creates PDF 
        // return new Promise((resolve, reject) => {
        //     pdf.create(htmlPDF, options).toFile('./index.pdf', function (err, res) {
        //         // console.log(res);
        //         // Error testing 
        //         if (err) return reject(err);
        //         return resolve(res);

        //     })
        // })

    })
    // Opens the PDF 
    // .then(function (res) {
    //     console.log("This works!", res);

    //     open('index.pdf');
    // console.log('The image viewer app quit');
    // })
    // Error testing 
    .catch(function (err) {
        console.log(err);

    });

