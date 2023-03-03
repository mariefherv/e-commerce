import { Container, Row, Col, Button, InputGroup, Form, Carousel } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UserContext from "../UserContext";
import Swal from "sweetalert2";
import { BackButton, Description, EditButton, ElementContainer, Heading, HeadingSub, Input, InputArea, ProductButton, ProductButton2, ProductDescription } from "../components/commonProp";
import imagePlaceholder from '../assets/imagePlaceholder.jpg';
import ModalContext from "../ModalContext";
import CheckoutContext from "../CheckoutContext";
import ImageCard from "../components/ImageCard"

export default function ProductView(){
    const {user} = useContext(UserContext);
    const {setOpenModal} = useContext(ModalContext)
    const {checkout,setCheckout} = useContext(CheckoutContext)

    const location = useNavigate();

    const [items, setItems] = useState([])

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [dateUpdate, setDateUpdate] = useState(0);
    const [images, setImages] = useState([])

    const [quantity, setQuantity] = useState(1);
    const [editState, setEditState] = useState(false)

    // useParams hook allows us to retrieve the courseId passed via the URL

    const {productId} = useParams();

    useEffect(() =>
       { 
        localStorage.setItem("items",JSON.stringify(items))

        fetch(`https://capstone-3-api-5zh3.onrender.com/products/${productId}`)
        .then(res => res.json())
        .then(data => {
            // get all data of the product
            setName(data.name)
            setDescription(data.description)
            setPrice(data.price)
            setDateUpdate(data.updatedOn)

             // if images are available
            if (data.images.length !== 0){
                setImages(data.images)
            }         
        })
      }, [productId,items]
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
        setItems([...items, {
            productId: {productId}.productId,
            quantity: quantity
        }])

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
            location("/checkout")
        })
    }

    function addToCart(){
        // check if product already exists in the cart
		const exist = checkout.find(item => item.productId === {productId}.productId)

		if(exist){
			exist.quantity +=1
			setCheckout([...checkout])
		} else {
			setCheckout([...checkout,{
				productId: {productId}.productId,
				quantity: quantity
			}])
		}


        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
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
        fetch(`https://capstone-3-api-5zh3.onrender.com/products/updateProduct/${productId}`,
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
        {(images.length===0) ?
			<img
			src= {imagePlaceholder}
            className="imageFit"
            alt=""
			/>
			:
            
			<Carousel className="imageFit" variant="dark">
                {images.map(image => {
                    return (
                        <Carousel.Item key={image._id}>
                            <ImageCard imageProp= {image}/>
                        </Carousel.Item>
                    )
                })}        
            </Carousel>
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
        {(images.length===0) ?
			<img
			src= {imagePlaceholder}
            className="imageFit"
            alt=""
			/>
			:
            
			<Carousel className="imageFit" variant="dark">
                {images.map(image => {
                    return (
                        <Carousel.Item key={image._id}>
                            <ImageCard imageProp= {image}/>
                        </Carousel.Item>
                    )
                })}        
            </Carousel>
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