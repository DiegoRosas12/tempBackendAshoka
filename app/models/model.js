module.exports = (sequelize, type) => {
    const Employee = sequelize.define('Employees', {
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
        role: {
            type: type.ENUM('admin', 'employee'),
            values: ['admin', 'employee'],
            allowNull: false
        }
        
    },
    {
        timestamps: false
    })

    return Employee;
}