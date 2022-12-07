import {Form, Button} from 'react-bootstrap';

function SetupData(prop){
    function handleEdit(){
        return prop.onClick("edit");
    }
    return(
        <>
            <thead>
                <td><Form.Check /></td>
                <th>No</th>
                <th>Name</th>
                <th>Project Code</th>
                <th>Project Name</th>
                <th>Company</th>
                <th>Date Start</th>
                <th>Date End</th>
                <th>Report To</th>
                <th>Position</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr>
                    <td><Form.Check /></td>
                    <td>1</td>
                    <td>Aini</td>
                    <td>A0001</td>
                    <td>Project A</td>
                    <td>Company A</td>
                    <td>2022-10-1</td>
                    <td>2022-11-1</td>
                    <td>Person</td>
                    <td>Dept Heaad</td>
                    <td>
                        <div className='d-flex flex-row justify-content-center'>
                            <Button variant='primary' onClick={handleEdit}>Edit</Button>
                            <Button variant='danger' className="mx-2">Delete</Button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><Form.Check /></td>
                    <td>2</td>
                    <td>Budi</td>
                    <td>A0002</td>
                    <td>Project B</td>
                    <td>Company B</td>
                    <td>2022-10-1</td>
                    <td>2022-11-1</td>
                    <td>Person</td>
                    <td>Dept Heaad</td>
                    <td>
                        <div className='d-flex flex-row justify-content-center'>
                            <Button variant='primary'>Edit</Button>
                            <Button variant='danger' className="mx-2">Delete</Button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><Form.Check /></td>
                    <td>3</td>
                    <td>Dimas</td>
                    <td>A0003</td>
                    <td>Project C</td>
                    <td>Company C</td>
                    <td>2022-10-1</td>
                    <td>2022-11-1</td>
                    <td>Person</td>
                    <td>Dept Heaad</td>
                    <td>
                        <div className='d-flex flex-row justify-content-center'>
                            <Button variant='primary'>Edit</Button>
                            <Button variant='danger' className="mx-2">Delete</Button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><Form.Check /></td>
                    <td>4</td>
                    <td>Muhammad</td>
                    <td>A0002</td>
                    <td>Project B</td>
                    <td>Company B</td>
                    <td>2022-10-1</td>
                    <td>2022-11-1</td>
                    <td>Person</td>
                    <td>Dept Heaad</td>
                    <td>
                        <div className='d-flex flex-row justify-content-center'>
                            <Button variant='primary'>Edit</Button>
                            <Button variant='danger' className="mx-2">Delete</Button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><Form.Check /></td>
                    <td>5</td>
                    <td>Rahmad</td>
                    <td>A0005</td>
                    <td>Project E</td>
                    <td>Company E</td>
                    <td>2022-10-1</td>
                    <td>2022-11-1</td>
                    <td>Person</td>
                    <td>Dept Heaad</td>
                    <td>
                        <div className='d-flex flex-row justify-content-center'>
                            <Button variant='primary'>Edit</Button>
                            <Button variant='danger' className="mx-2">Delete</Button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </>
    );
}

export default SetupData;