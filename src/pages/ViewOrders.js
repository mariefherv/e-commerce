import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Heading, Subtitles } from '../components/commonProp';
import OrderCard from '../components/OrderCard';
import {CustomSpinner} from '../components/Spinner';

export default function ViewOrders(){

    // console.log(coursesData);
    // console.log(coursesData[0]);
    const [orders,setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch("http://localhost:4000/orders/viewAll", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setIsLoading(false)
        setOrders(data.map(order => {
            return(
            <OrderCard key={order._id} orderProp= {order}/>            
            )
        }))
    })
    }, [])

    return(
        <>
            <Container fluid>
            <Row>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <Heading>View All Orders</Heading>
                    <Subtitles>Here is the complete list of all orders made by the users.</Subtitles>
                </Col>
            </Row>


           {isLoading ?
            <CustomSpinner></CustomSpinner>
            :
            <Row className="d-flex flex-row justify-content-space-around ms-5">
                {orders}
            </Row>}
            </Container>
        </>
    )
}
