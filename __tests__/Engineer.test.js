const Engineer = require("../lib/engineer");
const Employee = require('../lib/employee');

describe("Engineer", () => {
    test("getName method collects the engineer's name from the user.", () => {
        const engineer = new Engineer('Adam', '5b', 'adam@email.com', 'Eng');

        expect(engineer.name).toEqual(expect.any(String))
        expect(engineer.name).toEqual('Adam')
    })

    test("getID method collects the engineer's ID from the user.", () => {
        const engineer = new Engineer('Adam', '5b', 'adam@email.com', 'Eng');

        expect(engineer.id).toEqual(expect.any(String))
        expect(engineer.id).toEqual('5b')
    })

    test("getEmail method collects the engineer's email from the user.", () => {
        const engineer = new Engineer('Adam', '5b', 'adam@email.com', 'Eng');

        expect(engineer.email).toEqual(expect.any(String))
        expect(engineer.email).toEqual('adam@email.com')
    })
    test("should create an engineer object", () => {
        const engineer = new Engineer('Adam', '5b', 'adam@email.com', 'Eng');

        expect(engineer.github).toEqual(expect.any(String));
        expect(engineer.github).toEqual('Eng')
        expect(engineer.getGitHub()).toEqual('Eng')
    })
})