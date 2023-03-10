// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require('../lib/employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, 'Engineer')
        this.github = github
    }

    getGitHub() {
        return this.github
    }
}

module.exports = Engineer;