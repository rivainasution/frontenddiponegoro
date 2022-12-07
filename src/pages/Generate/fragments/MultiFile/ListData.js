import {Form, Button, Col, Row} from 'react-bootstrap';
import Buttons from '../../../../components/Buttons';

function ListData(prop){
    function handleClick (){
        prop.onClick("rahmad")
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
                    <td><Button onClick={handleClick}>Detail</Button></td>
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
                    <td><Button onClick={handleClick}>Detail</Button></td>
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
                    <td><Button onClick={handleClick}>Detail</Button></td>
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
                    <td><Button onClick={handleClick}>Detail</Button></td>
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
                    <td><Button onClick={handleClick}>Detail</Button></td>
                </tr>
            </tbody>
        </>
    );
}

export default ListData;