
const fs = require('fs');
const inquirer = require('inquirer');


const questions = [
    {
        type: 'input',
        message: 'What is your Github username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email adress?',
        name: 'emailadress',
    },
    {
        type: 'input',
        message: 'What is your projects name?',
        name: 'projectname',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project:',
        name: 'description',
    },

    {
        type: 'input',
        message: 'What kind of license should your project have?',
        name: 'mit',
    },

    {
        type: 'checkbox',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: [
          'MIT', 'Apache', 'Boost', 'BSD',
        ],
      },
 

    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'dependencies',
    },

    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'tests',
    },

    {
        type: 'input',
        message: 'What does the user need to know about using this repo?',
        name: 'repo',
    },

    {
        type: 'input',
        message: 'What does the user need to know about contributing to this repo?',
        name: 'contributing',
    },


   
    ];

    
   


function initialize () {inquirer
    .prompt(questions) 
       .then(response  => {

           var readme = 
`  # ${response.projectname}

${response.description}


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



 ## Table of Contents
        * Instillation
        * Usage
        * License
        * Contributing
        * tests
        * Questions

 ## Instillation

${response.dependencies}

## Usage


${response.repo}

## License

${response.mit}
 
## Contributing

${response.contributing}

## Tests

${response.tests}

## Questions

If you have any questions reach out to ${response.github}, ot you can reach me directly at ${response.emailadress}


${response.license}





`



          
           fs.writeFile("readme.md", readme, (err) =>
         err ? console.log(err) : console.log('success')
         );
       }) 
         
        
};

initialize()