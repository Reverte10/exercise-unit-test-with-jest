
test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})

test("One euro should be 127.9 yen", function(){
    const { fromDollarToYen } = require('./app.js')
    const resultyen = ((127.9*3.5) / 1.2);
    expect(fromDollarToYen(3.5)).toBe(resultyen);
})

test("One euro should be 0.8 pound", function(){
    const { fromYenToPound } = require('./app.js')
    const resultpound = ((0.8*3.5) / 127.9);
    expect(fromYenToPound(3.5)).toBe(resultpound);
})