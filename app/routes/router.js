module.exports = app => {
    const admins = require('../controllers/controller.js');

    var router = require("express").Router();

    router.get('/', admins.findAll);
    router.post('/', admins.create);
    router.get('/:_id', admins.findOne);

    app.use('/admin', router);
}