import {useContext, useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import UserContext from '../UserContext';
import Swal from 'sweetalert2';


export default function Logout(){
    const {unsetUser, setUser} = useContext(UserContext);

	unsetUser();
	
	useEffect(() => {
		setUser({id: null})

        Swal.fire({
            title: "Successfully logged out!",
            icon: "success",
            text: "Thank you for using our service! See ya!"
        });

	});


    return(
        <>
        <Navigate to="/"/>
        </>
    )


}