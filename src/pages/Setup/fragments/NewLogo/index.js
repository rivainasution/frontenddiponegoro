import { Container } from "react-bootstrap";
import Forms from "../../../../components/Form";
import LogoForm from "./NewLogo";

function NewLogo(prop){
    const title="New Setup";
    return(
        <Container>
            <Forms content={<LogoForm title={title}/>} />
        </Container> 
    );
}
export default NewLogo;