import { 
    Button,Form
} from "react-bootstrap";

function ListDownload(prop){
    function handleClick (){
        prop.onClick("rahmad")
    }

    return(
        <>
            <thead>
                <td><Form.Check /></td>
                <th>No</th>
                <th>Name</th>
                <th>File</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr>
                    <td><Form.Check /></td>
                    <td>1</td>
                    <td>Aini</td>
                    <td>Aini.pdf</td>
                    <td><Button onClick={handleClick}>Detail</Button></td>
                </tr>
                <tr>
                    <td><Form.Check /></td>
                    <td>2</td>
                    <td>Budi</td>
                    <td>Budi.pdf</td>
                    <td><Button onClick={handleClick}>Detail</Button></td>
                </tr>
                <tr>
                    <td><Form.Check /></td>
                    <td>3</td>
                    <td>Dimas</td>
                    <td>Dimas.pdf</td>
                    <td><Button onClick={handleClick}>Detail</Button></td>
                </tr>
                <tr>
                    <td><Form.Check /></td>
                    <td>4</td>
                    <td>Muhammad</td>
                    <td>Muhammad.pdf</td>
                    <td><Button onClick={handleClick}>Detail</Button></td>
                </tr>
                <tr>
                    <td><Form.Check /></td>
                    <td>5</td>
                    <td>Rahmad</td>
                    <td>Rahmad.pdf</td>
                    <td><Button onClick={handleClick}>Detail</Button></td>
                </tr>
            </tbody>
        </>
    );
}

export default ListDownload;