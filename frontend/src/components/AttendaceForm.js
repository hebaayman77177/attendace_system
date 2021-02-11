import { Form, Button } from 'react-bootstrap';
import InputGroup from './InputGroup';




function AttendaceForm({ buttonLabel, inputs, FormOnSubmit }) {

    const renderIndputList = () => {
        return inputs.map(input => (<InputGroup type={input.type} label={input.label} inputValue={input.value} inputOnChange={input.onChange} />))
    }

    return (< Form onSubmit={FormOnSubmit} >

        {renderIndputList()}
        {/* <InputGroup type="email" label="Email" inputValue={email} inputOnChange={(e) => setEmail(e.target.value)} />
        <InputGroup type="password" label="Password" inputValue={password} inputOnChange={(e) => setPassword(e.target.value)} /> */}
        <Button variant="primary" type="submit">
            {buttonLabel}
        </Button>
    </Form >);

}

export default AttendaceForm;

