const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
// const path = require("path");
const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

const team = require("./src/page-template.js");
// const { option } = require("yargs");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// empty array for team objects
const teamProfiles = [];

// ask for manager outputInfo
let ManagerInfo = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the team Manager's name?",
        },
        {
            type: "number",
            name: "managerId",
            message: "What is their employee ID number?",
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is their email address?",
        },
        {
            type: "number",
            name: "officeNumber",
            message: "What is their office number?",
        },
    ]).then(data => {
        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber);
        teamProfiles.push(manager);

        options();
    })
}

// ask for Engineer outputInfo
let EngineerInfo = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the name of this Engineer?",
        },
        {
            type: "number",
            name: "engineerId",
            message: "What is their employee ID number?",
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is their email address?",
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is their GitHub username?",
        },
    ]).then(data => {
        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
        teamProfiles.push(engineer);

        options();
    })
}

// ask for Intern outputInfo
let InternInfo = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the name of this Intern?",
        },
        {
            type: "number",
            name: "internId",
            message: "What is their employee ID number?",
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is their email address?",
        },
        {
            type: "input",
            name: "internSchool",
            message: "What school have they attended?",
        },
    ]).then(data => {
        const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
        teamProfiles.push(intern);

        options();
    })
}

// run options and ask either to add another team member or finish building team
const options = () =>
    inquirer.prompt([
        {
            type: "list",
            name: "menu",
            message: "Please select your next role or select 'Finished' to build a team:",
            choices: ["Manager", "Engineer", "Intern", "Finished"],
        },
    ]).then(data => {
        const role = data.menu;
        if (role === "Manager") {
            ManagerInfo();
        } else if (role === "Engineer") {
            EngineerInfo();
        } else if (role === "Intern") {
            InternInfo();
        } else if (role === "Finished") {
            generateTeam();
        }
    });

// end question info then HTML is generated
const generateTeam = () => {
    console.log(teamProfiles);
    const creatHTML = team(teamProfiles);
    fs.writeFileSync("./gen/index.html", creatHTML);
    console.log("Successfully wrote your index.HTML file to gen folder.")
}

// call option
options();