import {Form, Button} from 'react-bootstrap'
import { useEffect, useState, useContext } from 'react'
import {Navigate, Link} from 'react-router-dom';
import UserContext from '../UserContext';
import Swal from 'sweetalert2'

export default function Login(){

    const {user, setUser} = useContext(UserContext);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const [isActive, setIsActive] = useState(false)

    function loginUser(e) {
        fetch('http://localhost:4000/users/login', {

        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            email : email,
            password : password
        })

        }).then(res => res.json())
        .then(data => {

            console.log(data)
            if(typeof data.accessToken !== "undefined"){
                localStorage.setItem('token',data.accessToken)
                retrieveUserDetails(data.accessToken)

                Swal.fire({
                    title: "Login Successful",
                    icon: "success",
                    text: "Welcome to Booking App of 196!"
                }  
                
                )
            } else {
                Swal.fire({
                    title: "Authentication Failed",
                    icon: "error",
                    text: "Check your credentials"
                }) 
            }
        
        })

        e.preventDefault()

        setEmail('');
        setPassword('');

    }

    const retrieveUserDetails = (token) =>{
        fetch('http://localhost:4000/users/getUserDetails',{
        headers : {
            Authorization: `Bearer ${token}`
        }


        }).then(res => res.json())
        .then(data => {
            console.log(data);

            setUser({
                id: data._id,
                isAdmin: data.isAdmin
            });
        })
        
    }


    useEffect(() => {
        if(email !== '' && password !== ''){
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [email, password])

    return(
        (user.id !== null) ?
            <Navigate to="/courses"/>
        :
        <>
        <h1>Login</h1>

        <Form onSubmit = {e => loginUser(e)}>
            <Form.Group controlId="userEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                    type = "email"
                    placeholder ="Enter your email here"
                    required
                    value = {email}
                    onChange = {e => setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password"
                    placeholder="Enter your password here"
                    required
                    value = {password}
                    onChange = {e => setPassword(e.target.value)}
                />
            </Form.Group>
            <p>Not yet registered? <Link to="/register">Register Here</Link></p>

            { isActive ? 
            <Button className="mt-4 mb-5" variant="success" type="submit" id="submitBtn">
                Login
            </Button>

            :

            <Button className="mt-4 mb-5" variant="danger" type="submit" id="submitBtn" disabled>
                Login
            </Button>
            }
        </Form>
    </>
    )
}