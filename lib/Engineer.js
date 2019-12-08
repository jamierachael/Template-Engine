// The first class is an Employee parent class with the following properties and

// require Employ - inherit class example


const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }

}
module.exports = Engineer;





