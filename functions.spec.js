const functions = require('./functions');

// it ou test

it(`Somando dois valores`, () => {
    expect(functions.soma(2, 2)).toBe(4);
})

it(`Should be null`, () => {
    expect(functions.isNull()).toBeNull();
})

it(`Should be Falsy`, () => {
    expect(functions.checkValue(0)).toBeFalsy();
})

it(`Should be Pedro Henrique`, () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Pedro',
        lastName: 'Henrique'
    });
})

it(`Should be under 1600`, () => {

    const val1 = 700;
    const val2 = 800;

    expect(val1 + val2).toBeLessThanOrEqual(1600);
})

it(`Using regex to match expression`, () => {
    expect("Developer").not.toMatch(/JS/i)
})

it(`Admin should be in usernames`, () => {
    const usernames = ["Pedro", "Guilherme"];

    expect(usernames).toContain("Pedro")
})

it(`User fetched name should be Glenna Reichert
`, async function() {
    expect.assertions(1);

    const data = await functions.fetchUser()
    
    expect(data.name).toEqual("Glenna Reichert")
    
})