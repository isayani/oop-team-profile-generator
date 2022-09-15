// Test for Employee class
const Employee = require('../lib/employee');

test('testing datatype of employee', () => {
    const e = new Employee 

    expect(typeof(e)).toBe('object')
});

test('testing getName method', () => {
    const e = new Employee('Jane', 5, 'jane@test.com')

    expect(e.getName()).toBe('Jane');
    
});

test('testing getId method', () => {
    const e = new Employee('Jane', 5, 'jane@test.com')

    expect(e.getId()).toBe(5);
});

test('testing getEmail method', () => {
    const e = new Employee('Jane', 5, 'jane@test.com')

    expect(e.getEmail()).toBe('jane@test.com');
});