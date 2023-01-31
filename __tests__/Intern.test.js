const Intern = require("../lib/intern");
const Employee = require('../lib/employee');

describe("Intern", () => {
    test("getName method collects the intern's name from the user.", () => {
        const intern = new Intern('Adam', '5b', 'adama@email.com', 'intern');

        expect(intern.name).toEqual(expect.any(String))
        expect(intern.name).toEqual('Adam')
    })

    test("getID method collects the intern's ID from the user.", () => {
        const intern = new Intern('Adam', '5b', 'john@fakemail.', 'intern');

        expect(intern.id).toEqual(expect.any(String))
        expect(intern.id).toEqual('5b')
    })

    test("getEmail method collects the intern's email from the user.", () => {
        const intern = new Intern('Adam', '5b', 'john@fakemail.', 'intern');

        expect(intern.email).toEqual(expect.any(String))
        expect(intern.email).toEqual('john@fakemail.')
    })
    test("should create an intern object", () => {
        const intern = new Intern('Adam', '5b', 'john@fakemail.', 'intern');

        expect(intern.school).toEqual(expect.any(String));
        expect(intern.school).toEqual('intern')
        expect(intern.getSchool()).toEqual('intern')
    })
})