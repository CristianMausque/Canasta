import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navbar.css";

function NavbarComponent() {
  return (
    <>
      <Navbar expand="lg" bg="black" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/works"><h3><strong>WORKS</strong></h3></Nav.Link>
            <Nav.Link href="/services"><h3><strong>SERVICES</strong></h3></Nav.Link>
            <div className="center-logo">
              <Navbar.Brand href="/"><img src="../public/canastalogohorizontal.webp" alt="Logo" className="polla" /></Navbar.Brand>
            </div>
            <Nav.Link href="/team"><h3><strong>TEAM</strong></h3></Nav.Link>
            <Nav.Link href="/contact"><h3><strong>CONTACT</strong></h3></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarComponent;

