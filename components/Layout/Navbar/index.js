import React from 'react'
import { Container, NavDropdown, Navbar, NavbarCollapse } from 'react-bootstrap'

function NavbarPage() {
  return (
    <Navbar data-bs-theme="primary">
        <Container fluid className='px-3 px-xl-5'>
            <Navbar.Brand href="#">Logo</Navbar.Brand>
            <NavbarCollapse>
                <NavDropdown title="Link" id="navbarScrollingDropdown" className='nav-link bg-primary bg-opacity-10 rounded-3 text-primary px-3 py-3 py-xl-0'>
                <NavDropdown.Item href="#action3">UI/UX Design </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                    Ruby
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                    React
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                    Java
                </NavDropdown.Item>
                </NavDropdown>
            </NavbarCollapse>
        </Container>
    </Navbar>
  )
}
export default NavbarPage;
