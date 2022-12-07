import { Container } from "react-bootstrap";
import Forms from "../../components/Form";
import Upload from "./fragments";

function Home() {
  const title="Home";

  return (
    <Container>
      <Forms content={<Upload title={title} />} />
    </Container>
  );
}

export default Home;