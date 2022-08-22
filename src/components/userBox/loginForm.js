import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "./AccountContext";
import { BoxContainer, FormContainer, SubmitButton, Input, MutedLink, BoldLink } from "./common";
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2'
import ModalContext from "../../ModalContext";
import UserContext from '../../UserContext';

export default function LoginForm() {
    const {setUser} = useContext(UserContext);
    const {setOpenModal} = useContext(ModalContext)
    const { switchToSignUpOne } = useContext(AccountContext);

    const location = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const [isActive, setIsActive] = useState(false)

    function loginUser(e) {
        e.preventDefault()
        
        fetch('https://shrouded-bastion-22720.herokuapp.com//users/login', {

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
                retrieveUserDetails(data.accessToken)

                Swal.fire({
                    title: "Login Successful",
                    icon: "success",
                    text: "Welcome to the E-Commerce App"
                })

                location("/hello");
                setOpenModal(false)


            } else {
                Swal.fire({
                    title: "Authentication Failed",
                    icon: "error",
                    text: "Check your credentials"
                }) 
            }
        
        })
        setEmail('');
        setPassword('');

    }

    const retrieveUserDetails = (token) =>{
        fetch('https://shrouded-bastion-22720.herokuapp.com//users/getUserDetails',{
        headers : {
            Authorization: `Bearer ${token}`
        }
        }).then(res => res.json())
        .then(data => {
            if(typeof data._id !== "undefined"){
				setUser({
					id: data._id,
					firstName: data.firstName,
					lastName: data.lastName,
					mobile: data.mobileNo,
					email: data.email,
					isAdmin: data.isAdmin
				});
			} else {
				setUser({
					id: null,
					firstName: null,
					lastName: null,
					mobile: null,
					email: null,
					isAdmin: null
				})
			}
        })
        
    }

    useEffect(() => {
        const valid_email = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

        if(email.match(valid_email) && password !== ''){
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
        Don't have an account?
        <BoldLink href="#" onClick={switchToSignUpOne}>Sign Up</BoldLink>
    </BoxContainer>
    )
}