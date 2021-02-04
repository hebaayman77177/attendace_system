import { Button, Form, Card } from 'react-bootstrap';
import classes from './AuthForm.module.css';

function RegisterPage() {
    return (
        <div className={classes.registerpage}>
            <Card style={{ width: '30rem' }} className={classes.card}>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="registerFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group controlId="registerLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text"  />
                        </Form.Group>
                        <Form.Group controlId="registerAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text"  />
                        </Form.Group>
                        <Form.Group controlId="registerEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>
                        <Form.Group controlId="registerAge">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text"  />
                        </Form.Group>
                        <Form.Group controlId="registerPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        <Form.Group controlId="registerConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                    </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default RegisterPage;
