
export default function Upload(files){

    const formData = new FormData();

    for(let i=0; i < files.length; i++) {
        console.log(files[i])
        // files[i].fileName = `photos_${i}`
        formData.append(`photo`, files[i])
    }

    if(files.length===1){
        fetch('https://capstone-3-api-5zh3.onrender.com/images/uploadProfilePicture', {

        method : 'POST',
        body: formData
        
        }).then(res => res.json())
        .then(data =>
           {console.log(data)
            console.log("Uploaded successfully!")})
    } else {
        fetch('https://capstone-3-api-5zh3.onrender.com/images/uploadProductPictures', {

        method : 'POST',
        body: formData
        
        }).then(res => res.json())
        .then(data =>
            {console.log(data)
            console.log("Uploaded successfully!")})
    }
   
    
}


