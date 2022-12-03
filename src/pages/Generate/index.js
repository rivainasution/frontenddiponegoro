import Container from "react-bootstrap/esm/Container";
import { NavigationBar } from "../../components";

function Generate() {
  return (
    <div className="text-center mt-5">
        <NavigationBar />
        <Container className="pt-5">
            <div className="bg-white border border-secondary py-3">
            <h1>Generate</h1>
            </div>
        </Container>
    </div>
  );
}

export default Generate;
