import { Button, Form, Card } from 'react-bootstrap';
import classes from './AuthForm.module.css';

function LoginPage() {
    return (
        <div className={classes.registerpage}>
            <Card style={{ width: '30rem' }} className={classes.card}>
                <Card.Body>
                    <Form>
                       
                        <Form.Group controlId="registerEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>
                        <Form.Group controlId="registerPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
            
                        <Button variant="primary" type="submit">
                            Login
                    </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>

    );
}

export default LoginPage;
