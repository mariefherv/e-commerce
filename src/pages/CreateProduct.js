import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BackButton, EditButton, ElementContainer, HeadingSub, Input, InputArea} from "../components/commonProp";
import imagePlaceholder from '../assets/imagePlaceholder.jpg';

export default function CreateProduct(){
    // allows us to gain access to methods that will allow us to redirect a user to a different page after enrolling a course
    const location = useNavigate();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [image] = useState(null)


    function createProduct(){
        fetch(`https://capstone-3-api-5zh3.onrender.com/products/createProduct`,
        {   method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                name : name,
                description : description,
                price: price
            })
        }
        )
        .then(res => res.json())
        .then(data => {
            if(data){
                Swal.fire({
                    title: 'New Product Created!',
                    icon: 'success',
                    text: 'It looks fantastic ;)'
                })

                location("/dashboard/editProducts")
            } else {
                Swal.fire({
                    title: 'Oh no! Something went wrong :(',
                    icon: 'error',
                    text: 'Please try again later.'
                })

            }
            
            })
    }

return (
    <>

    <Container fluid>
        <Row>
        <Col md={1} >
        <ElementContainer className="justify-content-start">
        <BackButton as={Link} to="/dashboard/editProducts">
            Back
        </BackButton>
      </ElementContainer>
      </Col>
        <Col md={7} className="text-align-center">
        <ElementContainer>
        {(image===null) ?
			<img
			src= {imagePlaceholder}
            className="imageFit"
            alt=""
			/>
			:
			{image}
		}
      </ElementContainer>
      </Col>

      
      <Col md={4} className="ps-5">
            <HeadingSub>Product Name</HeadingSub>
            <Input type="text" placeholder="Product Name"
            defaultValue = {name}
            onChange = {e => setName(e.target.value)}
            />
            <HeadingSub>Description</HeadingSub>
            <InputArea type="text" placeholder="Description"
            defaultValue = {description}
            onChange = {e => setDescription(e.target.value)}
            />
            <HeadingSub>Price</HeadingSub>
            <Input type="number" placeholder="Price"
            defaultValue = {price}
            onChange = {e => setPrice(e.target.value)}
            />
        <div className="mt-3">
            <EditButton onClick={createProduct}>Create New Product</EditButton>
        </div>
       </Col>
      
      
        </Row>
    </Container>
    </>
    )
}