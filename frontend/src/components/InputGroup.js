import { Form } from 'react-bootstrap';
function InputGroup({ label, type, inputValue, inputOnChange }) {
    // console.log("###################################", input);
    return (<Form.Group >
        <Form.Label>{label}</Form.Label>
        <Form.Control type={type}
            value={inputValue}
            onChange={inputOnChange} />
    </Form.Group>);
}

export default InputGroup;