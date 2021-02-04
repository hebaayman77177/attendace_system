
import { Navbar } from 'react-bootstrap';
function NavBar({ firstName="", renderButtons=() => { } }) {

    return (
        <Navbar bg="light justify-content-between">
            <Navbar.Brand >Hello {firstName}</Navbar.Brand>
            <Navbar.Brand >{renderButtons()}</Navbar.Brand>
        </Navbar>
    );
}

export default NavBar;