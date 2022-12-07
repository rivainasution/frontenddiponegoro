import { Container } from "react-bootstrap";
import Forms from "../../../../components/Form";
import SetupForm from "./SetupForm";

function NewSetup(prop){
    return(
        <Container>
            <Forms content={<SetupForm title={prop.title} />} />
        </Container> 
    );
}
export default NewSetup;