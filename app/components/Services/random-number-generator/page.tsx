import WordCounter from "../../tools/PasswordGenerator";
import { Container } from "react-bootstrap";

export default function randomNumberGenerator() {
  return (
    <Container className="py-5">
      <h1 className="mb-4">Word Counter</h1>
      <WordCounter />
    </Container>
  );
}
