import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser} from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
        <Navbar bg='light' variant='light' expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                <Navbar.Brand >Podcaster</Navbar.Brand>
                </LinkContainer>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                <Nav className='ms-auto'>
                    <Nav.Link href="/cart">Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
      
    </header>
  )
}

export default Header
