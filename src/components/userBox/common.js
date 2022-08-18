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
    color: rgb(85,239,196);
    font-weight: 500;
    text-decoration: none;
    margin-bottom: 5%;

`;

export const Input = styled.input`
    width: 80%;
    height: 60px;
    outline: none;
    border: 1px solid rgba(200,200,200, 0.3);
    border-radius: 75px;
    padding: 0px 10px;
    margin: 0 0 2% 0;
    border-bottom: 1.4px solid transparent;
    transition: all 200ms ease-in-out;
    
    &::placeholder{
        color: rgba(200,200,200,1);
    }

    &:not(:last-of-type) {
        border-bottom: 1.5px solid rgba(200, 200, 200, 0.4)
    }

    &:focus {
        outline: none;
        border-bottom: 2px solid rgb(85,239,196)
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
    background: rgba(85,239,196,1);
    background: linear-gradient(90deg, rgba(85,239,196,1) 31%, rgba(129,236,236,1) 100%);

    &:hover {
        filter: brightness(110%);
    }

    &:disabled {
        cursor: not-allowed;
    }

`