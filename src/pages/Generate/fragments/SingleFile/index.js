import { 
    Button, 
    Form,
    Col,
    Row
} from "react-bootstrap";
import Tables from "../../../../components/Table";
import SingleData from "./SingleData";

function SingleFile(prop){
    const button="Generate";

    function handleClick(){
        return prop.onClick("generate");
    }
    return(
        <Form className='bg-light p-3 border rounded'>
            <Row>
                <Col lg={4} md={12}>
                    <Form.Group as={Row} className='mb-3' controlId="formFilterByName">
                        <Form.Label column sm="6">Filter By Name:</Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" placeholder="Name" />
                        </Col>
                    </Form.Group>
                </Col>
                <Col lg={3} md={12}>
                    <Form.Group as={Row} className='mb-3' controlId="formFilterByDateFrom">
                        <Form.Label column sm="6">Filter By Date:</Form.Label>
                        <Col sm="6">
                            <Form.Control type="date" />
                        </Col>
                    </Form.Group>
                </Col>
                <Col lg={3} md={12}>
                    <Form.Group as={Row} className='mb-3' controlId="formFilterByDateTo">
                        <Form.Label column sm="2">to:</Form.Label>
                        <Col sm="6">
                            <Form.Control type="date" />
                        </Col>
                    </Form.Group>
                </Col>
                <Col lg={2} md={12}>
                    <Button>Search</Button>
                </Col>
            </Row>

            <h6 className="my-3">Detail File</h6>
            <Tables tables={<SingleData />} />

            <div className="text-center">
                <Button variant="primary" onClick={handleClick}>{button}</Button>
            </div>
        </Form>
    );
}

export default SingleFile;