import React from 'react';
import '../../App.css';
import LoginForm from './loginForm';
import {SignUpFormOne, SignUpFormTwo} from './signUpForm';
import {useState} from 'react';
import { AccountContext } from './AccountContext';
import { BackDrop, FormInstructions, HeaderContainer, HeaderSubtitles, HeaderText, InnerContainer, LoginBoxContainer, TopContainer } from './common';

const backdropVariants = {
    expanded: {
        width: "10vh",
        height: "12vh",
        top: "25vh",
        right: "-10vh",
        borderRadius: "20%",
        transform: "rotate(0deg)",
    },
    collapsed: {
        width: "450vh",
        maxHeight: "105vh",
        borderRadius: "50%",
        top: "-108vh",
        right: "-10vh",
        transform:"rotate(13deg)"
    }
}

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30
}

export default function UserBox(props){
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("login")

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(()=> {
            setExpanded(false)
        }, expandingTransition.duration * 1000 - 1500);
    };

    const switchToLogin = () => {
        playExpandingAnimation();
        setTimeout(()=> {
            setActive("login");
        }, expandingTransition.duration * 1000 - 1400);
    }

    const switchToSignUpOne = () => {
        playExpandingAnimation();
        setTimeout(()=> {
            setActive("signupOne");
        }, expandingTransition.duration * 1000 - 1400);
    }

    const switchToSignUpTwo = () => {
        playExpandingAnimation();
        setTimeout(()=> {
            setActive("signupTwo");
        }, expandingTransition.duration * 1000 - 1400);
    }

    const contextValue = {switchToSignUpOne, switchToSignUpTwo, switchToLogin};

    return (
    <AccountContext.Provider value = {contextValue}>
    <LoginBoxContainer>
        <TopContainer>
            <BackDrop initial={false} animate={isExpanded ? "expanded" : "collapsed"} variants={backdropVariants} transition={expandingTransition}/>
            {(active === "signupOne" || active === "signupTwo") &&
            <HeaderContainer>
                <HeaderText>New Here?</HeaderText>
                <HeaderSubtitles>Create an account</HeaderSubtitles>
            </HeaderContainer>}
            {active === "login" &&
            <HeaderContainer>
                <HeaderText>Hello Again</HeaderText>
                <HeaderSubtitles>Login to account</HeaderSubtitles>
            </HeaderContainer>}
        </TopContainer>
        <InnerContainer>
        {active === "login" && <FormInstructions>Enter your credentials</FormInstructions>}
        {active === "signupOne" && <FormInstructions>Please fill up the following</FormInstructions>}
        {active === "signupTwo" && <FormInstructions>Let's create your credentials!</FormInstructions>}
        {active === "login" && <LoginForm/>}
        {active === "signupOne" && <SignUpFormOne/>}
        {active === "signupTwo" && <SignUpFormTwo/>}
        </InnerContainer>
    </LoginBoxContainer>
    </AccountContext.Provider>
    )
}