function UserMonthlyReport({ attendanceTimes, lateTimes, absenceTimes, hidden }) {

    return (
        <div hidden={hidden}> 
            <div className="row">
                <span className="cl-md-12 cl-lg-4">Attendance Times:</span> &nbsp;&nbsp;
                <span className="cl-md-12 cl-lg-8">{attendanceTimes}</span>
            </div>
            <div className="row">
                <span className="cl-md-12 cl-lg-4">Late Times:</span> &nbsp;&nbsp;
                <span className="cl-md-12 cl-lg-8">{lateTimes}</span>
            </div>
            {/* <div className="row">
                <span className="cl-md-12 cl-lg-4">Absence Times</span> &nbsp;&nbsp;
                <span className="cl-md-12 cl-lg-8">{absenceTimes}</span>
            </div> */}
        </div>
    );
};

export default UserMonthlyReport;