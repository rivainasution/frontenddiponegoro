import {Col, Form, Row} from "react-bootstrap";
import Buttons from "../../../../components/Buttons";

function LogoForm(prop){
    return(
        <div className="mx-5">
            <h3 className="text-center">{prop.title}</h3>
            <Form className="bg-light rounded border p-3 my-3">
                <Row>
                    <Col md>
                        <Form.Group controlId="formCompanyName" className='mb-3'>
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Company Name"
                            />
                        </Form.Group>
                    </Col>
                    <Col md>
                        <Form.Group controlId="formFile" className='mb-3'>
                            <Form.Label>File Logo</Form.Label>
                            <Form.Control 
                                type="file"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Buttons button="Save" />
            </Form>
        </div>
    );
}
export default LogoForm;