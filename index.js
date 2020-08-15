var inquirer = require("inquirer");
var fs = require('fs');
const axios = require("axios");

// Questions asked to the user
inquirer.questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "Title"
    },
    {
        type: "input",
        message: "Describe your project",
        name: "Description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "Installation"
    },
    {
        type: "input",
        message: "Provide instructions for use.",
        name: "Usage"
    },
    {
        type: "input",
        message: "Contributors?",
        name: "Contributors"
    },
    {
        type: "input",
        message: "How do you test your project?",
        name: "Test"
    },
    {
        type: "list",
        message: "Select license",
        name: "License",
        choices: [
            "MIT",
            "GVL-GPL 3.0",
            "APACHE 2.0",
            "BSD 3",
            "None"
        ]
    },
    {
        type: "input",
        message: "Please enter your Github username.",
        name: "Username"
    },
    {
        type: "input",
        message: "Please enter your email address.",
        name: "Email"
    }
    
];

// Function to write file
function writeToFile(fileName, data) {
    writeFile(fileName, data, err => {
        if (err) {
          throw err;
        }
      });
    }


// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        
        const response = generateMarkdown(answers);
        console.log(answers);
       
        writeToFile("README.md", response);
      
    })
    

}


// function call to initialize program
init();