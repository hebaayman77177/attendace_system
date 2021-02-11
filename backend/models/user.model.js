module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.INTEGER
        },
        password: {
            type: Sequelize.STRING
        }
    },{underscored: true});

    return User;
};