import { useState } from 'react';
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap';
import AttendaceForm from './AttendaceForm';
import { login } from '../actions/auth';
import classes from './AuthForm.module.css';





function LoginPage(props) {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const FormOnSubmit = (e) => {
        setEmail("");
        setPassword("");
        props.login(email, password)
        e.preventDefault();
    }
    const formInputs = [
        {
            type: "email",
            label: 'Email',
            value: email,
            onChange: (e) => setEmail(e.target.value)
        },
        {
            type: "password",
            label: 'Password',
            value: password,
            onChange: (e) => setPassword(e.target.value)
        }
    ]
    console.log()
    return (
        <div className={classes.registerpage}>
            <Card style={{ width: '30rem' }} className={classes.card}>
                <Card.Body>
                    <AttendaceForm buttonLabel="Login" inputs={formInputs} FormOnSubmit={FormOnSubmit} />
                </Card.Body>
            </Card>
        </div>
    );
}

function mapStateToProps(state) {
    const { isLoggedIn } = state.auth;
    return {
        isLoggedIn
    };
}

export default connect(mapStateToProps, { login })(LoginPage);
