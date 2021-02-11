module.exports = (sequelize, Sequelize) => {
    const Static_rule = sequelize.define("static_rule", {
        early_limit_hour: {
            type: Sequelize.INTEGER
        },
        early_limit_minute: {
            type: Sequelize.INTEGER
        },
        late_limit_hour: {
            type: Sequelize.INTEGER
        },
        late_limit_minute: {
            type: Sequelize.INTEGER
        },
        early_limit: {
            type: Sequelize.DATE
        },
        late_limit: {
            type: Sequelize.DATE
        }

    });

    return Static_rule;
};