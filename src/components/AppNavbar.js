import {Link} from 'react-router-dom';
import {Navbar, Container, Nav, Form, Button} from 'react-bootstrap';
import {Register} from '../modals/Register';

export default function AppNavbar(){
	return (
	<Navbar bg="white" className="my-2">
	<Navbar.Brand href="#" className="ms-4 me-5">E-Commerce</Navbar.Brand>
	  <Container className="justify-content-center">
		<Nav fill variant="tabs" defaultActiveKey="/home">
		<Nav.Item>
			<Nav.Link href="/home">Home</Nav.Link>
		</Nav.Item>
		<Nav.Item>
			<Nav.Link eventKey="link-1">Shop</Nav.Link>
		</Nav.Item>
		<Nav.Item>
			<Form className="d-flex mx-3">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
		</Nav.Item>
		</Nav>
	   </Container>
	   <Nav.Link href="#cart" className="mx-3"><img
				src={require("../assets/cart-icon.png")}
				width= "30"
				height= "30"
				className="d-inline-block align-top"
		/></Nav.Link>
	   <Nav.Link as={Link} to="/register" className="me-4">
	   <img
				src={require("../assets/account-icon.png")}
				width= "30"
				height= "30"
				className="d-inline-block align-top"
		/>
	   
	   </Nav.Link>
	</Navbar>

	)	
};
