import { useEffect, useState } from "react"
import {CustomSpinnerSmall} from "./Spinner"


export default function OrderProducts({productsProp}){
    const{productId, quantity} = productsProp
    const[productName, setProductName] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://shrouded-bastion-22720.herokuapp.com/products/${productId}`
            ).then(res=>res.json())
            .then(data => {
                    setIsLoading(false)
                    setProductName(data.name)
            }).catch(err => console.log(err))

    }, [productId])
    

    return(
        isLoading ?
        <CustomSpinnerSmall></CustomSpinnerSmall>
        :
        <div>
                {productName} (Quantity: {quantity})
        </div>
    )

}