import { useState } from "react";
import { 
    Button, 
    Form,
    Col,
    Row 
} from "react-bootstrap";
import Tables from "../../../../components/Table";
import SingleData from "../SingleFile/SingleData";
import ListData from "./ListData";

function MultiFile(prop){
    const [onClick, setOnClick] = useState("");
    
    function content(){
        if (onClick === "rahmad"){
            return <Tables tables={<SingleData name={onClick}/>} />
        }
    }

    function handleSelected(){
        return prop.onClick("selected");
    }

    function handleAll(){
        return prop.onClick("all");
    }

    return(
        <Form className='bg-light p-3 border rounded'>
            <Row>
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
            <h6 className="my-3">Data List</h6>
            <Tables tables={<ListData onClick={setOnClick} />} />

            <h6 className="my-3">Detail File</h6>
            {content()}

            <div className="d-flex flex-row justify-content-center">
                <Button variant="primary" className="mx-2" onClick={handleSelected}>Generate Selected</Button>
                <Button variant="success" className="mx-2" onClick={handleAll}>Generate All</Button>
            </div>
        </Form>
    );
}

export default MultiFile;