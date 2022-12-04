import { Container } from "react-bootstrap";
import Forms from "../../components/Form";
import FilterData from "./fragments";

function Generate() {
  const title='Generate';

  return (
    <Container>
      <Forms content={<FilterData title={title} />} />
    </Container>
  );
}

export default Generate;