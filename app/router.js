module.exports = app => {
    const admins = require('./controller.js');

    var router = require("express").Router;

    router.get('/', admins.findAll);
    router.post('/', admins.create);
    router.get('/:id', admins.findOne);

    app.use('/admin', router);
}