const jwt = require('jsonwebtoken');

const db = require("../config/sequelize.config");
const Admin = db.admins;

const accessTokenSecret = 'youraccesstokensecret';

module.exports = app => {
    
    logInUser = (req, res) => {
        const {email, password} = req.body;

        Admin.findOne({
            where: {
                email: email,
                password: password
            }
        })
        .then(user => {
            if(user){
                const accessToken = jwt.sign({email: user.email}, accessTokenSecret);

                res.json({
                    accessToken
                });
            } else {
                res.send('Email or password are incorrect')
            }
        })
        .catch(err => {
            res.status(401).send({
                message:
                    err.message || "Athentication failed"
            });
        });
    }
    

    var router = require("express").Router();

    router.post('/', logInUser);

    app.use('/login', router);
}