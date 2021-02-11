module.exports = (sequelize, Sequelize) => {
    const Month_info = sequelize.define("month_info", {

        month: {
            type: Sequelize.INTEGER
        },
        year: {
            type: Sequelize.INTEGER
        },
        num_days: {
            type: Sequelize.INTEGER
        },
        num_vacs: {
            type: Sequelize.INTEGER
        }
    });

    return Month_info;
};