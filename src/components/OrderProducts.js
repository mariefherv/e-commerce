import { useEffect, useState } from "react"
import {CustomSpinnerSmall} from "./Spinner"


export default function OrderProducts({productsProp}){
    const{productId, quantity} = productsProp
    const[productName, setProductName] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:4000/products/${productId}`
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