import {Row, Col} from 'react-bootstrap';
import {useState} from 'react';
import { ProdCard, ProductTitle, ProductPrice, ProductSubtitle,  ProductButton2, ArchiveButton, ActivateButton, ActiveStatus, ArchivedStatus } from './commonProp';
import imagePlaceholder from '../assets/imagePlaceholder.jpg'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function EditProductsCard({productProp}){

	
	const {name, price, _id, images, numberOfOrders, isActive} = productProp

	const [image,setImage] = useState(null)
    const [active,setActive] = useState(isActive)


	if(images===null){
		setImage(null)
	}

	function archiveProduct(){
        fetch(`https://shrouded-bastion-22720.herokuapp.com//products/archiveProduct/${_id}`,
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
        fetch(`https://shrouded-bastion-22720.herokuapp.com//products/activateProduct/${_id}`,
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
		<ProdCard className='m-3 d-flex flex-column align-items-center justify-content-space-between'>
			{(image===null) ?
			<img
			src= {imagePlaceholder}
			width= "100%"
            alt=""
			/>
			:
			{image}
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
	)	
};
