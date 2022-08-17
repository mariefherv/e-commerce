import {Form, Button} from 'react-bootstrap'
import { useEffect, useState, useContext } from 'react'
import {useNavigate, Navigate, Link} from 'react-router-dom';
import UserContext from '../UserContext';
import Swal from 'sweetalert2'

export default function Register(){
    const {user} = useContext(UserContext);
    const history = useNavigate();

    // state hooks to store the values of the input fields
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [verifyPassword, setVerifyPassword] = useState("")
    const [isActive, setIsActive] = useState(false)


    function registerUser(e) {
        // prevents page redirection via form submission
        e.preventDefault()

        fetch('http://localhost:4000/users/checkEmailExists', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            // result: boolean

            if(data){
                Swal.fire({
                    title: "Duplicate email found!",
                    icon: "info",
                    text: "The email that you're trying to register already exists"
                })
            } else {
                fetch('http://localhost:4000/users/', {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        mobileNo: mobile,
                        password: password,
                    })
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if(data.email){
                        Swal.fire({
                            title: 'Registration successful!',
                            icon: 'success',
                            text: 'Thank you for registering'
                        });
                        
                        history("/login");

                    } else {
                        Swal.fire({
                            title: 'Registration failed',
                            icon: 'error',
                            text: 'Something went wrong, try again'
                        });
                    };
                });
            };
        });


        // clear input fields
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setMobile('');

        // setPassword2('');
    }

    return(
        (user.id !== null) ?
            <Navigate to="/shop"/>
        :
        <>
        <h1>Registration</h1>

        <Form onSubmit = {e => registerUser(e)}>
            <Form.Group controlId="userFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                    type = "text"
                    placeholder ="Enter your first name here"
                    required
                    value = {firstName}
                    onChange = {e => setFirstName(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="userLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                    type = "text"
                    placeholder ="Enter your last name here"
                    required
                    value = {lastName}
                    onChange = {e => setLastName(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="userMobile">
                <Form.Label>Mobile No.</Form.Label>
                <Form.Control 
                    type = "text"
                    placeholder ="Enter your 11-digit mobile number here"
                    required
                    value = {mobile}
                    onChange = {e => setMobile(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="userEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                    type = "email"
                    placeholder ="Enter your email here"
                    required
                    value = {email}
                    onChange = {e => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="userVerifyPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password"
                    placeholder="Enter your password here"
                    required
                    value = {password}
                    onChange = {e => setPassword(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="userVerifyPassword">
                <Form.Label>Verify Password</Form.Label>
                <Form.Control 
                    type="password"
                    placeholder="Input your password again"
                    required
                    value = {verifyPassword}
                    onChange = {e => setVerifyPassword(e.target.value)}
                />
            </Form.Group>

            { isActive ? 
            <Button className="mt-4 mb-5" variant="success" type="submit" id="submitBtn">
                Register
            </Button>

            :

            <Button className="mt-4 mb-5" variant="danger" type="submit" id="submitBtn" disabled>
                Register
            </Button>


            }
        </Form>
    </>
    )
}