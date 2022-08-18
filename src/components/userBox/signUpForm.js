import React, { useContext,useEffect, useState } from "react";
import { AccountContext } from "./AccountContext";
import { BoxContainer, FormContainer, SubmitButton, Input, MutedLink, BoldLink } from "./common";
import UserContext from '../../UserContext';
import Swal from 'sweetalert2'

export default function SignUpForm() {

    const { switchToLogin } = useContext(AccountContext);
    const {user} = useContext(UserContext);

    // state hooks to store the values of the input fields
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [verifyPassword, setVerifyPassword] = useState("")
    const [isActive, setIsActive] = useState(false)

    // useEffect(() => {
    //     // validation to enable the submit button when all fields are populated and both passwords
    //     if(email !== '' && firstName !== '' && lastName !== '' && mobile !== '' && password !== '' && mobile.length === 11){
    //         setIsActive(true);
    //     } else {
    //         setIsActive(false);
    //     }
    // }, [email, password])

    function registerUser(e) {
        // prevents page redirection via form submission
        e.preventDefault()

        fetch('http://localhost:4000/users/register', {
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
        }).then(res => res.json())
        .then(data => {
            if(data){
                Swal.fire({
                    title: 'Account Successfully Created!',
                    icon: 'success',
                    text: 'Welcome to the Ecommerce App'
                });

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
                    if(typeof data.accessToken !== "undefined"){
                        localStorage.setItem('token',data.accessToken)
                    }})
                        
                setEmail('');
                setFirstName('');
                setLastName('');
                setMobile('');
                setPassword('');
                setVerifyPassword('');
            } else {
                Swal.fire({
                    title: "Duplicate email found!",
                    icon: "info",
                    text: "The email that you're trying to register already exists"
                })
            }
        }).catch(() => {
            Swal.fire({
                title: 'Oh No :(',
                icon: 'error',
                text: 'Something went wrong! Please try again'
            });
        })

    }

    return (
    <BoxContainer>
        <FormContainer>
            <Input type="text" placeholder="First Name" 
            value = {firstName}
            onChange = {e => {setFirstName(e.target.value)}}
            />
            <Input type="text" placeholder="Last Name"  value = {lastName}
            onChange = {e => setLastName(e.target.value)}/>
            <Input type="text" placeholder="Contact Number"  value = {mobile}
            onChange = {e => setMobile(e.target.value)}/>
            <Input type="email" placeholder="Email" 
            value = {email}
            onChange = {e => setEmail(e.target.value)}/>
            <Input type="password" placeholder="Password" value = {password}
            onChange = {e => setPassword(e.target.value)}/>
            <Input type="password" placeholder="Verify Password" 
            value = {verifyPassword}
            onChange = {e => setVerifyPassword(e.target.value)}/>
        </FormContainer>
        <SubmitButton type="submit" onClick={e=> registerUser(e)}>Sign Up</SubmitButton>
        <BoldLink href="#" onClick={switchToLogin}>Log In</BoldLink>
    </BoxContainer>
    )
}