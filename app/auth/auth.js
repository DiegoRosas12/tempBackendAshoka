const jwt = require('jsonwebtoken');

const db = require("../config/sequelize.config");
const Employee = db.employees;

const accessTokenSecret = 'youraccesstokensecret';

const refreshTokenSecret = 'yourrefreshtokensecrethere';
const refreshTokens = [];


module.exports = app => {
    
    logInUser = (req, res) => {
        const {email, password} = req.body;

        Employee.findOne({
            where: {
                email: email,
                password: password
            }
        })
        .then(user => {
            if(user){
                const accessToken = jwt.sign({email: user.email, role: user.role}, accessTokenSecret, { expiresIn: '24h' });
                const refreshToken = jwt.sign({ email: user.email, role: user.role }, refreshTokenSecret);
                refreshTokens.push(refreshToken);

                res.json({
                    accessToken,
                    refreshToken
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
    
    token = (req, res) => {
        const { token } = req.body;
    
        if (!token) {
            return res.sendStatus(401);
        }
    
        if (!refreshTokens.includes(token)) {
            return res.sendStatus(403);
        }
    
        jwt.verify(token, refreshTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
    
            const accessToken = jwt.sign({ email: user.email, role: user.role }, accessTokenSecret, { expiresIn: '24h' });
    
            res.json({
                accessToken
            });
        });
    }

    logout = (req, res) => {
        const {token} = req.body;
        refreshTokens = refreshTokens.filter(token => t !== token);

        res.send("logout successfull");

    }

    
    // Roter settings

    var router = require("express").Router();
    
    router.post('/login', logInUser);
    router.post('/token', token);
    router.post('/logout', logout);

    app.use('/', router);
}