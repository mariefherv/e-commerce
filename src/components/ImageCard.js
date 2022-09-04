export default function ImageCard({imageProp}){
    console.log(imageProp)
    const {contentType, imageBase64} = imageProp

    return(
            <img
            src={`data:${contentType}; base64,${imageBase64}`}
            width = "500px"
            height = "500px"
            alt= ""
            />
    )
}