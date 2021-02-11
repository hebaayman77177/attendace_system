module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("attendance", {
        user_id: {
            type: Sequelize.STRING
        },
        attendance_year: {
            type: Sequelize.INTEGER
        },
        attendance_month: {
            type: Sequelize.INTEGER
        },
        attendance_day: {
            type: Sequelize.INTEGER
        },
        attendance_hour: {
            type: Sequelize.INTEGER
        },
        attendance_minute: {
            type: Sequelize.INTEGER
        },
        attendance_full_date: {
            type: Sequelize.DATEONLY
        },
        attendance_full_time: {
            type: Sequelize.DATE
        },
        attendance_full_date_time: {
            type: Sequelize.DATE
        },
        type: {
            type: Sequelize.STRING
        }

    },{underscored: true});

    return User;
};

