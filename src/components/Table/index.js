import { Table } from "react-bootstrap";

function Tables(prop){
    return(
        <div className="my-2 text-center">
            <Table responsive hover>
                {prop.tables}
            </Table>
        </div>
    );
}

export default Tables;