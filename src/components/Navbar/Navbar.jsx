import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap"
import { useState } from 'react'
import "./Navbar.css"
import { FaTimes } from 'react-icons/fa' // Importar el icono "X"

function NavbarComponent() {
  const [showMenu, setShowMenu] = useState(false)

  const handleToggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <Navbar expand="lg" bg="black" variant="dark" className={`justify-content-between align-items-center navbar-lg`}>
        <Navbar.Brand href="/"><img src="/canasta_logo_mini.webp" alt="Logo" className="logo img-fluid d-block d-xxl-none" /></Navbar.Brand>
        <button className="navbar-toggler d-lg-none" type="button" onClick={handleToggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <Navbar.Collapse id="basic-navbar-nav" className="d-lg-flex justify-content-lg-end">
          <Nav className="flex-row">
            <Nav.Link href="/works"><h3 style={{ color: "white" }}><strong>WORKS</strong></h3></Nav.Link>
            <Nav.Link href="/services"><h3 style={{ color: "white" }}><strong>SERVICES</strong></h3></Nav.Link>
            <div className="center-logo d-none d-xxl-block">
              <Navbar.Brand href="/"><img src="/canastalogohorizontal.webp" alt="Logo" className="polla" /></Navbar.Brand>
            </div>
            <Nav.Link href="/team"><h3 style={{ color: "white" }}><strong>TEAM</strong></h3></Nav.Link>
            <Nav.Link href="/contact"><h3 style={{ color: "white" }}><strong>CONTACT</strong></h3></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Offcanvas show={showMenu} onHide={() => setShowMenu(false)} placement="end">
        <Offcanvas.Header closeButton>
          <button className="close-button ml-auto" onClick={() => setShowMenu(false)}>
            <FaTimes /> {/* Icono "X" para cerrar */}
          </button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="/works" style={{ color: "white" }}><h3><strong>WORKS</strong></h3></Nav.Link>
            <Nav.Link href="/services" style={{ color: "white" }}><h3><strong>SERVICES</strong></h3></Nav.Link>
            <Nav.Link href="/team" style={{ color: "white" }}><h3><strong>TEAM</strong></h3></Nav.Link>
            <Nav.Link href="/contact" style={{ color: "white" }}><h3><strong>CONTACT</strong></h3></Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

    </>
  )
}

export default NavbarComponent
