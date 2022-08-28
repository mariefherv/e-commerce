
export default function Upload(files){

    const formData = new FormData();

    for(let i=0; i < files.length; i++) {
        console.log(files[i])
        // files[i].fileName = `photos_${i}`
        formData.append(`photo`, files[i])
    }

    if(files.length===1){
        fetch('https://shrouded-bastion-22720.herokuapp.com/images/uploadProfilePicture', {

        method : 'POST',
        body: formData
        
        }).then(res => res.json())
        .then(data =>
           {console.log(data)
            console.log("Uploaded successfully!")})
    } else {
        fetch('https://shrouded-bastion-22720.herokuapp.com/images/uploadProductPictures', {

        method : 'POST',
        body: formData
        
        }).then(res => res.json())
        .then(data =>
            {console.log(data)
            console.log("Uploaded successfully!")})
    }
   
    
}


