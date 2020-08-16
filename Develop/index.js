const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?"
    },
    {
      type: "input",
      name: "description",
      message: "What is the description of your project?"
    },
    {
      type: "input",
      name: "installation",
      message: "What are the installation steps for your project?"
    },
    {
      type: "input",
      name: "usage",
      message: "What is the usage of creating this application?"
    },
    {
        type: "checkbox",
        message: "Please select a license",
        choices: [
            "Academic Free License v3.0",
            "BSD 3-clause license",
            "Creative Commons Attribution Share Alike 4.0",
            "GNU Affero General Public License v3.0"
        ],
        name: "license"
      },
      {
        type: "input",
        name: "contribution",
        message: "Please enter the contributors of this project."
      },
    {
      type: "input",
      name: "test",
      message: "What are the instructions for testing?"
    },
      {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username."
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your Email address."
      },
  ]);
}

function generateMarkdown(response) {
  return `

  # ${response.title}

# Table of Contents
-[Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[License](#license)
-[Contribution](#contribution)
-[Test](#test)
-[Questions](#questions)
-[Email](#email)

## Description:
${response.description}

![License](https://img.shields.io/badge/License-${response.license}-blue.svg "License Badge")

## Installation:
    ${response.installation}
## Usage:
    ${response.usage}
## License:
    ${response.license}
## Contribution:
    ${response.contribution}
## Test:
    ${response.test}
## Question:
    ${response.username}
## Email:
    ${response.email}

`}

async function init() {
    try {
        const response = await promptUser();

        const readMe = generateMarkdown(response);

        await writeFileAsync("ReadMe.md", readMe);
        
        console.log("Successfully!");
    } catch (err) {
        console.log(err);
    }
    
}

init();