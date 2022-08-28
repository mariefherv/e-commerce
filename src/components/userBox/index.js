import React from 'react';
import styled from 'styled-components';
import '../../App.css';
import LoginForm from './loginForm';
import {SignUpFormOne, SignUpFormTwo} from './signUpForm';
import {motion} from "framer-motion";
import {useState} from 'react';
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
    min-width: 160%;
    min-height: 105vh;
    position: absolute;
    top: -65vh;
    right: -500px;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform:rotate(60deg);
    background: rgb(250,140,255);
    background: linear-gradient(53deg, rgba(250,140,255,1) 0%, rgba(248,115,254,1) 49%, rgba(192,93,229,1) 78%, rgba(59,40,171,1) 100%);
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

const InnerContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

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
    <BoxContainer>
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
    </BoxContainer>
    </AccountContext.Provider>
    )
}