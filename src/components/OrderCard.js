import {useEffect, useState} from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ElementCard, ElementDescription, ElementTitle } from './commonProp';
import OrderProducts from './OrderProducts';


export default function OrderCard({orderProp}){

    const[userEmail,setEmail] = useState("")
	const {totalAmount, userId, _id, products, purchasedOn} = orderProp
    const[product,setProduct] = useState("")

    console.log(products)

    fetch(`http://localhost:4000/users/${userId}`,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res=>res.json())
    .then(data => {
        setEmail(data.email)
    }).catch(err => console.log(err))

    useEffect(() => {
        setProduct(products.map(product => 
            {   console.log(product)
                return <OrderProducts key={product._id}
                    productsProp = {product}/>
                
            }
        ))

    })

    
    

	return(
        <ElementCard className='m-3 d-flex flex-column align-items-start justify-content-space-between'>
            <div>
            <ElementTitle>
                Order#Id
            </ElementTitle>
            <ElementDescription>
                {_id}
            </ElementDescription>
            </div>
            <div>
            <ElementTitle>
                Total Amount
            </ElementTitle>
            <ElementDescription>
                &#8369; {totalAmount}
            </ElementDescription>
            </div>
            <div>
            <ElementTitle>
                Purchased On
            </ElementTitle>
            <ElementDescription>
                {purchasedOn}
            </ElementDescription>
            </div>
            <div>
            <ElementTitle>
                By
            </ElementTitle>
            <ElementDescription>
                {userEmail}
            </ElementDescription>
            </div>
            <div>
            <ElementTitle>
                Items
            </ElementTitle>
            <ElementDescription>
                {product}
            </ElementDescription>
            </div>
            

        </ElementCard>
	)	
};
