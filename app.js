let oneEuroIs = {
    "JPY": 127.9,
    "USD": 1.2,
    "GBP": 0.8,
}

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD;
}

const fromDollarToYen = (dollar) => {
    return (oneEuroIs.JPY*dollar) / oneEuroIs.USD;
}

const fromYenToPound = (yen) => {
    return (oneEuroIs.GBP*yen) / oneEuroIs.JPY;
}


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };