import React from 'react';
import styled from 'styled-components';
import '../../App.css';
import LoginForm from './loginForm';
import SignUpForm from './signUpForm';
import {motion} from "framer-motion";
import {useState} from 'react';
import UserContext from '../../UserContext';
import { AccountContext } from './AccountContext';

const BoxContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: #fff;
    box-shadow: 0 0 2px rgba(15,15,15,0.28);
    position: relative;
    overflow: hidden;
`;

const TopContainer = styled.div`
    width: 100%;
    height: 125px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 5%;
    padding-bottom: 1%;

`;

const BackDrop = styled(motion.div)`
    width: 160%;
    min-height: 100%;
    position: absolute;
    top: -650px;
    right: -500px;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform:rotate(60deg);
    background: linear-gradient(90deg, rgba(85,239,196,1) 31%, rgba(129,236,236,1) 100%);
    z-index:1;
`;

const HeaderContainer = styled.h2`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const HeaderText = styled.div`
    font-size: 2.2rem;
    font-weight: 700;
    color: #fff;
    z-index:10;
    margin-bottom: 0;
    `;

const HeaderSubtitles = styled.div`
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.24;
    color: #fff;
    z-index:10;
    `;

const FormInstructions = styled.div`
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
    font-weight: 400;
    color: grey;
    text-align: center;
    `;

const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const backdropVariants = {
    expanded: {
        width: "200%",
        height: "200%",
        borderRadius: "20%",
        transform: "rotate(1deg)",
    },
    collapsed: {
        width: "450%",
        height: "105%",
        borderRadius: "50%",
        top: "-650px",
        right: "-500px",
        transform:"rotate(1deg)"
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

    const switchToSignUp = () => {
        playExpandingAnimation();
        setTimeout(()=> {
            setActive("signup");
        }, expandingTransition.duration * 1000 - 1400);
    }

    const contextValue = {switchToSignUp, switchToLogin};

    return (
    <AccountContext.Provider value = {contextValue}>
    <BoxContainer>
        <TopContainer>
            <BackDrop initial={false} animate={isExpanded ? "expanded" : "collapsed"} variants={backdropVariants} transition={expandingTransition}/>
            {active === "signup" &&
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
        {active === "signup" && <FormInstructions>Enter the following information</FormInstructions>}
            {active === "login" && <LoginForm/>}
            {active === "signup" && <SignUpForm/>}
        </InnerContainer>
    </BoxContainer>
    </AccountContext.Provider>
    )
}