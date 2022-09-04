import { useState, useEffect, useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CheckoutButton, CheckoutTotal, Heading, Subtitles } from '../components/commonProp';
import { CustomSpinnerSmall } from '../components/Spinner';
import CheckoutCard from '../components/CheckoutCard';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import CheckoutContext from '../CheckoutContext';

export default function Checkout(){

    let storedItems = JSON.parse(localStorage.getItem("items"))
    
    const [totalAmount, setTotalAmount] = useState(0)
    const location = useNavigate()
    const [isLoading, setIsLoading] = useState(true)

    const {setCheckout} = useContext(CheckoutContext)

    const products = storedItems.map((product,index) =>
            {          
              return(
                    <CheckoutCard key={index} productProp= {product}/>
                )       
              })
        
   async function calculateSubTotal(){
        let subtotals = []

        for(let i=0; i<storedItems.length; i++){
            subtotals.push(await 
            fetch(`http://localhost:4000/products/${storedItems[i].productId}`)
            .then(res => res.json())
            .then(data => 
                {   
                    return (data.price*storedItems[i].quantity)
                }
                
        ))}

        let sum = subtotals.reduce((a, b) => a + b, 0)
        setTotalAmount(sum)
        setIsLoading(false)
    }
    
    useEffect(() => {
        calculateSubTotal()

    })
    
    function createOrder() {

        fetch("http://localhost:4000/orders/createOrder",
        {
        method: "POST",
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type' : 'application/json',
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Credentials" : true,
            "status" : 200
        },
        body: JSON.stringify(storedItems)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                localStorage.removeItem('items')
                Swal.fire({
                    title: 'Purchase Complete!',
                    icon: 'success',
                    text: 'Thank you for your support <3 Abante Babae!'
                })
                setCheckout([])
                location("/orders");
            } else {
                Swal.fire({
                    title: 'Oh no! Something went wrong :(',
                    icon: 'error',
                    text: 'Please try again later.'
                })

            }
        })
    }

    return(
        <>
            <Container fluid>
            <Row>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <Heading>Yay! You're almost there...</Heading>
                    <Subtitles>You're about to checkout the following items</Subtitles>
                </Col>
            </Row>

            <Row className="d-flex flex-row justify-content-space-around ms-5">
                {products}
            </Row>
            <hr/>
            <Row className="m-5 d-flex flex-row justify-content-space-around align-items-center">
                <Col  md={{span: 4, offset: 8}}className="d-flex flex-column justify-content-center align-items-end">
                    <CheckoutTotal>Total Amount:</CheckoutTotal>
                    {isLoading ?
                    <CustomSpinnerSmall></CustomSpinnerSmall>
                    :
                    <Heading>{totalAmount}</Heading>
                    }
                    <CheckoutButton onClick={createOrder}>Checkout</CheckoutButton>
                </Col>
            </Row>
            </Container>
        </>
    )
}
