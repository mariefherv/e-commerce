import styled from "styled-components";
import {motion} from "framer-motion";

export const LoginBoxContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: #fff;
    box-shadow: 0 0 2px rgba(15,15,15,0.28);
    position: relative;
    overflow: hidden;
`;

export const TopContainer = styled.div`
    width: 100%;
    height: 125px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 5%;
    padding-bottom: 1%;

`;

export const BackDrop = styled(motion.div)`
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

export const HeaderContainer = styled.h2`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const HeaderText = styled.div`
    font-size: 2.2rem;
    font-weight: 700;
    color: #fff;
    z-index:10;
    margin-bottom: 0;
    `;

export const HeaderSubtitles = styled.div`
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.24;
    color: #fff;
    z-index:10;
    `;

export const FormInstructions = styled.div`
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
    font-weight: 400;
    color: grey;
    text-align: center;
    `;

export const InnerContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MutedLink = styled.a`
    font-size: 1rem;
    color: rgba(200,200,200, 0.8);
    font-weight: 500;
    text-decoration: none;

    &:hover {
        color: rgba(200,200,200, 0.8);
    }
`;

export const BoldLink = styled.a`
    font-size: 1rem;
    color: #3b28ab;
    font-weight: 500;
    text-decoration: none;
    margin-bottom: 5%;

`;

export const FormWarning = styled.div`
    font-size: 0.8rem;
    width: 80%;
    text-align: center;
    color: #FD7272;
    font-weight: 400;
    margin-bottom: 3px;
    margin-bottom: 3px;

`

export const Input = styled.input`
    width: 80%;
    height: 60px;
    outline: none;
    border: 1px solid rgba(200,200,200, 0.5);
    border-radius: 75px;
    padding: 0px 10px;
    margin: 2% 0 0 0;
    transition: all 200ms ease-in-out;
    
    &::placeholder{
        color: rgba(200,200,200,1);
    }

    &:focus {
        outline: none;
        border: 2px solid rgb(250,140,255);
    }
`

export const SubmitButton = styled.button`
    margin: 5%;
    padding: 0.5rem 2rem;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: #c05de5;


    &:hover && {
        filter: brightness(110%);
    }

    &:disabled {
        background: rgba(200,200,200);
        pointer-events: none;
    }

`