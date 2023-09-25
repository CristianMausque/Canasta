import { CloseButton, Container, Nav, Navbar, Offcanvas } from "react-bootstrap"
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import "./Navbar.css"
import { FaTimes } from 'react-icons/fa' // Importar el icono "X"
import { Link } from "react-router-dom";

function NavbarComponent() {
  const [showMenu, setShowMenu] = useState(false)

  const handleToggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <Navbar sticky="top" expand="lg" bg="black" variant="dark" className={`justify-content-between align-items-center navbar-lg`}>
        <Navbar.Brand href="/"><img src="/canasta_logo_mini.webp" alt="Logo" className="logo img-fluid d-block d-xxl-none" /></Navbar.Brand>
        <button className="navbar-toggler d-lg-none" type="button" onClick={handleToggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <Navbar.Collapse id="basic-navbar-nav" className="d-lg-flex justify-content-lg-end">
          <Nav className="flex-row">
           <Link className="noTextDecor" to={"/works"}>
            <h3 style={{ color: "white" }}>WORKS</h3>
           </Link>

          <Link className="noTextDecor" to={"/services"}>
            <h3 style={{ color: "white" }}>SERVICES</h3>
          </Link>

          <Link className="noTextDecor" to={"/"}>
            <div className="center-logo d-none d-xxl-block">
              <Navbar.Brand ><img src="/canastalogohorizontal.webp" alt="Logo" className="polla" /></Navbar.Brand>
            </div>
          </Link>

          <Link className="noTextDecor" to={"/team"}>
            <h3 style={{ color: "white" }}>TEAM</h3>
          </Link>

          <Link className="noTextDecor" to={"/contact"}>
            <h3 style={{ color: "white" }}>CONTACT</h3>
          </Link>            
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Offcanvas show={showMenu} onHide={() => setShowMenu(false)} placement="end">
        <Offcanvas.Header>
          <button className="close-button ml-auto" onClick={() => setShowMenu(false)}>
            <FaTimes /> {/* Icono "X" para cerrar */}
          </button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="/works" style={{ color: "white" }}><h1><strong>WORKS</strong></h1></Nav.Link>
            <Nav.Link href="/services" style={{ color: "white" }}><h1><strong>SERVICES</strong></h1></Nav.Link>
            <Nav.Link href="/team" style={{ color: "white" }}><h1><strong>TEAM</strong></h1></Nav.Link>
            <Nav.Link href="/contact" style={{ color: "white" }}><h1><strong>CONTACT</strong></h1></Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default NavbarComponent