import {Col, Form, Row} from "react-bootstrap";
import Buttons from "../../../../components/Buttons";
import Select from 'react-select';

function SetupForm(prop){
    const nama = [
        {value:'aina', label:'Aina'},
        {value:'budi', label:'Budi'},
        {value:'dimas', label:'Dimas'},
        {value:'muhammad', label:'Muhammad'},
        {value:'rahmad', label:'Rahmad'}
    ]
    return(
        <div className="mx-5">
            <h3 className="text-center">{prop.title}</h3>
            <Form className="bg-light rounded border p-3 my-3">
                <Row>
                    <Col md>
                        <Form.Group controlId="formName" className='mb-3'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Name"
                            />
                        </Form.Group>
                    </Col>
                    <Col md>
                        <Form.Group controlId="formProjectCode" className='mb-3'>
                            <Form.Label>Project Code</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Project Code"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md>
                        <Form.Group controlId="formProjectName" className='mb-3'>
                            <Form.Label>Project Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Project Name"
                            />
                        </Form.Group>
                    </Col>
                    <Col md>
                        <Form.Group controlId="formCompany" className='mb-3'>
                            <Form.Label>Company</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Company"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md>
                        <Form.Group controlId="formDateStart" className='mb-3'>
                        <Form.Label>Date Start</Form.Label>
                        <Form.Control 
                            type="date" 
                            placeholder="Date Start"
                        />
                    </Form.Group>
                    </Col>
                    <Col md>
                        <Form.Group controlId="formDateEnd" className='mb-3'>
                        <Form.Label>Date End</Form.Label>
                        <Form.Control 
                            type="date" 
                            placeholder="Date End"
                        />
                    </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md>
                        <Col md>
                            <Form.Group controlId="formReportBy" className='mb-3'>
                            <Form.Label>Report By</Form.Label>
                            <Select options={nama} placeholder='Report By' />
                        </Form.Group>
                        </Col>
                    </Col>
                    <Col md>
                        <Form.Group controlId="formReportTo" className='mb-3'>
                            <Form.Label>Report To</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Report To"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md>
                        <Form.Group controlId="formApprovedBy" className='mb-3'>
                            <Form.Label>Approved By</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Optionanal"
                            />
                        </Form.Group>
                    </Col>
                <Col md>
                        <Form.Group controlId="formPosition" className='mb-3'>
                            <Form.Label>Position</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Position"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Buttons button="Save" />
            </Form>
        </div>
    );
}
export default SetupForm;