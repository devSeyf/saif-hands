"use client";

import Container from 'react-bootstrap/Container';

function Footer() {
    return (
        <footer className="bg-dark text-light py-3 mt-auto">
            <Container className="text-center">
                <p className="mb-0">&copy; {new Date().getFullYear()} daif All rights reserved.</p>
            </Container>
        </footer>
    );
}

export default Footer;
