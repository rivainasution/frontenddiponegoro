import { useState } from "react";
import {
    Button,
    Container,
    Form
} from "react-bootstrap";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { 
    Footers, 
    NavigationBar 
} from "../../components";

function Home() {
    const [description, setDescription] = useState("");
    const [file, setFile] = useState("");
    const navigate = useNavigate();

    const saveFile = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("description", description);
        try {
            await axios.post("http://localhost:5000/upload", formData, {
                headers: {
                "Content-type": "multipart/form-data",
                },
            });
            navigate("/");
        } catch (error) {
        console.log(error);
        }
    };

    return (
        <div className="mt-5">
            <NavigationBar />
            <Container className="pt-5">
                <div className="bg-white border border-secondary py-3">
                    <h1 className="text-center">Form Upload</h1>
                    <div className="mx-5">
                        <Form onSubmit={saveFile}>
                            <Form.Group controlId="formFile" className='mb-3'>
                                <Form.Label>Upload File</Form.Label>
                                <Form.Control 
                                    type="file"
                                    value={file}
                                    onChange={(e) => setFile(e.target.value)} 
                                />
                            </Form.Group>

                            <Form.Group controlId="formDescription" className='mb-3'>
                                <Form.Label>Description</Form.Label>
                                <Form.Control 
                                    type="text"
                                    placeholder="Description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)} 
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">Upload</Button>
                        </Form>        
                    </div>
                </div>
            </Container>
            <Footers />
        </div>
    );
    }

export default Home;
