import {
    Container
} from "react-bootstrap";

function Forms(prop) {

    return (
        <div className="my-5">
            <Container className="py-5">
                <div className="bg-white border py-3">
                    {prop.content}
                </div>
            </Container>
        </div>
    );
    }

export default Forms;
