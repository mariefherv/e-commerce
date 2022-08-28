import styled from "styled-components";

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