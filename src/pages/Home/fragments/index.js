import { 
    Col,
    Form, 
    Row
} from "react-bootstrap";
import Buttons from "../../../components/Buttons";

function Upload(prop){
    return(
        <div className="mx-5">
            <h3 className="text-center">{prop.title}</h3>
            <Form>
                <Form.Group as={Row} controlId="formFile" className='mb-3'>
                    <Form.Label column sm="3">Upload File:</Form.Label>
                    <Col sm="9">
                        <Form.Control 
                            type="file" 
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formDescription" className='mb-3'>
                    <Form.Label column sm="3">Description</Form.Label>
                    <Col sm="9">
                        <Form.Control 
                            type="text" 
                            placeholder="Description"
                        />
                    </Col>
                </Form.Group>

                <Buttons button="Upload" />
            </Form>
        </div>
    );
}

export default Upload;