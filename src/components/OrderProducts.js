import { useEffect, useState } from "react"
import {CustomSpinnerSmall} from "./Spinner"


export default function OrderProducts({productsProp}){
    const{productId, quantity} = productsProp
    const[productName, setProductName] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://capstone-3-api-5zh3.onrender.com/products/${productId}`
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