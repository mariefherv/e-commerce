import {Link, NavLink, useNavigate} from 'react-router-dom';
import {Navbar, Container, Nav, NavDropdown, Offcanvas, Row} from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import ModalContext from '../ModalContext';
import UserContext from '../UserContext';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import logo from '../assets/KIO-Black.png'
import CheckoutContext from '../CheckoutContext';
import { Heading, ProductButton } from './commonProp';
import CartCard from './CartCard';
import Swal from "sweetalert2";


export default function AppNavbar(){
	const {setOpenModal} = useContext(ModalContext)
	const {user} = useContext(UserContext);
	const {checkout, setCheckout} = useContext(CheckoutContext)

	const [products,setProducts] = useState("")

	const [show, setShow] = useState(false)
	const [empty,setEmpty] = useState(true)

	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);

	const location = useNavigate()

	useEffect(()=> {
		if(checkout.length !== 0){
			setEmpty(false)
		} else {
			setEmpty(true)
		}
		setProducts(checkout.map((product,index) =>
			{
				return(
                    <CartCard key={index} productProp= {product}/>
                )  
			}
		))
		
	}, [checkout, setCheckout])

	function checkoutItems(){
		localStorage.setItem("items",JSON.stringify(checkout))
		

		let timerInterval
        Swal.fire({
        title: 'Redirecting you the checkout page',
        html: 'Please hold on...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
			setShow(false)
            location("/checkout")
        })
	}


	return (
	<>
	<style type="text/css">
        {`
    .btn-custom, .btn-custom:active {
      background-color: white;
      color: #3b28ab;
	  border-color: #3b28ab;
	  border-radius: 25px;
    }
	.btn-custom:hover{
      background-color: #3b28ab;
      color: white;
    }


	.search:focus {
		border-color: #3b28ab;
	}

	.nav {
  		align-content: center;
	}

	.nav a {
		color: #3b28ab;
		border-radius: 20px;
		padding: 6px 20px;
		margin-right: 10px;
		text-decoration:none;
	}

	.nav a.active {
		color: #fff;
		background: #3b28ab;
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
	<Navbar.Brand as={Link} to="/" className="ms-4 me-5">
		<img src = {logo}
		height="50px"
		alt = ""
		/>
	</Navbar.Brand>
	  <Container className="justify-content-center">
		<Nav fill>
		<div className="nav">
		<Nav.Item >
			<NavLink  
			to="/">Home</NavLink>
		</Nav.Item>

		{(user.id !== null) &&
		<Nav.Item >
			<NavLink  
			to="/hello">Introduction</NavLink>
		</Nav.Item>
		}
		
		{(user.isAdmin) ?
			<Nav.Item>
				<NavLink
				to="/dashboard" >Dashboard</NavLink>
			</Nav.Item>
			:
			<Nav.Item>
				<NavLink
				to="/products" >Shop</NavLink>
			</Nav.Item>
		}
		</div>
		</Nav>
	   </Container>
	   {
	   (user.isAdmin === false) &&
	   <Nav.Item className="clickable mx-3" onClick={handleShow}>
	   		<svg height="30" width="30" fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
				<path d="M1.00001 0.75H1.46618C2.39878 0.75 3.20759 1.39455 3.41573 2.30362L3.95638 4.66487" stroke="#3b28ab" strokeLinecap="round" strokeLinejoin="round"/>
				<path d="M13.2025 5.49889C13.0642 6.96113 12.6495 8.17798 12.3014 8.92988C12.1225 9.31627 11.8083 9.61628 11.3966 9.7248C10.8927 9.85761 10.0258 10 8.625 10C7.22418 10 6.35732 9.85761 5.85345 9.7248C5.44172 9.61628 5.12747 9.31627 4.94859 8.92988C4.52389 8.01248 4 6.40293 4 4.5H12.25C12.8023 4.5 13.2545 4.94906 13.2025 5.49889Z" fill="#D7E0FF" stroke="#3b28ab" strokeLinecap="round" strokeLinejoin="round"/>
				<path d="M5.5 13.4722C6.11809 13.4722 6.61915 12.9711 6.61915 12.353C6.61915 11.7349 6.11809 11.2339 5.5 11.2339C4.88192 11.2339 4.38086 11.7349 4.38086 12.353C4.38086 12.9711 4.88192 13.4722 5.5 13.4722Z" fill="#ffffff" stroke="#3b28ab" strokeLinecap="round" strokeLinejoin="round"/>
				<path d="M11.75 13.4722C12.3681 13.4722 12.8691 12.9711 12.8691 12.353C12.8691 11.7349 12.3681 11.2339 11.75 11.2339C11.1319 11.2339 10.6309 11.7349 10.6309 12.353C10.6309 12.9711 11.1319 13.4722 11.75 13.4722Z" fill="#ffffff" stroke="#3b28ab" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		</Nav.Item>
	   }
	   {
	   (user.id === null) &&
			<Nav.Item className="clickable mx-3" onClick={handleShow}>
				<svg height="30" width="30" fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
				<path d="M1.00001 0.75H1.46618C2.39878 0.75 3.20759 1.39455 3.41573 2.30362L3.95638 4.66487" stroke="#3b28ab" strokeLinecap="round" strokeLinejoin="round"/>
				<path d="M13.2025 5.49889C13.0642 6.96113 12.6495 8.17798 12.3014 8.92988C12.1225 9.31627 11.8083 9.61628 11.3966 9.7248C10.8927 9.85761 10.0258 10 8.625 10C7.22418 10 6.35732 9.85761 5.85345 9.7248C5.44172 9.61628 5.12747 9.31627 4.94859 8.92988C4.52389 8.01248 4 6.40293 4 4.5H12.25C12.8023 4.5 13.2545 4.94906 13.2025 5.49889Z" fill="#D7E0FF" stroke="#3b28ab" strokeLinecap="round" strokeLinejoin="round"/>
				<path d="M5.5 13.4722C6.11809 13.4722 6.61915 12.9711 6.61915 12.353C6.61915 11.7349 6.11809 11.2339 5.5 11.2339C4.88192 11.2339 4.38086 11.7349 4.38086 12.353C4.38086 12.9711 4.88192 13.4722 5.5 13.4722Z" fill="#ffffff" stroke="#3b28ab" strokeLinecap="round" strokeLinejoin="round"/>
				<path d="M11.75 13.4722C12.3681 13.4722 12.8691 12.9711 12.8691 12.353C12.8691 11.7349 12.3681 11.2339 11.75 11.2339C11.1319 11.2339 10.6309 11.7349 10.6309 12.353C10.6309 12.9711 11.1319 13.4722 11.75 13.4722Z" fill="#ffffff" stroke="#3b28ab" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</Nav.Item>
	   }
		{
			(user.id === null) ?
			<Nav.Item className="clickable me-4" onClick={()=>{setOpenModal(true)}}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" height="30" width="30"><path fill="#D7E0FF" stroke="#3b28ab" strokeLinecap="round" strokeLinejoin="round" d="M7 13.25C10.4518 13.25 13.25 10.4518 13.25 7C13.25 3.54822 10.4518 0.75 7 0.75C3.54822 0.75 0.75 3.54822 0.75 7C0.75 10.4518 3.54822 13.25 7 13.25Z"></path><path fill="#ffffff" stroke="#3b28ab" strokeLinecap="round" strokeLinejoin="round" d="M7.00001 7.57997C8.20773 7.57997 9.18678 6.60092 9.18678 5.3932C9.18678 4.18547 8.20773 3.20642 7.00001 3.20642C5.79228 3.20642 4.81323 4.18547 4.81323 5.3932C4.81323 6.60092 5.79228 7.57997 7.00001 7.57997Z"></path><path fill="#ffffff" stroke="#3b28ab" strokeLinecap="round" strokeLinejoin="round" d="M10.7043 12.0345C9.66765 12.7985 8.38655 13.25 7 13.25C5.61345 13.25 4.33235 12.7985 3.29572 12.0345C3.50216 11.257 3.9487 10.5622 4.57448 10.0507C5.259 9.49119 6.11591 9.18555 7 9.18555C7.88409 9.18555 8.741 9.49119 9.42552 10.0507C10.0513 10.5622 10.4978 11.257 10.7043 12.0345Z"></path></svg>
			</Nav.Item>

			:
			<NavDropdown className="me-5"
				title={
					<div className="d-flex align-items-center px-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" height="30" width="30"><path fill="#D7E0FF" stroke="#3b28ab" strokeLinecap="round" strokeLinejoin="round" d="M7 13.25C10.4518 13.25 13.25 10.4518 13.25 7C13.25 3.54822 10.4518 0.75 7 0.75C3.54822 0.75 0.75 3.54822 0.75 7C0.75 10.4518 3.54822 13.25 7 13.25Z"></path><path fill="#ffffff" stroke="#3b28ab" strokeLinecap="round" strokeLinejoin="round" d="M7.00001 7.57997C8.20773 7.57997 9.18678 6.60092 9.18678 5.3932C9.18678 4.18547 8.20773 3.20642 7.00001 3.20642C5.79228 3.20642 4.81323 4.18547 4.81323 5.3932C4.81323 6.60092 5.79228 7.57997 7.00001 7.57997Z"></path><path fill="#ffffff" stroke="#3b28ab" strokeLinecap="round" strokeLinejoin="round" d="M10.7043 12.0345C9.66765 12.7985 8.38655 13.25 7 13.25C5.61345 13.25 4.33235 12.7985 3.29572 12.0345C3.50216 11.257 3.9487 10.5622 4.57448 10.0507C5.259 9.49119 6.11591 9.18555 7 9.18555C7.88409 9.18555 8.741 9.49119 9.42552 10.0507C10.0513 10.5622 10.4978 11.257 10.7043 12.0345Z"></path></svg>
						{user.firstName.split(' ')[0]} {user.isAdmin ? "(Admin)" : "(User)"}
					</div>
				}
				id="basic-nav-dropdown">
				<DropdownItem as={Link} to="/profile">Profile</DropdownItem>
				<DropdownItem>Settings</DropdownItem>
				<DropdownItem as={Link} to="/logout">Logout</DropdownItem>		
			
			</NavDropdown>
		}
	</Navbar>

	<Offcanvas show={show} onHide={handleClose} placement="end" scroll="true" bakcdrop="true" className="allowScroll d-flex justify-content-between w-25">
			<Row>
            <Row className="mt-3 ms-3">
            <Heading>
                Cart
            </Heading>
            </Row>
			<Row className="d-block w-100">
				{products}
			</Row>
			</Row>
			<Row className="d-flex justify-content-center justify-self-end">
				{ empty ?
					<ProductButton onClick={checkoutItems} disabled>Checkout</ProductButton>
					:
					user.id !== null ?
					<ProductButton onClick={checkoutItems}>Checkout</ProductButton>
					:
					<ProductButton onClick={handleShow}>Checkout</ProductButton>
				}
			</Row>
			
    </Offcanvas>
	</>
	)	
};

