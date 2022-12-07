import { 
    Button
} from "react-bootstrap";

import DetailFile from "../../../components/DetailFile";
import ListDownload from "./ListDownload";
import Tables from "../../../components/Table";
import { useState } from "react";

function SuccessSelected(prop){
    const title="Detail File";
    const [onClick, setOnClick] = useState("");

    function content(){
        if (onClick === "rahmad"){
            return <DetailFile title={title}/>
        }
    }

    return(
        <div className="mx-5">
            <h3 className="text-center">{prop.title}</h3>
            <Tables tables={<ListDownload onClick={setOnClick} />} />
            <div className="d-flex flex-row align-items-center justify-content-center">
                <Button variant='primary' className="mx-3">Download Selected</Button>
                <Button variant='success' className="mx-3">Download All</Button>
            </div>
            <div className="my-3 bg-light rounded p-3">
                {content()}
            </div>
        </div>
    );
}

export default SuccessSelected;