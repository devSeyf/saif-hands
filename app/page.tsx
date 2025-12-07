import Link from "next/link";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="py-5">
      <div className="row g-4">
        {/* Card 1 */}
        <div className="col-12 col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Word Counter</h5>
              <p className="card-text text-muted">
                Free Online Word Counter Tool to count words, characters,
                sentences, and paragraphs in your text.
              </p>
              <div className="mt-auto">
                <Link className="btn btn-primary w-100" href="/components/Services/word-counter">
                  Go to Word Counter
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Password Generator</h5>
              <p className="card-text text-muted">
                Free Online PasswordGenerator Tool to generate secure and random
                passwords for your accounts.
              </p>
              <div className="mt-auto">
                <Link className="btn btn-primary w-100" href="/components/Services/password-generator">
                  Go to Password Generator
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Random Number Generator</h5>
              <p className="card-text text-muted">
                Free Online Random Number Generator Tool to generate random
                numbers within a specified range.
              </p>
              <div className="mt-auto">
                <Link className="btn btn-primary w-100" href="/components/Services/random-number-generator">
                  Go to Random Number Generator
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
