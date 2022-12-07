import { Container } from "react-bootstrap";
import Forms from "../../components/Form";
import Reported from "./fragments";

function Setup(prop) {
  const title="Setup";

  return (
    <Container>
      <Forms content={<Reported title={title} onClick={prop.onClick} />} />
    </Container>
  );
}

export default Setup;