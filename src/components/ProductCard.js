import {Row, Col} from 'react-bootstrap';
import {useContext,  useEffect,  useState} from 'react';
import { ProdCard, ProductTitle, ProductPrice, ProductSubtitle, ProductButton, ProductButton2 } from './commonProp';
import imagePlaceholder from '../assets/imagePlaceholder.jpg'
import { Link } from 'react-router-dom';
import CheckoutContext from '../CheckoutContext';
import Swal from 'sweetalert2';

export default function ProductCard({productProp}){

	const {name, price, _id, images, numberOfOrders} = productProp
	const {checkout, setCheckout} = useContext(CheckoutContext)
	const [image,setImage] = useState(null)


	useEffect(() => {
		if(images.length===0){
			setImage(null)
		} else {
			// console.log(images[0].imageId)
			fetch(`https://capstone-3-api-5zh3.onrender.com/images/view/${images[0].imageId}`,{
			method : 'GET'})
			.then(res => res.json())
			.then(data => {
				if(data!==undefined){
					setImage(data)
				}
			})
	}}, [images])

	function addToCart(){
		// check if product already exists in the cart
		const exist = checkout.find(item => item.productId === _id)

		if(exist){
			exist.quantity +=1
			setCheckout([...checkout])
		} else {
			setCheckout([...checkout,{
				productId: _id,
				quantity: 1
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

	return(
		<Col md={4} xs={6} className='my-3'>
		<ProdCard className='px-3 py-4 d-flex flex-column align-items-center'>
			{(image===null) ?
			<img
			src= {imagePlaceholder}
			width= "100%"
			alt=""
			/>
			:
			<img
            src={`data:${image.contentType}; base64,${image.imageBase64}`}
            width = "100%"
			alt= ""
            />
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
		</Col>
	)	
};
