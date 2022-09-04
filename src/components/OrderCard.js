import {useContext, useEffect, useState} from 'react';
import UserContext from '../UserContext';
import { ElementCard, ElementDescription, ElementTitle } from './commonProp';
import OrderProducts from './OrderProducts';
import { CustomSpinnerSmall } from './Spinner';


export default function OrderCard({orderProp}){

    const {user} = useContext(UserContext)

    const[userEmail,setEmail] = useState("")
	const {totalAmount, userId, _id, products, purchasedOn} = orderProp
    const[product,setProduct] = useState("")
    const[isLoading,setIsLoading] = useState(true)


    useEffect(() => {
        fetch(`http://localhost:4000/users/${userId}`,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
        }).then(res=>res.json())
        .then(data => {
            setIsLoading(false)
            setEmail(data.email)
        }).catch(err => console.log(err))
        
        setProduct(products.map(product => 
            {   
                return <OrderProducts key={product._id+purchasedOn}
                    productsProp = {product}/>
                
            }
        ))

    }, [userId, products, purchasedOn])
    

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
            {isLoading ?
            <CustomSpinnerSmall></CustomSpinnerSmall>
            :
            user.isAdmin &&
            <div>
            <ElementTitle>
                By
            </ElementTitle>
            <ElementDescription>
                {userEmail}
            </ElementDescription>
            </div>}
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
