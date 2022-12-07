import { Button } from "react-bootstrap";

function GenerateHistory(){
    return(
        <>
            <thead>
                <th>No</th>
                <th>Date</th>
                <th>File</th>
                <th>Name</th>
                <th>Date From</th>
                <th>Date To</th> 
                <th>Action</th>                  
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>2022-12-2</td>
                    <td>rapid.pdf</td>
                    <td>Rahmad</td>
                    <td>2022-12-2</td>
                    <td>2023-1-2</td>
                    <td>
                        <Button variant="primary">Download</Button>
                    </td>
                </tr>
            </tbody>
        </>
    );
}
export default GenerateHistory;