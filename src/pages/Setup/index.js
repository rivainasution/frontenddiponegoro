import Container from "react-bootstrap/esm/Container";
import { 
    Footers, 
    NavigationBar 
} from "../../components";

function Setup() {
  return (
    <div className="text-center mt-5">
        <NavigationBar />
        <Container className="pt-5">
            <div className="bg-white border border-secondary py-3">
            <h1>Setup</h1>
            </div>
        </Container>
        <Footers />
    </div>
  );
}

export default Setup;
