module.exports = app => {
    const employees = require('../controllers/controller.js');

    var router = require("express").Router();

    router.get('/', employees.findAll);
    router.post('/', employees.create);
    router.get('/:_id', employees.findOne);

    app.use('/employee', router);
}