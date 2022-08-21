import {Row, Col, Card} from 'react-bootstrap';
import {useState} from 'react';
import { Link } from 'react-router-dom';


export default function ProductCard({productProp}){
	
	const {name, description, price, _id} = productProp

	// }
	return(
		<Row className="mt-3 mb-3">
			<Col xs={12}>
				<Card className="cardHighlight p-3 mx-2">
					<Card.Body>
						<Card.Title>
							<h2>{name}</h2>
						</Card.Title>
						<Card.Subtitle><h5>Description</h5></Card.Subtitle>
						<Card.Text>
							{description}
						</Card.Text>
						<Card.Subtitle><h5>Price</h5></Card.Subtitle>
						<Card.Text>
							{price}
						</Card.Text>
                        <Link className="btn btn-primary" to={`/products/${_id}`}>View Details</Link>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	)	
};
