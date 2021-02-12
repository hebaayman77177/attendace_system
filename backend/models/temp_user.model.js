module.exports = (sequelize, Sequelize) => {
    const TempUser = sequelize.define("temp_user", {
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
        },
        temp_uid:{
        type: Sequelize.STRING
    }
    }, { underscored: true });

return TempUser;
};