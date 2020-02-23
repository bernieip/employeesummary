// Required dependencies

const inquirer = require("inquirer");
const open = require("open");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// Importing roles for creating new employees

const {managerQuestions, engineerQuestions, internQuestions, addMember} = require("./question");
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");

// Initial Content with Manager info

async function employeeData(){
    inquirer.prompt(managerQuestions)

        .then(function (managerQuestions) {
            let newManager = new Manager(managerQuestions.name, managerQuestions.id, managerQuestions.email, managerQuestions.officeNumber);

            let initialContent = `

            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>TEAM ${managerQuestions.teamName}</title>
            
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js"></script>
                <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
            
                <style>
                    #employeesInfo{
                        padding:10px;
                        margin:10px;
                        background-color:#56a5eb;
                        color: #FFAA00;
                        box-shadow: 2px;
                    }

                .jumbotron{
                    background-color:#56a5eb;
                    color:#ecf5ff;
                }
                body{
                    background-color: #ecf5ff
                }
                .container-fluid{
                    width: 100%;
                }
                .row{
                    margin:auto;
                    justify-content:center;
                }
                </style>
            </head>
            <body>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4 text-center"> TEAM ${managerQuestions.teamName} </h1>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12" id="employeesInfo">               
                            <div id="nameRole">
                                <h4>${newManager.getName()}</h4>
                                <div class="row"><p>${newManager.getRole()}</p></div>
                            </div>
                <div>
                    <ul class="list-group">
                        <li class="list-group-item">ID : ${newManager.getId()}</li>
                        <li class="list-group-item">Email : <a href="mailto:${newManager.getEmail()}">${newManager.getEmail()}</a></li>
                        <li class="list-group-item" >Office No : <a href="tel:${newManager.getOfficeNumber()}">${newManager.getOfficeNumber()}</a></li>
                    </ul>
                </div>
                </div>
            `;

// Create HTML output in the output folder.
    writeFileAsync(`./output/Roster.html`, initialContent);
        })
    .then(function() {

// Function to ask if the user needs to add more members to the team
        addMemberFunc();
    })
}

// Function to see if we need to create an Engineer or Intern

async function addMemberFunc() {
    inquirer
        .prompt(addMember)
        .then(function(addMember) {
            if(addMember.title === "Engineer") {
                addEngineer();
            }
            else if(addMember.title === "Intern") {
                addIntern();
            }
            else {
                let lastContent = `
                    </div>
                    </div>    
                </body>
            </html>
        `;
            fs.appendFileSync(`./output/Roster.html`, lastContent);
            open('./output/Roster.html');
            }
        })
}

// Function to add an Engineer

async function addEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then(function(engineerQuestions){

            let newEngineer = new Engineer(engineerQuestions.name, engineerQuestions.id, engineerQuestions.email, engineerQuestions.github)

            let engineerDiv = `
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12" id="employeesInfo">              
            <div id="nameRole">
                <h4>${newEngineer.getName()}</h4>
                <div class="row"><p>${newEngineer.getRole()}</p></div>
            </div>
            <div>
                <ul class="list-group">
                    <li class="list-group-item">ID : ${newEngineer.getId()}</li>
                    <li class="list-group-item">Email : <a href="mailto:${newEngineer.getEmail()}">${newEngineer.getEmail()}</a></li>
                    <li class="list-group-item">Github : <a href="https://github.com/${newEngineer.getGithub()}" target="_blank">${newEngineer.getGithub()}</a></li>
                </ul>
            </div>      
            </div>
            `;

// Add Engineer div to output html

            fs.appendFileSync(`./output/Roster.html`, engineerDiv);

// Prompt to add more Members

            addMemberFunc();
        })
}

// Function to add an Intern

async function addIntern() {
    inquirer
        .prompt(internQuestions)
        .then(function(internQuestions) {

        let newIntern = new Intern(internQuestions.name, internQuestions.id, internQuestions.email, internQuestions.school)

        let internDiv = `
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12" id="employeesInfo">
        <div id="nameRole">
            <h4>${newIntern.getName()}</h4>
            <div class="row"><p>${newIntern.getRole()}</p></div>
        </div>
        <div>
            <ul class="list-group">
                <li class="list-group-item">ID : ${newIntern.getId()}</li>
                <li class="list-group-item">Email : <a href="mailto:${newIntern.getEmail()}">${newIntern.getEmail()}</a></li>
                <li class="list-group-item">School : ${newIntern.getSchool()}</li>
            </ul>
        </div>  
        </div>
        `;

// Add Intern div to output html

        fs.appendFileSync(`./output/Roster.html`, internDiv);

// Prompt to add more Members

        addMemberFunc()
    })
}

module.exports = employeeData;