import { Container } from "react-bootstrap";
import Forms from "../../components/Form";
import LoginForm from "./fragments";
function Login() {
  const title="Login Form";

  return (
    <Container>
      <Forms content={<LoginForm title={title} />} />
    </Container>
  );
}

export default Login;