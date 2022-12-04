import { Container } from "react-bootstrap";
import Forms from "../../components/Form";
import TabHistory from './fragments/';

function History() {
  const title="History";

  return (
    <Container>
      <Forms content={<TabHistory title={title} />} />
    </Container>
  );
}

export default History;