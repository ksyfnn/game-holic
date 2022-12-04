import React from 'react'
import {Navbar, Nav, Container} from "react-bootstrap"

const NavigationBar = () => {
    return(
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href='/'>Game Holic</Navbar.Brand>
                    <Nav>
                        <Nav.Link href='#trending'>Game Tranding</Nav.Link>
                        <Nav.Link href='#bestGame'>Best Game</Nav.Link>
                        <Nav.Link href='#Contact'>Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar;