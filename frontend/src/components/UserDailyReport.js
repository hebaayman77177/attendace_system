function UserDailyReport({ name, attendanceTime,hidden }) {

    return (
        <div hidden={hidden}>
            <div className="row">
                <span className="cl-md-12 cl-lg-4">Employee Name:</span> &nbsp;&nbsp;
                <span className="cl-md-12 cl-lg-8">{name}</span>
            </div>
            <div className="row">
                <span className="cl-md-12 cl-lg-4">Attendance Time:</span> &nbsp;&nbsp;
                <span className="cl-md-12 cl-lg-8">{attendanceTime}</span>
            </div>
        </div>
    );
};

export default UserDailyReport;