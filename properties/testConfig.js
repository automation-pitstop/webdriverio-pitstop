module.exports = {
    dev: {
        url: "https://the-internet.herokuapp.com/dev",
        // implicitWait: 30000,
        waitforTimeout: 30000,
        waitforInterval: 5,
    },
    tst: {
        url: "https://the-internet.herokuapp.com",
        // implicitWait: 30000,
        waitforTimeout: 30000,
        waitforInterval: 5,
    },
    prod: {
        url: "https://the-internet.herokuapp.com",
        // implicitWait: 30000,
        waitforTimeout: 30000,
        waitforInterval: 5,
    },
};

// module.exports = {dev,tst,prod};
// const dev = {
//     url: "https://the-internet.herokuapp.com/dev",
//     implicitWait: 30000,
//     waitforTimeout: 30000,
//     waitforInterval: 5,
// };
// const tst = {
//     url: "https://the-internet.herokuapp.com/dev",
//     implicitWait: 30000,
//     waitforTimeout: 30000,
//     waitforInterval: 5,
// };
// const prod = {
//     url: "https://the-internet.herokuapp.com/dev",
//     implicitWait: 30000,
//     waitforTimeout: 30000,
//     waitforInterval: 5,
// };
