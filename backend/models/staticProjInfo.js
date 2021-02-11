module.exports = (sequelize, Sequelize) => {
    const Static_proj_info = sequelize.define("static_proj_info", {
        sender_email: {
            type: Sequelize.STRING
        }

    });

    return Static_proj_info;
};