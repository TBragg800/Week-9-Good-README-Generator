const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your title of your project?",
        name: "title"
      },
      {
        type: "input",
        message: "How would you describe your project?",
        name: "description"
      },
      {
        type: "input",
        message: "Briefly describe the steps the user should take to install your project.",
        name: "install",
        default: "The user should run 'npm install' in the command line."
      },
      {
        type: "input",
        message: "Briefly describe the proper usage of your project.",
        name: "usage",
        default: "After installation, the user should run 'node index.js' in the command line, then answer the following prompts."
      },
      {
        type: "checkbox",
        message: "Choose a license for your project.",
        name: "license",
        choices: [
        "Apache", 
        "GNU", 
        "MIT", 
        "ISC",
        "Mozilla",
        "Unlicense"
        ],
        default: "Unlicense"
      },
      {
        type: "input",
        message: "Briefly describe the steps the user should take to contribute to your project.",
        name: "contribute",
        default: "Fork the project & clone locally. Create an upstream remote and sync your local copy before you branch. Branch for each separate piece of work. Do the work, write good commit messages, and read the CONTRIBUTING file if there is one. Push to your origin repository. Create a new PR in GitHub."
      },
      {
        type: "input",
        message: "Give the user test instructions for your project.",
        name: "tests"
      },
      {
        type: "input",
        message: "Give the user instructions for submitting questions about your project.",
        name: "questions"
      },
      {
        type: "input",
        message: "Give your email address so the user can submit questions.",
        name: "email"
      },
      {
        type: "input",
        message: "Give your GitHub username so the user can submit questions.",
        name: "github"
      }

// * Title
// * Description
// * Table of Contents
// * Installation
// * Usage
// * License
// * Contributing
// * Tests
// * Questions
// Maybe use activity 9 as example to write full license statement
// https://choosealicense.com/licenses/apache-2.0/
// https://choosealicense.com/licenses/gpl-3.0/
// https://choosealicense.com/licenses/mit/
// https://choosealicense.com/licenses/isc/
// https://choosealicense.com/licenses/mpl-2.0/
// https://choosealicense.com/licenses/unlicense/
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {

        if (err) {
          return console.log(err);
        }
      
        console.log("Success!");
      
      });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        writeToFile(fileName, data);
      })
}

// function call to initialize program
init();
