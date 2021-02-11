import { Card } from 'react-bootstrap';
import { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/auth';
import AttendaceForm from './AttendaceForm';
import classes from './AuthForm.module.css';

function RegisterPage(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const formInputs = [
        {
            type: "text",
            label: 'First Name',
            value: firstName,
            onChange: (e) => setFirstName(e.target.value)
        },
        {
            type: "text",
            label: 'Last Name',
            value: lastName,
            onChange: (e) => setLastName(e.target.value)
        },
        {
            type: "email",
            label: 'Email',
            value: email,
            onChange: (e) => setEmail(e.target.value)
        },
        {
            type: "text",
            label: 'Address',
            value: address,
            onChange: (e) => setAddress(e.target.value)
        },
        {
            type: "text",
            label: 'Age',
            value: age,
            onChange: (e) => setAge(e.target.value)
        },
        {
            type: "password",
            label: 'Password',
            value: password,
            onChange: (e) => setPassword(e.target.value)
        },
        {
            type: "password",
            label: 'Confirm Password',
            value: confirmPassword,
            onChange: (e) => setConfirmPassword(e.target.value)
        }
    ]
    const FormOnSubmit = (e) => {
        setEmail("");
        setPassword("");
        props.register(firstName, lastName, email, address, age, password)
        e.preventDefault();
    }
    return (
        <div className={classes.registerpage}>
            <Card style={{ width: '30rem' }} className={classes.card}>
                <Card.Body>
                    <AttendaceForm buttonLabel="Sign Up" inputs={formInputs} FormOnSubmit={FormOnSubmit} />
                </Card.Body>
            </Card>
        </div>
    );
}



export default connect(null, { register })(RegisterPage);
