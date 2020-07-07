const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the title of this project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the name of this repo?",
    name: "reponame",
  },
  {
    type: "input",
    message: "Please write a small description of the project:",
    name: "description",
  },
  {
    type: "input",
    message: "Please write one or more sentances about using this product:",
    name: "usage",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message:
      "What is your linkedIn username? (format: lastnamefirstname ie. doejohn)",
    name: "linkedin",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "confirm",
    message: "Is there a screenshot.png in the images directory?",
    name: "screenshot",
  },
  {
    type: "confirm",
    message: "Did you deploy on GitHub?",
    name: "deploy",
  },
  {
    type: "checkbox",
    message: "Which technologies was this built with?",
    name: "tech",
    choices: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Node.js",
      "React",
      "Python",
    ],
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
  });
}

// function to initialize program
async function init() {
  const data = await inquirer.prompt(questions);
  const markdown = generateMarkdown(data);
  writeToFile("README.md", markdown);
}

// function call to initialize program
init();
