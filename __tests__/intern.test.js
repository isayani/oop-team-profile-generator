// Test for Intern class
const Intern = require('../lib/Intern');

test('testing datatype of Intern', () => {
    const e = new Intern 

    expect(typeof(e)).toBe('object')
});

test('testing getName method', () => {
    const e = new Intern('Jaya', 3, 'jaya@test.com', 'Dope Prep')

    expect(e.getName()).toBe('Jaya');
    
});

test('testing getId method', () => {
    const e = new Intern('Jaya', 3, 'jaya@test.com', 'Dope Prep')

    expect(e.getId()).toBe(3);
});

test('testing getEmail method', () => {
    const e = new Intern('Jaya', 3, 'jaya@test.com', 'Dope Prep')

    expect(e.getEmail()).toBe('jaya@test.com');
});

test('testing getSchool method', () => {
    const e = new Intern('Jaya', 3, 'jaya@test.com', 'Dope Prep')

    expect(e.getSchool()).toBe('Dope Prep');
});