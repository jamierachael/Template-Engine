// The first class is an Employee parent class with the following properties and
// methods:

// name
// id
// title
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'
// In addition to Employee's properties and methods, Intern will also have:
// school
// getSchool()
// getRole() // Overridden to return 'Intern'

class Inter {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;
        this.school = school;
    }
    getName() {
        console.log(this.name);
        return this.name;
    }
    getId() {
        console.log(this.id);
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        console.log(this.title);
        return this.title;
    }
    getSchool() {
        console.log(this.school);
        return this.school
    }
    // getRoleOverwrite() {
    //     console.log(this.title);
    //     return this.title;
}




