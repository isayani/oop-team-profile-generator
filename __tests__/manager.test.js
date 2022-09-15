const Manager = require('../lib/Manager');'jayaHub'

test('testing datatype of Manager', () => {
    const e = new Manager 

    expect(typeof(e)).toBe('object')
});

test('testing getName method', () => {
    const e = new Manager('Joon', 3, 'joon@test.com', 350)

    expect(e.getName()).toBe('Joon');
    
});

test('testing getId method', () => {
    const e = new Manager('Joon', 3, 'joon@test.com', 350)

    expect(e.getId()).toBe(3);
});

test('testing getEmail method', () => {
    const e = new Manager('Joon', 3, 'joon@test.com', 350)

    expect(e.getEmail()).toBe('joon@test.com');
});

test('testing getOfficeNumber method', () => {
    const e = new Manager('Joon', 3, 'joon@test.com', 350)

    expect(e.getOfficeNumber()).toBe(350);
});