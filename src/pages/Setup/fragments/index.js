import { 
    Button, 
    Col, 
    Dropdown, 
    Form, 
    Row
} from "react-bootstrap";
import Buttons from "../../../components/Buttons";

function Reported(prop){
    return(
        <div className="mx-5">
            <h3 className="text-center">{prop.title}</h3>
            <h6 className="my-3">About Reported</h6>
            <Form>
                <Form.Group as={Row} controlId="formSelectLogo" className='mb-3'>
                    <Form.Label column sm="3">Logo:</Form.Label>
                    <Col sm="9">
                        <Form.Select>
                            <option>Select Logo</option>
                            <option>rapid.png</option>
                            <option>agit.png</option>
                            <option><Buttons button="Upload" /></option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formCompanyName" className='mb-3'>
                    <Form.Label column sm="3">Company Name:</Form.Label>
                    <Col sm="9">
                        <Form.Control 
                            type="text" 
                            placeholder="Company Name"
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formProjectCode" className='mb-3'>
                    <Form.Label column sm="3">Project Code:</Form.Label>
                    <Col sm="9">
                        <Form.Control 
                            type="text" 
                            placeholder="Project Code"
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formProjectName" className='mb-3'>
                    <Form.Label column sm="3">Project Name</Form.Label>
                    <Col sm="9">
                        <Form.Control 
                            type="text" 
                            placeholder="Project Name"
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formDateStart" className='mb-3'>
                    <Form.Label column sm="3">Date Start</Form.Label>
                    <Col sm="9">
                        <Form.Control 
                            type="date"
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formDateEnd" className='mb-3'>
                    <Form.Label column sm="3">Date End</Form.Label>
                    <Col sm="9">
                        <Form.Control 
                            type="date" 
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formReportedBy" className='mb-3'>
                    <Form.Label column sm="3">Reported By</Form.Label>
                    <Col sm="9">
                        <Form.Control 
                            type="text" 
                            placeholder="Reported To"
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formReportedTo" className='mb-3'>
                    <Form.Label column sm="3">Reported To</Form.Label>
                    <Col sm="9">
                        <Form.Control 
                            type="text" 
                            placeholder="Reported To"
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formSelectPosition" className='mb-3'>
                    <Form.Label column sm="3">Position:</Form.Label>
                    <Col sm="9">
                        <Form.Select>
                            <option>Select Position</option>
                            <option>Project Manager</option>
                            <option>Dept Head</option>
                            <option>Operation Manager</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Buttons button="Save" />
            </Form>
        </div>
    );
}

export default Reported;