import { 
    Tabs,
    Tab 
} from "react-bootstrap";
import MultiFile from "./MultiFile";
import SingleFile from "./SingleFile";

function FilterData({title, onClick}){
    const button="Generate";

    return(
        <div className="mx-5">
            <h3 className="text-center">{title}</h3>
            <Tabs
                justify
                defaultActiveKey="single"
                className="my-3"
                fill
            >
                <Tab eventKey="single" title="Generate Single File" className='mb-5'>
                    <SingleFile onClick={onClick} />
                </Tab>

                <Tab eventKey="multi" title="Generate Multi File" className='mb-5'>
                    <MultiFile onClick={onClick} />
                </Tab>
            </Tabs>
        </div>
    );
}

export default FilterData;