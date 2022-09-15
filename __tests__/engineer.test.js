const Engineer = require('../lib/engineer');

test('testing datatype of Engineer', () => {
    const e = new Engineer 

    expect(typeof(e)).toBe('object')
});

test('testing getName method', () => {
    const e = new Engineer('Julie', 4, 'julie@test.com', 'julieHub')

    expect(e.getName()).toBe('Julie');
    
});

test('testing getId method', () => {
    const e = new Engineer('Julie', 4, 'julie@test.com', 'julieHub')

    expect(e.getId()).toBe(4);
});

test('testing getEmail method', () => {
    const e = new Engineer('Julie', 4, 'julie@test.com', 'julieHub')

    expect(e.getEmail()).toBe('julie@test.com');
});

test('testing getGithub method', () => {
    const e = new Engineer('Julie', 4, 'julie@test.com', 'julieHub')

    expect(e.getGithub()).toBe('julieHub');
});