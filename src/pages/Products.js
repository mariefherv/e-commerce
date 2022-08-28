import ProductCard from '../components/ProductCard';
import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Heading, Subtitles } from '../components/commonProp';
import { CustomSpinner } from '../components/Spinner';

export default function Products(){
    const [products,setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    

    useEffect(() => {
        setIsLoading(true)
        fetch("https://shrouded-bastion-22720.herokuapp.com/products/active")
        .then(res => res.json())
        .then(data => {
            setIsLoading(false)
            setProducts(data.map(product => {
            return(
            <ProductCard key={product._id} productProp= {product}/>            
            )
        }))
    })
    }, [])

    return(
        <>
            <Container fluid>
            <Row>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <Heading>Welcome to Our Shop</Heading>
                    <Subtitles>Feel free to browse all of our products!</Subtitles>
                </Col>
            </Row>
            {isLoading ?
            <CustomSpinner></CustomSpinner>
            :
            <Row className="d-flex flex-row justify-content-space-around ms-5">
                {products}
            </Row>}
            </Container>
        </>
    )
}
