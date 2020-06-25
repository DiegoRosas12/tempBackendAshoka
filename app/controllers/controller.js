const db = require("../config/sequelize.config");
const Employee = db.employees;

exports.create = (req, res) => {
    const admin = {
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    };

    Employee.create(admin)
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
    Employee.findAll()
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
    Employee.findOne({
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


