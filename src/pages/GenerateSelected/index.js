import { Container } from "react-bootstrap";
import Forms from "../../components/Form";
import SuccessSelected from "./fragments";

function GeneratedSelected() {
  const title="Download File";

  return (
    <Container>
      <Forms content={<SuccessSelected title={title} />} />
    </Container>
  );
}

export default GeneratedSelected;