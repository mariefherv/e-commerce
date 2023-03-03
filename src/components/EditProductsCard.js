import {Row, Col} from 'react-bootstrap';
import {useEffect, useState} from 'react';
import { ProdCard, ProductTitle, ProductPrice, ProductSubtitle,  ProductButton2, ArchiveButton, ActivateButton, ActiveStatus, ArchivedStatus } from './commonProp';
import imagePlaceholder from '../assets/imagePlaceholder.jpg'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function EditProductsCard({productProp}){

	
	const {name, price, _id, images, numberOfOrders, isActive} = productProp

	const [image,setImage] = useState(null)
    const [active,setActive] = useState(isActive)


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

	function archiveProduct(){
        fetch(`https://capstone-3-api-5zh3.onrender.com/products/archiveProduct/${_id}`,
        {   method: 'PUT',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        )
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data){
                setActive(false)
                Swal.fire({
                    title: 'Product Archived!',
                    icon: 'success',
                    text: 'You can reactivate this product again by clicking the activate button.'
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

    function activateProduct(){
        fetch(`https://capstone-3-api-5zh3.onrender.com/products/activateProduct/${_id}`,
        {   method: 'PUT',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        )
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data){
                setActive(true)
                Swal.fire({
                    title: 'Product Activated!',
                    icon: 'success',
                    text: 'You can now view this product in the shop.'
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
            width= "100%"
			alt= ""
            />
			}
            <Row className="p-0 mt-3 w-20 justify-content-start">
                {active && <ActiveStatus>Active</ActiveStatus>}
                {!active && <ArchivedStatus disabled>Archived</ArchivedStatus>}
            </Row>
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
				<ProductButton2 as={Link} to={`/products/${_id}`}>Edit</ProductButton2>
				</Col>
				<Col md={6} className="d-flex justify-content-center p-0">
			
				{active && <ArchiveButton onClick={archiveProduct}>Archive</ArchiveButton>}
				{!active && <ActivateButton onClick={activateProduct}>Activate</ActivateButton>}
                </Col>

			</Row>        
        </ProdCard>
        </Col>
	)	
};
