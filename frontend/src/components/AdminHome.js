
import { useEffect, useState } from 'react';
import _ from 'lodash';
import NavBar from './NavBar';
import AdminTable from "./AdminTable";
import { Card, Nav } from 'react-bootstrap';
import AttendanceService from '../services/attendance.service'




function AdminHome() {

    const [usersReport, setUsersReport] = useState([]);
    const [columns, setColumns] = useState([]);
    const [linkToDisplay, setLinkToDisplay] = useState(0);
    const displayUsersMonthlyReport = async () => {
        let report = await AttendanceService.getUserMonthlyReport();
        // report = [
        //     { user_id: 1, name: 'George', animal: 'Monkey' },
        //     { user_id: 2, name: 'Jeffrey', animal: 'Giraffe' },
        //     { user_id: 3, name: 'Alice', animal: 'Giraffe' },
        //     { user_id: 4, name: 'Foster', animal: 'Tiger' }]
        setUsersReport(report)
        setColumns(_.keys(report[0]).map(key => { return { dataField: key, text: key, sort: true } }));
        console.log("🚀 ~ file: AdminHome.js ~ line 16 ~ AdminHome ~ columns", columns)
        console.log("🚀 ~ file: AdminHome.js ~ line 15 ~ AdminHome ~ usersReport", usersReport)
        // columns = _.keys(usersReport[0]).map(key => { return { dataField: key, text: key, sort: true } })
    }
    const displayUsersFullReport = async () => {
        let report = await AttendanceService.getUserFullReport();
        // report = [
        //     { user_id: 1, name: 'George', animal: 'Monkey' },
        //     { user_id: 2, name: 'Jeffrey', animal: 'Giraffe' },
        //     { user_id: 3, name: 'Alice', animal: 'Giraffe' },
        //     { user_id: 4, name: 'Foster', animal: 'Tiger' }]
        setUsersReport(report);
        setColumns(_.keys(report[0]).map(key => { return { dataField: key, text: key, sort: true } }))
        console.log("🚀 ~ file: AdminHome.js ~ line 16 ~ AdminHome ~ columns", columns)
        console.log("🚀 ~ file: AdminHome.js ~ line 15 ~ AdminHome ~ usersReport", usersReport)
        // columns = _.keys(usersReport[0]).map(key => { return { dataField: key, text: key, sort: true } })
    }
    useEffect(() => {
        console.log("displayed first");
        (async () => await displayUsersMonthlyReport())();
    }, [])
    return (
        <>
            <NavBar firstName={"heba"} />
            <Card style={{ width: '90vw' }} className={"mx-auto mt-5"}>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                        <Nav.Item>
                            <Nav.Link onClick={displayUsersMonthlyReport}>All Employees</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={displayUsersFullReport} >Full Report</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link >Late Report</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link >Excuse Report</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link >Employee Brief</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    {columns.length ? <AdminTable products={usersReport} columns={columns} /> : null}
                </Card.Body>
            </Card>
        </>
    );
}

export default AdminHome;


