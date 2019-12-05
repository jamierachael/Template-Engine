// The first class is an Employee parent class with the following properties and
// methods:

// name
// id
// title
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'
// In addition to Employee's properties and methods, Manager will also have:
// officeNumber
// getRole() // Overridden to return 'Manager'

class Manager {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email;
        // Where to add office number?
        this.officeNumber = officeNumber;
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
    // getRoleOverwrite() {
    //     console.log(this.title);
    //  
}




