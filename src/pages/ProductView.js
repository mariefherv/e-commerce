import { Container, Row, Col, Button, InputGroup, Form } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UserContext from "../UserContext";
import Swal from "sweetalert2";
import { BackButton, Description, EditButton, ElementContainer, Heading, HeadingSub, Input, InputArea, ProductButton, ProductButton2, ProductDescription } from "../components/commonProp";
import imagePlaceholder from '../assets/imagePlaceholder.jpg';
import ModalContext from "../ModalContext";
import CheckoutContext from "../CheckoutContext";


export default function ProductView(){
    const {user} = useContext(UserContext);
    const {setOpenModal} = useContext(ModalContext)
    const {setCheckout} = useContext(CheckoutContext)
    // allows us to gain access to methods that will allow us to redirect a user to a different page after enrolling a course
    const location = useNavigate();

    const [items, setItems] = useState([]);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [dateUpdate, setDateUpdate] = useState(0);
    const [image] = useState(null)

    const [quantity, setQuantity] = useState(1);
    const [editState, setEditState] = useState(false)

    // useParams hook allows us to retrieve the courseId passed via the URL

    const {productId} = useParams();

    useEffect(() =>
       { 
        localStorage.setItem("items",JSON.stringify(items))
        setCheckout(items)
        fetch(`https://shrouded-bastion-22720.herokuapp.com//products/${productId}`)
        .then(res => res.json())
        .then(data => {
            setName(data.name)
            setDescription(data.description)
            setPrice(data.price)
            setDateUpdate(data.updatedOn)
        })
      }
      
      , [productId,items,setCheckout]
    );

    function addQuantity(){
        setQuantity(quantity+1)
    }

    function subQuantity(){
        if(quantity > 1 ){
            setQuantity(quantity-1)
        }
    }

    function buyNow(){
        // const order = {
        //     totalAmount: quantity*price,
        //     items: [{
        //     'productId': {productId}.productId,
        //     'quantity': quantity
        //     }]
        // }
        setItems([...items, {
            "productId": {productId}.productId,
            "quantity": quantity
        }])

        let timerInterval
        Swal.fire({
        title: 'Redirecting you the the checkout page',
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
            location("/checkout")
        })
    }

    function addToCart(){
        setItems([...items, {
            "productId": {productId}.productId,
            "quantity": quantity
        }])

        localStorage.setItem("items",JSON.stringify(items))

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Item added to cart!',
            color: '#3b28ab',
          })
    }
    
    function edit(){
        setEditState(true)
    }

    function cancel(){
        setEditState(false)
    }

    function updateProduct(){
        fetch(`https://shrouded-bastion-22720.herokuapp.com//products/updateProduct/${productId}`,
        {   method: 'PUT',
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
            setEditState(false)
            if(data){
                setDateUpdate(Date())
                Swal.fire({
                    title: 'Product Updated Successfully!',
                    icon: 'success',
                    text: 'It sounds awesome!'
                })
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
    {!user.isAdmin && 
    <Container fluid>
        <Row>
        <Col md={1} >
        <ElementContainer className="justify-content-start">
        <BackButton as={Link} to="/products">
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
		<Heading className="text-align-right mb-3">
			{name}
		</Heading>
        <HeadingSub>
            Description
        </HeadingSub>
        <Description>
            {description}
        </Description>
        <HeadingSub>
            Last Updated On
        </HeadingSub>
        <Description>
            {dateUpdate}
        </Description>
        <HeadingSub>
            Price
        </HeadingSub>
        <ProductDescription>
            {price}
        </ProductDescription>
        <HeadingSub>
            Quantity
        </HeadingSub>
        <div className="inputContainer">
        <InputGroup >
            <Button variant="secondary" onClick={subQuantity}>-</Button>
                <Form.Control
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)
                    }
                />
            <Button variant="secondary" onClick={addQuantity}>+</Button>
        </InputGroup>
        </div>
        <div className="mt-3">

        {(user.id !== null) ?
            <ProductButton onClick={buyNow}>Buy Now</ProductButton>
            :
            <ProductButton onClick={()=>{setOpenModal(true)}}>Buy Now</ProductButton>
        }
        <ProductButton2 onClick={addToCart}>Add to Cart</ProductButton2>
        </div>
      </Col>
      
        </Row>
    </Container>}

    {user.isAdmin && 
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

      {!editState ? 
      <Col md={4} className="ps-5">
		<Heading className="text-align-right mb-3">
			{name}
		</Heading>
        <HeadingSub>
            Description
        </HeadingSub>
        <Description>
            {description}
        </Description>
        <HeadingSub>
            Last Updated On
        </HeadingSub>
        <Description>
            {dateUpdate}
        </Description>
        <HeadingSub>
            Price
        </HeadingSub>
        <ProductDescription>
            {price}
        </ProductDescription>
      
        <div className="mt-3">
            <ProductButton onClick={edit}>Edit</ProductButton>
        </div>            
      </Col>
      :
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
            <EditButton onClick={updateProduct}>Save Changes</EditButton>
            <ProductButton2 onClick={cancel}>Cancel</ProductButton2>
        </div>
       </Col>
        }
      
      
        </Row>
    </Container>}
    </>
    )
}