//allows use of npm inquirer
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./develop/utils/generateMarkdown.js');



// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Error: Please enter your GitHub username to continue...');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Error: Please enter your email address to continue...');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Error: Please enter your project name...');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'about',
        message: 'Enter your project description',
        validate: aboutInput => {
            if (aboutInput) {
                return true;
            } else {
                console.log('Error: Please enter your project description...');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install your project?',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Error: Please include the steps to install your project...');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'run',
        message: 'How do you run the project.',
        validate: runInput => {
            if (runInput) {
                return true;
            } else {
                console.log('Error: Please indicate how to run your project...');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'List the GitHub username(s), if any, of your collaborators.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Is there a test included?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose the license for the project:',
        choices: ['Apache', 'MIT', 'Mozilla', 'Unlicense']
    }
];

// function to write README file
async function writeToFile(fileName, data) {
    await fs.promises.writeFile(fileName, data, 'utf-8');
}

// function to initialize program
async function init() {
    const answers = await inquirer.prompt(questions);
    const createMarkdown = generateMarkdown(answers);
    await writeToFile('README.md', createMarkdown);
}

// function call to initialize program
init();
