import {Row, Col, Card} from 'react-bootstrap';
import {useState} from 'react';
import { Link } from 'react-router-dom';


export default function ProductCard({productProp}){
	// check to see if data was succesfully passed
	// console.log(props)
		// result: php-laravel (coursesData[0])
	// console.log(typeof props);
	
	// Object Destructuring
	const {name, description, price, _id} = productProp

	// React hooks- useState -> store its state
	// Syntax:
		// const [getter, setter] = useState(initialGetterValue)
	// const [count, setCount] = useState(0);
	// // console.log(useState(0));

	// // ACTIVITY
	// const [seats, setSeat] = useState(10);

	// function enroll(){
	// 	if(seats>0){
	// 		setSeat(seats - 1);
	// 		setCount(count + 1);
	// 	} else {
	// 		alert("No more seats available, check back later.")
	// 	}
		
	// 	// console.log(`Enrollees: ${seats}`);
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
