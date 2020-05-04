const {  INVALID_PARAMS} = require("./constants");
const patt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const check=  /^[a-zA-Zа-яА-Я]+$/ui;


module.exports = {
    createAccountMiddleware(req, res, next) {
        console.log("createAccountMiddleware");
        const {firstName, lastName, email} = req.body;
        if (!firstName || !lastName || !email) {
            console.log("We are here not exists!");
            return next(INVALID_PARAMS);
        }
        if (!check.test(firstName)) {
            console.log("We are here firstName!");
            return next(INVALID_PARAMS);
        }
        if (!check.test(lastName)) {
            console.log("We are here lastName!");
            return next(INVALID_PARAMS);
        }
        if (!firstName || firstName.length < 1 || firstName.length > 50) {
            console.log("We are here length name!");
            return next(INVALID_PARAMS);
        }
        if (!patt.test(email)) {
            console.log("We are here email!");
            return next(INVALID_PARAMS);
        }

    },
};