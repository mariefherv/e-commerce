import React, { useContext,useEffect, useRef, useState } from "react";
import { AccountContext } from "./AccountContext";
import { BoxContainer, FormContainer, SubmitButton, Input, BoldLink, FormWarning } from "./common";
import UserContext from '../../UserContext';
import ModalContext from "../../ModalContext";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

export function SignUpFormOne() {
    
    const { switchToLogin, switchToSignUpTwo } = useContext(AccountContext);

     // state hooks to store the values of the input fields
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [mobile, setMobile] = useState("")

    const [isActive, setIsActive] = useState(false)
    const [isValidFirstName, setValidFirstName] = useState("")
    const [isValidLastName, setValidLastName] = useState("")
    const [isValidMobile, setValidMobile] = useState("")

    const firstRef = useRef(null)
    const lastRef = useRef(null)
    const contact = useRef(null)

    useEffect(()=> {
    // regex for valid phone number
        const valid_mobile = /^(09|\+639)\d{9}$/;
        if(firstName !== ''){
            setValidFirstName(true)
         } else {
            setValidFirstName(false)
        }
        
        if(lastName !== ''){
            setValidLastName(true)
         } else {
            setValidLastName(false)
        }
                
        if(mobile.match(valid_mobile)){
            setValidMobile(true)
        } else {
            setValidMobile(false)
        }

        // colors
        isValidFirstName ?
            firstRef.current.style.borderColor = '#55E6C1'
            :
            firstRef.current.style.borderColor = ''
        

        isValidLastName ?
            lastRef.current.style.borderColor = '#55E6C1'
            :
            lastRef.current.style.borderColor = ''
        

        isValidMobile ?
            contact.current.style.borderColor = '#55E6C1'
            :
            contact.current.style.borderColor = ''
        
       

        if(isValidFirstName && isValidLastName && isValidMobile){
            setIsActive(true)
        } else {
            setIsActive(false)
        }

    }, [firstName, lastName, mobile, isValidFirstName, isValidLastName, isValidMobile])

    function save() {
        sessionStorage.setItem("firstName",firstName)
        sessionStorage.setItem("lastName",lastName)
        sessionStorage.setItem("mobileNo",mobile)
    }

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder="First Name"
                    ref={firstRef}
                    onChange = {e => {
                        setFirstName(e.target.value)
                        }}
                />
                <Input type="text" placeholder="Last Name"
                    ref={lastRef}
                    onChange = {e => {
                        setLastName(e.target.value)
                        }}/>
                <Input type="text" placeholder="Contact Number"
                    ref={contact}
                    onChange = {e => {
                        setMobile(e.target.value)
                        }}
                />
                {!isValidMobile && <FormWarning>Input a valid phone number (e.g. 09123456789 or +639123456789)</FormWarning>
                }
                
            </FormContainer>

            { isActive ?
                <SubmitButton type="submit" onClick={e=> {switchToSignUpTwo()
                save()}
                }>Next</SubmitButton>
                :
                <SubmitButton type="submit" disabled>Next</SubmitButton>
            }
            Already have an account?
            <BoldLink href="#" onClick={switchToLogin}>Log In</BoldLink>
        </BoxContainer>
        )
}

