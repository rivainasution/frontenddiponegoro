import { 
    Form,
    Tab, 
    Tabs
} from "react-bootstrap";
import Buttons from "../../../components/Buttons";
import Tables from "../../../components/Table";
import GenerateHistory from "./Generate";
import UploadHistory from "./Upload";

function TabHistory(prop){
    return(
        <div className="mx-5">
            <h3 className="text-center">{prop.title}</h3>
            <Tabs
                justify
                defaultActiveKey="upload"
                className="my-3"
                fill
            >
                <Tab eventKey="upload" title="History Upload" className='mb-5'>
                    <Tables tables={<UploadHistory />} />
                </Tab>

                <Tab eventKey="generate" title="History Generate" className='mb-5'>
                    <Tables tables={<GenerateHistory />} />
                </Tab>
            </Tabs>
        </div>
    );
}

export default TabHistory;