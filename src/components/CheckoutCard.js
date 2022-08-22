import {Row, Col} from 'react-bootstrap';
import { useEffect, useState} from 'react';
import { ProdCard, ProductTitle, ProductPrice, ProductSubtitle } from './commonProp';
import imagePlaceholder from '../assets/imagePlaceholder.jpg'



export default function CheckoutCard({productProp}){
	
	const {productId, quantity} = productProp

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
	const [image,setImage] = useState(null)

    useEffect(() =>
       { 

        fetch(`https://shrouded-bastion-22720.herokuapp.com/products/${productId}`)
        .then(res => res.json())
        .then(data => {
            setName(data.name)
            setPrice(data.price)
			
            if(data.images===null){
                setImage(null)
            }
        })
      }, [productId]);

	// }
	return(
		<ProdCard className='m-3 d-flex flex-column align-items-center justify-content-space-between'>
			{(image===null) ?
			<img
			src= {imagePlaceholder}
			width= "50%"
			alt=""
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
				<Col className="d-flex justify-content-end">
					<ProductSubtitle>
                	x {quantity}
            		</ProductSubtitle>
				</Col>
			</Row>
            <Row className="d-flex p-0 w-100">
                <Col md={6}>
                    <ProductPrice>
                        Subtotal
                    </ProductPrice>
                </Col>
                <Col md={6} className="d-flex justify-content-end">
                <ProductTitle className="mb-0">
                    &#8369; {price*quantity}
            	</ProductTitle>
                </Col>
                
            </Row>

        </ProdCard>
	)	
};
