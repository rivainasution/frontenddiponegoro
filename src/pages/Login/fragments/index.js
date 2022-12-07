import { 
    Button,
    Col,
    Form, 
    Row
} from "react-bootstrap";

function LoginForm(prop){
    return(
        <div className="mx-5">
            <h3 className="text-center">{prop.title}</h3>
            <div className="d-flex justify-content-center">
                <Row>
                    <Col md className="my-3">
                        <Form >
                            <Form.Group as={Row} controlId="formUsername" className='mb-3'>
                                <Form.Label column sm="3">Username:</Form.Label>
                                <Col sm="9">
                                    <Form.Control 
                                        type="text"
                                        placeholder="Username"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPassword" className='mb-3'>
                                <Form.Label column sm="3">Password</Form.Label>
                                <Col sm="9">
                                    <Form.Control 
                                        type="password"
                                        placeholder="Passowrd"
                                    />
                                </Col>
                            </Form.Group>
                            <div className="text-center">
                                <Button type="submit">Login</Button>
                            </div>            
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default LoginForm;