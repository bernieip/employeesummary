// Questions for Manager

const managerQuestions = [
    {
        message: "Welcome to the Employee Team Creator. Please enter your Team Name : ",
        name: "teamName",
        default: "Cool Crew",
        type: "input",
        validate: function (value) {
            let string = value.match(/^\s*\S+.*/);
            if (string) {
                return true;
            } else {
                return "Please enter a Team Name";
            }
        }
    },
    {
        message: "Enter Manager's Name : ",
        name: "Name",
        default: "John Wick",
        type: "input",
        validate: function (value) {
            let string = value.match(/^\s*\S+.*/);
            if (string) {
                return true;
            } else {
                return "Please enter the Manager's Name";
            }
        }
    },
    {
        message: "What is the Manager's Employee ID ? ",
        name: "id",
        default: "007",
        type: "input",
        validate: function (value) {
            let valid = !isNAN(parseFloat(value));
            return valid  || "Please Enter a Number";
        },
    },
    {
        message: "What is the Manager's Email Address ? ",
        name: "email",
        default: "johnwick@gmail.com",
        type: "input",
        validate: function(value) {
            let data = value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            if (data) {
                return true;
            } else {
                return "Please enter a Valid email address";
            }
        }
    },
    {
        message: "What is the Manager's Office Number ? ",
        name: "officeNumber",
        default: "416 123 4567",
        type: "input",
        validate: function(value) {
            let phone = value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
            if (phone) {
                return true;
            } else {
                return "Please enter a Valid phone number";
            }
        }
    }
];

// Questions to add more members to the team

const addMember = [
    {
        type: "list",
        message: "Add more members to your team ? ",
        choices: ["Engineer", "Intern", "NO"],
        name: "title"
    }
];

// Questions to add an Engineer

const engineerQuestion = [
    {
        message: "Enter Engineer's Name : ",
        name: "name",
        default: "Neo Anderson",
        type: "input",
        validate: function(value){
            let string = value.match(/^\s*\S+.*/);
            if (string) {
                return true;
            } else {
                return "Please enter the Engineer's Name";
            }
        }
    },
    {
        message: "What is the Engineer's Employee ID ? ",
        name: "id",
        default: "005",
        type: "input",
        validate: function( value ) {
            let valid = !isNaN(parseFloat(value));
            return valid || "Please enter a Number";
        },
    },
    {
        message: "What is the Engineer's Email Address ? ",
        name: "email",
        default: "neo.anderson@gmail.com",
        type: "input",
        validate: function(value){
            let data =value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            if (data) {
                return true;
            } else {
                return "Please enter a Valid email address";
            }
        }
    },
    {
        message: "What is the Engineer's GitHub username? ",
        name: "github",
        default: "neoanderson",
        type: "input",
        validate: function(value){
            let string = value.match(/^\s*\S+.*/);
            if (string) {
                return true;
            } else {
                return "Please enter the Engineer's Github username";
            }
        }
    }
];

// Questions to add an Intern

const internQuestions = [
    {
        message: "Enter Intern's Name : ",
        name: "name",
        default: "Keanu Reeves",
        type: "input",
        validate: function(value){
            let string = value.match(/^\s*\S+.*/);
            if (string) {
                return true;
            } else {
                return "Please enter the Intern's Name";
            }
        }
    },
    {
        message: "What is the Intern's Employee ID ? ",
        name: "id",
        default: "009",
        type: "input",
        validate: function( value ) {
            let valid = !isNaN(parseFloat(value));
            return valid || "Please enter a Number";
        },
    },
    {
        message: "What is the Intern's Email Address ? ",
        name: "email",
        default: "keanu.reeves@gmail.com",
        type: "input",
        validate: function(value){
            let data =value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            if (data) {
                return true;
            } else {
                return "Please enter a Valid email address";
            }
        }
    },
    {
        message: "What is the Intern's current school name ? ",
        name: "school",
        default: "University of Toronto",
        type: "input",
        validate: function(value){
            let string = value.match(/^\s*\S+.*/);
            if (string) {
                return true;
            } else {
                return "Please enter a school Name";
            }
        }
    }
];

// Exports question functions

module.exports = {
    managerQuestions,
    engineerQuestion,
    internQuestions,
    addMember,
};