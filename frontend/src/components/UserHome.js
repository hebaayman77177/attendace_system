
import { useState } from 'react';
import NavBar from './NavBar';
import UserDailyReport from './UserDailyReport';
import UserMonthlyReport from "./UserMonthlyReport";
import AttendanceModal from "./AttendanceModal";
import { Button, Card, Nav } from 'react-bootstrap';



function UserHome() {
    const [modalShow, setModalShow] = useState(false);

    function renderAttendNow() {
        return (<Button className={"btn btn-danger "} onClick={() => { setModalShow(true) }}>Take Attendance</Button>);
    }

    return (
        <>
            <NavBar firstName={"heba"} renderButtons={renderAttendNow} />
            <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                        <Nav.Item>
                            <Nav.Link >Daily Report</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link >Monthly Report</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>

                    <div className={"px-5 py-5"}>
                        {/* <UserDailyReport name={"heba"} attendanceTime={"18 AM"} /> */}
                        <UserMonthlyReport attendanceTimes={"3"} lateTimes={"4"} absenceTimes={"5"} />
                    </div>
                </Card.Body>
            </Card>
            <AttendanceModal show={modalShow}
                onHide={() => setModalShow(false)}
                heading={"Attendance Successfully Done"}
                body={() => { return(<UserDailyReport name={"heba"} attendanceTime={"18 AM"} />) }}
            />
        </>
    );
}

export default UserHome;
