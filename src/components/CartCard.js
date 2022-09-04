import {Row, Col, InputGroup, Button, Form} from 'react-bootstrap';
import {useContext, useEffect, useState} from 'react';
import { CartTitle, ProductPrice, CartSubtitle, CardCart } from './commonProp';
import CheckoutContext from '../CheckoutContext';
import { CustomSpinnerSmall } from './Spinner';


export default function CartCard({productProp}){

	const {checkout, setCheckout} = useContext(CheckoutContext)
	
	const {productId, quantity} = productProp

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
	const [setImage] = useState(null)

	const [newQuantity, setNewQuantity] = useState(quantity)
	const [isLoading, setIsLoading] = useState(true)

    useEffect(() =>
       { 

        fetch(`http://localhost:4000/products/${productId}`)
        .then(res => res.json())
        .then(data => {
			setIsLoading(false)
            setName(data.name)
            setPrice(data.price)
			
            if(data.images===null){
                setImage(null)
            }
        })
      }, [productId, setImage]);

	function addQuantity(){
		const exist = checkout.find(item => item.productId === productId)

		if(exist){
			exist.quantity +=1
			setCheckout([...checkout])
		}

        setNewQuantity(newQuantity+1)

    }

    function subQuantity(){
		const exist = checkout.find(item => item.productId === productId)

		if(exist){
			exist.quantity -=1
			setCheckout([...checkout])
		}

        if(newQuantity > 1 ){
            setNewQuantity(newQuantity-1)
        }
    }

	function removeFromCart(){
		const exist = checkout.find(item => item.productId === productId)

		if(exist){
			const index = checkout.indexOf(exist)
			checkout.splice(index,1)

			setCheckout([...checkout])
		}
    }



	return(
		isLoading ?
		<CustomSpinnerSmall></CustomSpinnerSmall>
		:
		<CardCart className='m-3 d-flex flex-column align-items-center w-100'>
			{/* {(image===null) ?
			<img
			src= {imagePlaceholder}
			width= "50%"
			/>
			:
			{image}
			} */}
			<Row className="d-flex p-0 mt-3 w-100">
				<Col md={7} className="d-flex justify-content-start">
					<CartTitle className="mb-0">
                	{name}
            		</CartTitle>
				</Col>
				<Col md={5} className="d-flex justify-content-end">
					<ProductPrice >
						&#8369; {price}
					</ProductPrice>
				</Col>
			</Row>
			<Row className="d-flex p-0 w-100">
				<Col md={7} className="d-flex justify-content-start">
					<CartSubtitle>
                	Quantity
            		</CartSubtitle>
				</Col>
				<Col md={5}>
				<InputGroup >
					<Button variant="secondary" onClick={subQuantity} size="sm">-</Button>
						<Form.Control size="sm"
							value={newQuantity}
							onChange={(e) => setNewQuantity(e.target.value)
							}
						/>
					<Button variant="secondary" onClick={addQuantity} size="sm">+</Button>
				</InputGroup>
				</Col>
			</Row>
            <Row className="d-flex p-0 w-100 mt-2">
                <Col md={6}>
                    <ProductPrice>
                        Subtotal
                    </ProductPrice>
                </Col>
                <Col md={6} className="d-flex justify-content-end">
                <CartTitle className="mb-0">
                    &#8369; {price*newQuantity}
            	</CartTitle>
                </Col>
            </Row>
			<Row className="d-flex w-100 bg p-2 my-2" onClick={removeFromCart}>
			<Col className="d-flex justify-content-center w-100">
				<svg fill="none" height="2vw" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
				<path d="M0.75 3.74524H13.25" stroke="#3b28ab" strokeLinecap="round"/>
				<path d="M11.4907 3.74518H2.50506C2.36001 6.36772 2.36227 8.97003 2.75318 11.5761C2.8975 12.5382 3.72399 13.25 4.69687 13.25H9.29887C10.2718 13.25 11.0982 12.5382 11.2426 11.5761C11.6335 8.97003 11.6357 6.36772 11.4907 3.74518Z" fill="#D7E0FF" stroke="#3b28ab" strokeLinecap="round" strokeLinejoin="round"/>
				<path d="M4.50186 3.74521V3.24601C4.50186 2.58402 4.76483 1.94916 5.23293 1.48106C5.70102 1.01297 6.33589 0.75 6.99787 0.75C7.65985 0.75 8.29472 1.01297 8.76281 1.48106C9.2309 1.94916 9.49388 2.58402 9.49388 3.24601V3.74521" stroke="#3b28ab" strokeLinecap="round" strokeLinejoin="round"/>
				<path d="M5.50027 6.41864V10.5565" stroke="#3b28ab" strokeLinecap="round" strokeLinejoin="round"/>
				<path d="M8.49548 6.41864V10.5565" stroke="#3b28ab" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</Col>
			
			</Row>


        </CardCart>
	)	
};
