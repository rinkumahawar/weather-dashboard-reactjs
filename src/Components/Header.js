import {Container, Navbar} from "react-bootstrap";
const Header = () => {
    return (
        <Navbar expand="lg" bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#">Weather Dashboard</Navbar.Brand>
            </Container>
        </Navbar>
    );
  };
  
  export default Header;