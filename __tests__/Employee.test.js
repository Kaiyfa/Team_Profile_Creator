const Employee = require("../lib/employee");

describe("Employee", () => {
    test("should create an employee object", () => {
        const employee = new Employee('Adam', '3', 'Adam@email.Adam@email.com', 'Employee');

        expect(employee instanceof Employee).toEqual(true);
    })

    test("getName method collects the employee's name from the user.", () => {
        const employee = new Employee('Adam', '5b', 'Adam@email.com', 'Employee');

        expect(employee.name).toEqual(expect.any(String))
        expect(employee.name).toEqual('Adam')
    })

    test("getID method collects the employee's ID from the user.", () => {
        const employee = new Employee('Adam', '3', 'Adam@email.com', 'Employee');

        expect(employee.id).toEqual(expect.any(String))
        expect(employee.id).toEqual('3')
    })

    test("getEmail method collects the employee's email from the user.", () => {
        const employee = new Employee('Adam', '3', 'Adam@email.com', 'Employee');

        expect(employee.email).toEqual(expect.any(String))
        expect(employee.email).toEqual('Adam@email.com')
    })
})