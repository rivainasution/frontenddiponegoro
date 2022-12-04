import { Container } from "react-bootstrap";
import Forms from "../../components/Form";
import Reported from "./fragments";

function Setup() {
  const title="Setup";

  return (
    <Container>
      <Forms content={<Reported title={title} />} />
    </Container>
  );
}

export default Setup;