module.exports = (sequelize, type) => {
    const Admin = sequelize.define('Admins', {
        _id: {
            primaryKey: true,
            autoIncrement: true,
            type: type.INTEGER,
            allowNull: false
        },
        email: {
            type: type.STRING,
            allowNull: false
        },
        password: {
            type: type.STRING,
            allowNull: false
        },
        
    },
    {
        timestamps: false
    })

    return Admin;
}