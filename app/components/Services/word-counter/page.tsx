import WordCounter from "../../tools/WordCounter";
import { Container } from "react-bootstrap";

export default function WordCounterPage() {
  return (
    <Container className="py-5">
      <h1 className="mb-4">Word Counter</h1>
      <WordCounter />
    </Container>
  );
}
