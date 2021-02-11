const db = require('../models');
const static_rule = db.static_rule;
const month_info = db.month_info;
const attendance = db.attendance;
const static_proj_info = db.static_proj_info;


// month | year | num_days | num_vacs

(async () => {
    await static_proj_info.create({sender_email:'hebaayman717@gmail.com'});
    // await static_rule.create({ early_limit_hour: 9, early_limit_minute: 15,late_limit_hour: 10, late_limit_minute: 0,late_limit:new Date(0,0,0,10,0,0),early_limit:new Date(0,0,0,9,15,0) });
    // await month_info.create({month:2,year:2021,num_days:31,num_vacs:8});
    // await attendance.create({
    //     "user_id":1,
    //     "attendance_year": 2021,
    //     "attendance_month": 2,
    //     "attendance_day": 9,
    //     "attendance_hour": 9,
    //     "attendance_minute": 0,
    //     "attendance_full_date": "2/8/2021",
    //     "attendance_full_time": new Date(0,0,0,10,0,0),
    //     "type": "attendance"
    // });
    // await attendance.create({
    //     "user_id":1,
    //     "attendance_year": 2021,
    //     "attendance_month": 2,
    //     "attendance_day": 9,
    //     "attendance_hour": 9,
    //     "attendance_minute": 0,
    //     "attendance_full_date": "2/8/2021",
    //     "attendance_full_time": new Date(0,0,0,10,30,0),
    //     "type": "attendance"
    // });
    // await attendance.create({
    //     "user_id":1,
    //     "attendance_year": 2021,
    //     "attendance_month": 2,
    //     "attendance_day": 9,
    //     "attendance_hour": 9,
    //     "attendance_minute": 0,
    //     "attendance_full_date": "2/8/2021",
    //     "attendance_full_time": new Date(0,0,0,10,45,0),
    //     "type": "attendance"
    // });
    // await attendance.create({
    //     "user_id":1,
    //     "attendance_year": 2021,
    //     "attendance_month": 2,
    //     "attendance_day": 10,
    //     "attendance_hour": 9,
    //     "attendance_minute": 15,
    //     "attendance_full_date": "2/8/2021",
    //     "attendance_full_time": new Date(0,0,0,9,20,0),
    //     "type": "attendance"
    // });
    // await attendance.create({
    //     "user_id":1,
    //     "attendance_year": 2021,
    //     "attendance_month": 2,
    //     "attendance_day": 11,
    //     "attendance_hour": 9,
    //     "attendance_minute": 17,
    //     "attendance_full_date": "2/8/2021",
    //     "attendance_full_time": new Date(0,0,0,9,10,0),
    //     "type": "attendance"
    // });
    // await attendance.create({
    //     "user_id":1,
    //     "attendance_year": 2021,
    //     "attendance_month": 2,
    //     "attendance_day": 12,
    //     "attendance_hour": 10,
    //     "attendance_minute": 0,
    //     "attendance_full_date": "2/8/2021",
    //     "attendance_full_time": new Date(0,0,0,9,15,0),
    //     "type": "attendance"
    // });
    // await attendance.create({
    //     "user_id":1,
    //     "attendance_year": 2021,
    //     "attendance_month": 2,
    //     "attendance_day": 12,
    //     "attendance_hour": 10,
    //     "attendance_minute": 10,
    //     "attendance_full_date": "2/8/2021",
    //     "attendance_full_time":new Date(0,0,0,8,20,0),
    //     "type": "attendance"
    // });

    // await attendance.create({
    //     "user_id":1,
    //     "attendance_year": 2021,
    //     "attendance_month": 1,
    //     "attendance_day": 9,
    //     "attendance_hour": 9,
    //     "attendance_minute": 0,
    //     "attendance_full_date": "2/8/2021",
    //     "attendance_full_time": new Date(0,0,0,10,45,0),
    //     "type": "attendance"
    // });

    // await attendance.create({
    //     "user_id":1,
    //     "attendance_year": 2021,
    //     "attendance_month": 1,
    //     "attendance_day": 12,
    //     "attendance_hour": 10,
    //     "attendance_minute": 10,
    //     "attendance_full_date": "2/8/2021",
    //     "attendance_full_time":new Date(0,0,0,8,20,0),
    //     "type": "attendance"
    // });

}
)()