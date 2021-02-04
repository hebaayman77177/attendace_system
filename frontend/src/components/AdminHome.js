
import NavBar from './NavBar';
import UserDailyReport from './UserDailyReport';
import UserMonthlyReport from "./UserMonthlyReport";
import AdminTable from "./AdminTable";
import { Button, Card, Nav } from 'react-bootstrap';



function AdminHome() {

    

    return (
        <>
            <NavBar firstName={"heba"} />
            <Card style={{ width: '90vw' }} className={"mx-auto mt-5"}>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                        <Nav.Item>
                            <Nav.Link >All Employees</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link >Full Report</Nav.Link>
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
                    <AdminTable/>
                </Card.Body>
            </Card>
        </>
    );
}

export default AdminHome;
