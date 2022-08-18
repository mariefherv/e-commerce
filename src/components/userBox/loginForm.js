import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "./AccountContext";
import { BoxContainer, FormContainer, SubmitButton, Input, MutedLink, BoldLink } from "./common";
import {Navigate, Link, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2'
import ModalContext from "../../ModalContext";

export default function LoginForm() {
    const {setOpenModal} = useContext(ModalContext)
    const { switchToSignUp } = useContext(AccountContext);

    const location = useNavigate()

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
            if(typeof data.accessToken !== "undefined"){
                localStorage.setItem('token',data.accessToken)

                Swal.fire({
                    title: "Login Successful",
                    icon: "success",
                    text: "Welcome to the E-Commerce App"
                })

                location("/shop");
                setOpenModal(false)


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

    useEffect(() => {
        if(email !== '' && password !== ''){
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [email, password])

    return (
    <BoxContainer>
        <FormContainer>
            <Input type="email" placeholder="Email"
            value = {email}
            onChange = {e => setEmail(e.target.value)}
            />
            <Input type="password" placeholder="Password"
            value = {password}
            onChange = {e => setPassword(e.target.value)}
            />
        </FormContainer>
        <MutedLink href="#">Forgot password?</MutedLink>
        {isActive ?
            <SubmitButton type="submit" onClick={e => loginUser(e)}>Sign In</SubmitButton>

            :
            
            <SubmitButton type="submit" onClick={e => loginUser(e)} disabled>Sign In</SubmitButton>

        }
        
        <BoldLink href="#" onClick={switchToSignUp}>Sign Up</BoldLink>
    </BoxContainer>
    )
}