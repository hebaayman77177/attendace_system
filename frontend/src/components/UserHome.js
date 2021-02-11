
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import UserDailyReport from './UserDailyReport';
import UserMonthlyReport from "./UserMonthlyReport";
import AttendanceModal from "./AttendanceModal";
import { Button, Card, Nav } from 'react-bootstrap';
import { logout } from '../actions/auth';
import { DidattendToday } from '../actions/attendance'
import AttendanceService from '../services/attendance.service'



function UserHome(props) {

    useEffect(()=>{
        props.DidattendToday();
    },[])


    const [modalShow, setModalShow] = useState(false);
    const [doRenderDaily,setDoRenderDaily] = useState(true);
    const [monthAttendance,setMonthAttendance] = useState({});

    // return (<Button className={"btn btn-danger "} onClick={() => { setModalShow(true) }}>Take Attendance</Button>);
    const takeAttendace = async () => {
        await AttendanceService.attend();
        props.DidattendToday();
        setModalShow(true) ;
    }

    function renderAttendNow() {
        return (props.didAttend?null:<Button className={"btn btn-danger "} onClick={takeAttendace}>Take Attendance</Button>);
    }

    function renderLogOut() {
        return props.isLoggedIn ? (<Button className={"btn btn-primary "} onClick={() => { props.logout() }}>Log Out</Button>) : null;
    }

    function renderButtonsGroub() {
        return (
            <>
                { renderAttendNow()}
                { renderLogOut()}
            </>
        )
    }
    async function getMonthlyReport(){
        const {data:monthlyReport} = await AttendanceService.getUserMonthlyReport();
        setMonthAttendance(monthlyReport)
        console.log("🚀 ~ file: UserHome.js ~ line 50 ~ getMonthlyReport ~ monthlyReport", monthlyReport)

        setDoRenderDaily(false)
    }
    return (
        <>
            <NavBar firstName={"heba"} renderButtons={renderButtonsGroub} />
            <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                        <Nav.Item>
                            <Nav.Link  onClick={()=>setDoRenderDaily(true)}>Daily Report</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={getMonthlyReport} >Monthly Report</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>

                    <div className={"px-5 py-5"}>
                        <UserDailyReport hidden={!doRenderDaily} name={props.firstName} attendanceTime={props.attendanceTime} />
                        <UserMonthlyReport hidden={doRenderDaily} attendanceTimes={monthAttendance.attendance} lateTimes={monthAttendance.late} />
                    </div>
                </Card.Body>
            </Card>
            <AttendanceModal show={modalShow}
                onHide={() => setModalShow(false)}
                heading={"Attendance Successfully Done"}
                body={() => { return (<UserDailyReport name={"heba"} attendanceTime={props.attendanceTime} />) }}
            />
        </>
    );
}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        firstName: state.auth.user.first_name,
        didAttend:state.attendance.didAttend,
        attendanceTime:state.attendance.attendance.attendance_full_time
    }
}
export default connect(mapStateToProps, { logout, DidattendToday })(UserHome);
