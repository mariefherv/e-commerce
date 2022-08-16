import {Link} from 'react-router-dom';
import {Navbar, Container, Nav, Form, Button} from 'react-bootstrap';

export default function AppNavbar(){
	return (
	<Navbar bg="light" expand="lg">
	  <Container>
	    <Navbar.Brand href="#">Navbar</Navbar.Brand>
	     <Navbar.Toggle aria-controls="basic-navbar-nav" />
	       <Navbar.Collapse id="basic-navbar-nav" className = "justify-content-center">
            <Nav className="me-auto">
                <Form className="d-flex">
					<Form.Control
					type="search"
					placeholder="Search"
					className="me-2"
					aria-label="Search"
					/>
					<Button variant="outline-secondary">Search</Button>
          		</Form>
				  <Nav.Link href="#cart">Cart</Nav.Link>
	         </Nav>
	       </Navbar.Collapse>
	   </Container>
	</Navbar>

	)	
};
