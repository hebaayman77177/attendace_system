import ReactDOM from 'react-dom';
import { Modal, Button } from 'react-bootstrap';
import _ from 'lodash';

function AttendanceModal(props) {

    const { heading, body } = props;
    props = _.omit(props, ['heading', 'body']);
    return ReactDOM.createPortal(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {heading}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <div  className={"mx-3 my-3"}>
                {body()}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
        ,
        document.querySelector("#modal")
    );

}
export default AttendanceModal;



