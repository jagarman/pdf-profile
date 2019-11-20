const axios = require("axios");
const inquirer = require("inquirer");
const generateHTML  =  require("./generateHTML");
const util = require("util");
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },
    {
        type: "list",
        name: "color",
        message: "What is your favorite color?",
        choices: ["Red","Green","Pink","Blue"]
    },  
];

// function writeToFile(fileName, data) {
// }

function init(){
    inquirer.prompt(questions).then(({ github, color }) => {

    // inquirer.prompt(questions).then({ username, color }) => {
    //     console.log(questions.name)}
    // //     const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    // //         axios.get(queryUrl).then(function(res) {
    // //         const repoNames = res.data.map(function(repo) {
    // //         return repo.name;
    // //       });
    // //       console.log("repoNames: " + repoNames)
    // //       console.log(repoNames.length)
    // //       const repoNamesStr = repoNames.join("\n");
    // //     });
    });
}
init();

// generateHTML({username,color})
