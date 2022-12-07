import { 
    Button
} from "react-bootstrap";
import DetailFile from "../../../components/DetailFile";

function SuccessSingle(prop){
    const title="Detail File";
    return(
        <div className="mx-5">
            <h3 className="text-center">{prop.title}</h3>
            <div className="d-flex flex-row align-items-center justify-content-center my-3">
                <div className="mx-3">
                    rahmad.pdf
                </div>
                <div className="text-center mx-3">
                    <Button variant="primary">Download File</Button>
                </div>
            </div>
            <div className="my-3 bg-light rounded p-3">
                <DetailFile title={title} />
            </div>
        </div>
    );
}

export default SuccessSingle;