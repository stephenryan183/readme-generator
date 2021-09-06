// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();






const fs = require('fs');
const inquirer = require('inquirer');


const questions = [
    {
        type: 'input',
        message: 'Enter your name:',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Where are you from?',
        name: 'location',
    },
    {
        type: 'input',
        message: 'Tell us about yourself',
        name: 'bio',
    },
    {
        type: 'input',
        message: 'Enter your github URL:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your linkedIn URL:',
        name: 'linkedin',
    },
   
    ];

function initialize () {inquirer
    .prompt(questions)
       .then(response => {
           var readme = `
${response.name}
${response.location}
${response.bio}
${response.github}
${response.linkedin}`
          
           fs.writeFile("readme.md", readme, (err) =>
         err ? console.log(err) : console.log('success')
         );
       }) 
         
        
};

initialize()