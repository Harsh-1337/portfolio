import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styled from "styled-components";
export const MyNavbar = () => {
  return (
    <Wrapper>
      <Navbar bg="danger" expand="lg">
        <Container>
          <Navbar.Brand className="brand" href="#home">
            Harsh Anand Jha
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#link">Projets</Nav.Link>
              <Nav.Link href="#">Resume</Nav.Link>
              <Nav.Link href="#">Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Wrapper>
  );
};
const Wrapper = styled.div`
   height:10vh;
  .brand{
   font-size:1.8rem;
   text-shadow: 1px 1px white;
   line-height: 8vh;
  }
  font-size: 1.2rem;
  ${Navbar} {
    height:10vh;
    font-weight: 700;
    font-family: 'Staatliches', cursive; !important
    letter-spacing: 0.1rem;
  }
`;
