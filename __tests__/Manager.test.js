const Manager = require("../lib/manager");
const Employee = require('../lib/employee');

describe("Manager", () => {
    test("getName method collects the manager's name from the user.", () => {
        const manager = new Manager('Adam', '5b', 'adam@email.com', 'Manager');

        expect(manager.name).toEqual(expect.any(String))
        expect(manager.name).toEqual('Adam')
    })

    test("getID method collects the manager's ID from the user.", () => {
        const manager = new Manager('Adam', '5b', 'adam@email.com', 'Manager');

        expect(manager.id).toEqual(expect.any(String))
        expect(manager.id).toEqual('5b')
    })

    test("getEmail method collects the manager's email from the user.", () => {
        const manager = new Manager('Adam', '5b', 'adam@email.com', 'Manager');

        expect(manager.email).toEqual(expect.any(String))
        expect(manager.email).toEqual('adam@email.com')
    })
    test("should create a manager object", () => {
        const manager = new Manager('Adam', '5b', 'adam@email.com', 'Manager');

        expect(manager.officeNumber).toEqual(expect.any(String));
        expect(manager.officeNumber).toEqual('Manager')
        expect(manager.getOfficeNumber()).toEqual('Manager')
    })
})