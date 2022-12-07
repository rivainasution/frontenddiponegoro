import {Button, Form} from 'react-bootstrap';

function SingleData(){
    return(
        <>
            <thead>
                <th>No</th>
                <th>Full Name</th>
                <th>Date</th>
                <th>Shift</th>
                <th>In</th>
                <th>Out</th>
                <th>Task</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Rahmad</td>
                    <td>
                        <Form.Group controlId="formDate">
                            <Form.Control 
                                type="text" 
                                placeholder="2022-12-2"
                            />
                        </Form.Group>
                    </td>
                    <td>Work</td>
                    <td>08.00</td>
                    <td>17.00</td>
                    <td>
                        <Form.Group controlId="formTask">
                            <Form.Control 
                                type="text" 
                                placeholder="Install Windows"
                            />
                        </Form.Group>
                    </td>
                    <td>
                        <Button variant="success">Update</Button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Rahmad</td>
                    <td>
                        <Form.Group controlId="formDate">
                            <Form.Control 
                                type="text" 
                                placeholder="2022-12-2"
                            />
                        </Form.Group>
                    </td>
                    <td>Work</td>
                    <td>08.00</td>
                    <td>17.00</td>
                    <td>
                        <Form.Group controlId="formTask">
                            <Form.Control 
                                type="text" 
                                placeholder="Install Windows"
                            />
                        </Form.Group>
                    </td>
                    <td>
                        <Button variant="success">Update</Button>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Rahmad</td>
                    <td>
                        <Form.Group controlId="formDate">
                            <Form.Control 
                                type="text" 
                                placeholder="2022-12-2"
                            />
                        </Form.Group>
                    </td>
                    <td>Work</td>
                    <td>08.00</td>
                    <td>17.00</td>
                    <td>
                        <Form.Group controlId="formTask">
                            <Form.Control 
                                type="text" 
                                placeholder="Install Windows"
                            />
                        </Form.Group>
                    </td>
                    <td>
                        <Button variant="success">Update</Button>
                    </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Rahmad</td>
                    <td>
                        <Form.Group controlId="formDate">
                            <Form.Control 
                                type="text" 
                                placeholder="2022-12-2"
                            />
                        </Form.Group>
                    </td>
                    <td>Work</td>
                    <td>08.00</td>
                    <td>17.00</td>
                    <td>
                        <Form.Group controlId="formTask">
                            <Form.Control 
                                type="text" 
                                placeholder="Install Windows"
                            />
                        </Form.Group>
                    </td>
                    <td>
                        <Button variant="success">Update</Button>
                    </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Rahmad</td>
                    <td>
                        <Form.Group controlId="formDate">
                            <Form.Control 
                                type="text" 
                                placeholder="2022-12-2"
                            />
                        </Form.Group>
                    </td>
                    <td>Work</td>
                    <td>08.00</td>
                    <td>17.00</td>
                    <td>
                        <Form.Group controlId="formTask">
                            <Form.Control 
                                type="text" 
                                placeholder="Install Windows"
                            />
                        </Form.Group>
                    </td>
                    <td>
                        <Button variant="success">Update</Button>
                    </td>
                </tr>
            </tbody>
        </>
    );
}

export default SingleData;