export function SignUpFormTwo() {

    const { switchToLogin, switchToSignUpOne } = useContext(AccountContext);
    const {setOpenModal} = useContext(ModalContext)
    const {setUser} = useContext(UserContext)

    const location = useNavigate();

    // state hooks to store the values of the input fields
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [verifyPassword, setVerifyPassword] = useState("")

    const [isActive, setIsActive] = useState(false)
    const [isValidEmail, setValidEmail] = useState("")
    const [isValidPassword, setValidPassword] = useState("")
    const [isVerified, setVerified] = useState("")
    const [exists, setExists] = useState("")

    const [isFetching, setIsFetching] = useState(false)

    const emailRef = useRef(null)
    const passRef = useRef(null)
    const verRef = useRef(null)

    useEffect(()=> {
        // regex for valid phone number
            const valid_email = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            const valid_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

            if(email.match(valid_email)){
                setValidEmail(true)
                // check if email already exists
                fetch('http://localhost:4000/users/checkEmail', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    email: email
                })
                }).then(res => res.json())
                .then(data => {
                    (data.length === 0) ? setExists(false) : setExists(true)
                })
             } else {
                setValidEmail(false)
            }
            
            if(password.match(valid_password)){
                setValidPassword(true)
             } else {
                setValidPassword(false)
            }

            if(verifyPassword !== '' && password === verifyPassword){
                setVerified(true)
            } else {
                setVerified(false)
            }
    
            // colors
             (isValidEmail && !exists) ?
                emailRef.current.style.borderColor = '#55E6C1'
                :
                emailRef.current.style.borderColor = ''
            
    
             isValidPassword ?
                passRef.current.style.borderColor = '#55E6C1'
                :
                passRef.current.style.borderColor = ''
            
    
             isVerified ?
                verRef.current.style.borderColor = '#55E6C1'
                :
                verRef.current.style.borderColor = '#'
            
           
    
            if(isValidEmail && isValidPassword && isVerified && !exists){
                setIsActive(true)
            } else {
                setIsActive(false)
            }
    
        }, [email, password, verifyPassword, isValidEmail, isValidPassword, isVerified, exists])
    

    function registerUser(e){
        e.preventDefault();
        setIsFetching(true)
        // register user using data from session storage and local var
        fetch('http://localhost:4000/users/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({
                        firstName: sessionStorage.getItem("firstName"),
                        lastName: sessionStorage.getItem("lastName"),
                        email: email,
                        mobileNo: sessionStorage.getItem("mobileNo"),
                        password: password
                    })
                })
                .then(res => res.json())
                .then(data => {
                    setIsFetching(false)
                    // modified register function to automatically generate access token                    
                    if(typeof data.accessToken !== "undefined"){
                        localStorage.setItem('token',data.accessToken)
                        retrieveUserDetails(data.accessToken)
                        location("/hello");
                        setOpenModal(false)

                        Swal.fire({
                            title: 'Account Successfully Created!',
                            icon: 'success',
                            text: 'Welcome to E-Commerce App'
                        });
                        
                        sessionStorage.clear()                        

                    } else {
                        Swal.fire({
                            title: 'Registration failed',
                            icon: 'error',
                            text: 'Something went wrong :( Try again'
                        });
                    };
                });
            setEmail('');
            setPassword('');
            setVerifyPassword('');
    }

    const retrieveUserDetails = (token) =>{
        fetch('http://localhost:4000/users/getUserDetails',{
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


    return (
        <BoxContainer>
            <FormContainer>
                {
                isFetching ?
                    <Spinner animation="grow" />
                    :
                    <div></div>
                }
                
                <Input type="email" placeholder="Email"
                    ref={emailRef}
                    onChange = {e => {
                        setEmail(e.target.value)
                        }}
                />
                {!isValidEmail && <FormWarning>Please input a valid email (e.g. juan@example.com).</FormWarning>
                }
                {exists && <FormWarning>Email already in use! Please use another one.</FormWarning>
                }
                <Input type="password" placeholder="Password"
                    ref={passRef}
                    onChange = {e => {
                        setPassword(e.target.value)
                        }}
                />
                {!isValidPassword && <FormWarning>Password must be at least 8 characters in length and contain at least 1 uppercase letter, 1 number, and 1 special character.</FormWarning>
                }
                <Input type="password" placeholder="Verify Password"ref={verRef}
                    onChange = {e => {
                        setVerifyPassword(e.target.value)
                        }}/>
                {!isVerified && <FormWarning>Passwords must match!</FormWarning>
                }
            </FormContainer>
            { isActive ?
                <SubmitButton type="submit" onClick={e => registerUser(e)}>Sign Up</SubmitButton>
                :
                <SubmitButton type="submit" disabled>Sign Up</SubmitButton>
            }

            <BoldLink href="#" onClick={switchToSignUpOne}>Back</BoldLink>
            <BoldLink href="#" onClick={switchToLogin}>Log In</BoldLink>
        </BoxContainer>
        )
}
