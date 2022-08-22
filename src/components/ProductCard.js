import {Row, Col, Card} from 'react-bootstrap';
import {useContext, useState} from 'react';
import { ProdCard, ElementDescription, ElementTitle, ProductTitle, ProductPrice, ProductSubtitle, ProductButton, ProductButton2 } from './commonProp';
import imagePlaceholder from '../assets/imagePlaceholder.jpg'
import { Link } from 'react-router-dom';
import ModalContext from '../ModalContext';
import CheckoutContext from '../CheckoutContext';
import Swal from 'sweetalert2';


export default function ProductCard({productProp}){

	const {checkout, setCheckout} = useContext(CheckoutContext)
	
	const {name, price, _id, images, numberOfOrders} = productProp
	const {setOpenModal} = useContext(ModalContext)
	const [image,setImage] = useState(null)

	if(images===null){
		setImage(null)
	}

	// }
	function addToCart(){
        const order = {
            "productId": _id,
        }
        setCheckout([...checkout,order])
        console.log(checkout)

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

	return(
		<ProdCard className='m-3 d-flex flex-column align-items-center justify-content-space-between'>
			{(image===null) ?
			<img
			src= {imagePlaceholder}
			width= "100%"
			/>
			:
			{image}
			}

			<Row className="d-flex p-0 mt-3 w-100">
				<Col md={7} className="d-flex justify-content-start">
					<ProductTitle className="mb-0">
                	{name}
            		</ProductTitle>
				</Col>
				<Col md={5} className="d-flex justify-content-end">
					<ProductPrice >
						&#8369; {price}
					</ProductPrice>
				</Col>
			</Row>
			<Row className="d-flex p-0 w-100">
				<Col md={7} className="d-flex justify-content-start">
					<ProductSubtitle>
                	Ordered {numberOfOrders} times
            		</ProductSubtitle>
				</Col>
			</Row>
			<Row className="d-flex p-0 w-100">
				<Col md={6} className="d-flex justify-content-center p-0">
				<ProductButton as={Link} to={`/products/${_id}`}>View Details</ProductButton>
				</Col>
				<Col md={6} className="d-flex justify-content-center p-0">
				<ProductButton2 onClick={addToCart}>
				Add To Cart
				</ProductButton2>
				</Col>
			</Row>        


        </ProdCard>
	)	
};
