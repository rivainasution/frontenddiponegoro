import { Container } from "react-bootstrap";
import Forms from "../../components/Form";
import SuccessSingle from "./fragments";

function SingleGenerated() {
  const title="Download File";

  return (
    <Container>
      <Forms content={<SuccessSingle title={title} />} />
    </Container>
  );
}

export default SingleGenerated;