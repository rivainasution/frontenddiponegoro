import { Container } from "react-bootstrap";
import Forms from "../../components/Form";
import FilterData from "./fragments";

function Generate(prop) {
  const title='Generate';

  return (
    <Container>
      <Forms content={<FilterData title={title} onClick={prop.onClick} />} />
    </Container>
  );
}

export default Generate;