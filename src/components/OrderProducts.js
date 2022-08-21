import { useState } from "react"
import { ElementDescription } from "./commonProp"
import {CustomSpinnerSmall} from "./Spinner"


export default function OrderProducts({productsProp}){
    const{productId, quantity} = productsProp
    const[productName, setProductName] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    fetch(`http://localhost:4000/products/${productId}`
            ).then(res=>res.json())
            .then(data => {
                    setIsLoading(false)
                    setProductName(data.name)
            }).catch(err => console.log(err))

    return(
        isLoading ?
        <CustomSpinnerSmall></CustomSpinnerSmall>
        :
        <ElementDescription>
                {productName} (Quantity: {quantity})
        </ElementDescription>
    )

}