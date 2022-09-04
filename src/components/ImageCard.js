import { useEffect, useState } from "react"
import { CustomSpinner } from "./Spinner"

export default function ImageCard({imageProp}){
    
    const [contentType,setContentType] = useState('')
    const [imageBase64,setImageBase64] = useState('')
    const[isLoading,setIsLoading] = useState(true)

    const {imageId} = imageProp

    useEffect(() => {
        fetch(`http://localhost:4000/images/view/${imageId}`
            ).then(res=>res.json())
            .then(data => {
                setContentType(data.contentType)
                setImageBase64(data.imageBase64)
                setIsLoading(false)
            }).catch(err => console.log(err))

    }, [imageId])


    return(
        isLoading ?
        <CustomSpinner></CustomSpinner>
        :
        <img
             src={`data:${contentType}; base64,${imageBase64}`}
             className="d-block w-100"
             alt= ""
        />
    )
}