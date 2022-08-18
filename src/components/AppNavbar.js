import {Link, NavLink} from 'react-router-dom';
import {Navbar, Container, Nav, Form, Button} from 'react-bootstrap';
import { useContext, useState } from 'react';
import ModalContext from '../ModalContext';
import UserContext from '../UserContext';

export default function AppNavbar(){
	const {setOpenModal} = useContext(ModalContext)

	const {user} = useContext(UserContext);

	return (
	<>
	<style type="text/css">
        {`
    .btn-custom, .btn-custom:active {
      background-color: white;
      color: #2fba93;
	  border-color: rgba(85,239,196,1);
    }
	.btn-custom:hover{
      background-color: rgba(85,239,196,1);
      color: white;
    }

	.nav {
  		align-content: center;
	}

	.nav a {
		color: black;
		border-radius: 20px;
		padding: 6px 20px;
		margin-right: 10px;
		text-decoration:none;
	}

	.nav a.active {
		color: #fff;
		background: rgba(85,239,196,1);
	}

	.nav a.inactive {
		font-style: italic;
	}

	.clickable {
		cursor: pointer;
	}
    `}

    </style>
	<Navbar bg="white" className="my-2">
	<Navbar.Brand href="#" className="ms-4 me-5">E-Commerce</Navbar.Brand>
	  <Container className="justify-content-center">
		<Nav fill>
		<div className="nav">
		<Nav.Item >
			<NavLink  
			to="/">Home</NavLink>
		</Nav.Item>
		<Nav.Item>
			<NavLink
			to="/products" >Shop</NavLink>
		</Nav.Item>
		</div>
		<Nav.Item>
			<Form className="d-flex mx-3">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="custom">Search</Button>
          </Form>
		</Nav.Item>
		</Nav>
	   </Container>
	   <Nav.Item className="clickable mx-3"><img
				src={require("../assets/cart-icon.png")}
				width= "30"
				height= "30"
				className="d-inline-block align-top"
		/></Nav.Item>

		{
			(user.id === null) ?
			<Nav.Item className="clickable me-4" onClick={()=>{setOpenModal(true)}}>
			<img
						src={require("../assets/account-icon.png")}
						width= "30"
						height= "30"
						className="d-inline-block align-top"
				/>
			</Nav.Item>

			:
			<Nav.Item className="me-4" as={Link} to="/user">
			<img
						src={require("../assets/account-icon.png")}
						width= "30"
						height= "30"
						className="d-inline-block align-top"
				/>
			</Nav.Item>
		}
	</Navbar>
	</>
	)	
};

