const db = require('./config');
const Admin = db.Admin;

exports.create = (req, res) => {
    const admin = {
        email: req.body.email,
        password: req.body.password
    };

    Admin.create(admin)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(401).send({
                message:
                    err.message || "Admin could not be added"
            });
        });
}

exports.findAll = (req, res) => {
    Admin.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(401).send({
                message:
                    err.message || "No admins where found"
            });
        });
}

exports.findOne = (req, res) => {
    const _id = req.params._id;
    Admin.findOne({
        where: {
            _id: _id
        }
    })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(401).send({
                message:
                    err.message || `No admins where found with id=${_id}`
            });
        });
}


