import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Heading, HeadingSub, ProdCard, Subtitles } from '../components/commonProp';
import { CustomSpinner } from '../components/Spinner';
import EditProductsCard from '../components/EditProductsCard';
import addImage from '../assets/add.svg'
import { Link } from 'react-router-dom';

export default function EditProducts(){
    const [products,setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    

    useEffect(() => {
        setIsLoading(true)
        fetch("https://shrouded-bastion-22720.herokuapp.com//products",
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        )
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setIsLoading(false)
            setProducts(data.map(product => {
            return(
            <EditProductsCard key={product._id} productProp= {product}/>            
            )
        }))
    })
    }, [])

    return(
        <>
            <Container fluid>
            <Row>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <Heading>Manage Shop</Heading>
                    <Subtitles>Create, update, and archive your products</Subtitles>
                </Col>
            </Row>
            {isLoading ?
            <CustomSpinner></CustomSpinner>
            :
            <Row className="d-flex flex-row justify-content-space-around ms-5">
                <ProdCard className='m-3 d-flex flex-column align-items-center justify-content-space-between cardHov' as={Link}
                to="create">
                <img
                src= {addImage}
                width= "50%"
                alt=""
                />
                <HeadingSub className="mt-5">Create New Product</HeadingSub>
                </ProdCard>
                {products}
            </Row>
            }
            </Container>
        </>
    )
}
