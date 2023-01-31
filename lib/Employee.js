// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName(name) {
        if (typeof name) {
            return this.name;
        } else {
            throw new Error("It must be a name")
        }

    }

    getID(id) {
        if (typeof id) {
            return this.id
        } else {
            throw new Error("It must be an ID")
        }
    }

    getEmail(email) {
        if (typeof email) {
            return this.email
        } else {
            throw new Error("iT must be an email")
        }
    }

    getRole(role) {
        if (typeof role) {
            return this.role;
        } else {
            throw new Error("It must be a role")
        }
    }
}
module.exports = Employee;