import styled from "styled-components";

export const Heading = styled.h1`
    color: #3b28ab;
    font-weight: 600;
    font-size: 7vh;
`;

export const HeadingWhite = styled.h1`
    color: #FFF;
    font-weight: 600;
    font-size: 7vh;
`;

export const Title = styled.h1`
    font-weight: 600;
    font-size: 11vh;
    line-height: 11vh;
    animation: colormove 5s infinite;

    @keyframes colormove {
        from {color: #3b28ab;}
        50% {color: #c05de5;}
        to {color: #3b28ab;}
    }
`;

export const ElementTitle = styled.h2`
    font-weight: 400;
    font-size: 3vh;
    color: #636e72;
`;

export const ProductTitle = styled.h2`
    font-weight: 600;
    font-size: 3.5vh;
    color: #3b28ab;
`;

export const ProductPrice = styled.h2`
    font-weight: 600;
    font-size: 3vh;
    color: #636e72;
`;

export const CheckoutTotal = styled.h2`
    font-weight: 600;
    font-size: 5vh;
    color: #636e72;
`;

export const ProductSubtitle = styled.h2`
    font-weight: 400;
    font-size: 2.5vh;
    color: #636e72;
`;

export const CartTitle = styled.h2`
    font-weight: 600;
    font-size: 1.5em;
    color: #3b28ab;
`;

export const CartSubtitle = styled.h2`
    font-weight: 400;
    font-size: 1.2em;
    color: #636e72;
`;

export const ElementDescription = styled.h2`
    font-weight: 600;
    font-size: 3vh;
    color: #3b28ab;
`;

export const ProductDescription = styled.h2`
    font-weight: 600;
    font-size: 4vh;
    color: #3b28ab;
`;

export const Subtitles = styled.h1`
    color: #636e72;
    font-weight: 400;
    font-size: 3.5vh;
`;

export const HeadingSub = styled.h1`
    color: #636e72;
    font-weight: 600;
    font-size: 3.5vh;
`;

export const Description = styled.h1`
    color: #3b28ab;
    font-weight: 400;
    font-size: 3vh;
`;

export const HeadingSmall = styled.h1`
    color: #3b28ab;
    font-weight: 600;
    font-size: 5vh;
`;

export const ElementContainer = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CardContainer = styled.div`
    padding: 0;
    height: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Card = styled.div`
    padding: 10% 0 10% 0;
    border: 1px solid rgb(200,200,200, 0.15);
    width: 45%;
    max-height: 100%;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.08) 0 0.5rem 0.7rem;
    border-radius: 2em;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    &:hover {
    transform: scale(1.05);
    transition: all 200ms ease-in-out;
    cursor: pointer;
    }
`
export const ElementCard = styled.div`
    padding: 4%;
    border: 1px solid rgb(200,200,200, 0.15);
    width: 30%;
    max-height: 100%;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.08) 0 0.5rem 0.7rem;
    border-radius: 2em;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`

export const ProdCard = styled.div`
    padding: 2%;
    border: 1px solid rgb(200,200,200, 0.15);
    width: 30%;
    max-height: 100%;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.08) 0 0.5rem 0.7rem;
    border-radius: 2em;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    &:hover {
    transform: scale(1.05);
    transition: all 200ms ease-in-out;
    }
`

export const CardCart = styled.div`
    margin: 0;
    padding: 2%;
    border: 1px solid rgb(200,200,200, 0.15);
    width: 30%;
    max-height: 100%;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.08) 0 0.2rem 0.5rem;
    justify-content: center;
    align-items: center;
    text-decoration: none;


`

export const CardText = styled.h2`
    color: #3b28ab;
    font-weight: 400;
    font-size: 3vh;
    text-align: center;
`

export const SpinnerContainer = styled.div`
    padding: 0;
    margin: 2% 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const ProductButton = styled.button`
    width: 80%;
    text-align: center;
    margin: 2% 0;
    padding: 5% 0;
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: #3b28ab;


    &:hover {
        color: #fff;
        filter: brightness(110%);
    }

    &:disabled {
        background: rgba(200,200,200);
        pointer-events: none;
    }

`

export const EditButton = styled.button`
    width: 80%;
    text-align: center;
    margin: 2% 0;
    padding: 5% 0;
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: #00b894;


    &:hover {
        filter: brightness(110%);
    }

    &:disabled {
        background: rgba(200,200,200);
        pointer-events: none;
    }

`
export const ProductButton2 = styled.button`
    margin: 2% 0;
    width: 80%;
    text-align: center;
    padding: 5% 0;
    color: #3b28ab;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    border: 1px solid #3b28ab;
    border-radius: 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: #fff;


    &:hover {
        color: #fff;
        background: #3b28ab;
    }

`
export const BackButton = styled.button`
    margin: 5% 0;
    width: 80%;
    text-align: center;
    padding: 5% 0;
    color: #3b28ab;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    border: 1px solid #3b28ab;
    border-radius: 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: #fff;


    &:hover {
        color: #fff;
        background: #3b28ab;
    }

`

export const CheckoutButton = styled.button`
    margin: 5% 0;
    width: 90%;
    text-align: center;
    padding: 5% 0;
    color: #fff;
    text-decoration: none;
    font-size: 2.5rem;
    font-weight: 600;
    border: 1px solid #3b28ab;
    border-radius: 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: #3b28ab;


    &:hover {
        color: #3b28ab;
        background: #fff;
    }

`

export const ArchiveButton = styled.button`
    width: 80%;
    text-align: center;
    margin: 2% 0;
    padding: 5% 0;
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: #d63031;


    &:hover {
        filter: brightness(110%);
    }

    &:disabled {
        background: rgba(200,200,200);
        pointer-events: none;
    }

`

export const ActivateButton = styled.button`
    width: 80%;
    text-align: center;
    margin: 2% 0;
    padding: 5% 0;
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: #00b894;


    &:hover {
        filter: brightness(110%);
    }

    &:disabled {
        background: rgba(200,200,200);
        pointer-events: none;
    }

`

export const ActiveStatus = styled.h3`
    color: #00b894;
    font-weight: 400;
    font-size: 3vh;
    text-align: left;
    border: 1px solid #00b894;
    border-radius: 25px;
`

export const ArchivedStatus = styled.h3`
    color: #d63031;
    font-weight: 400;
    font-size: 3vh;
    text-align: left;
    border: 1px solid #d63031;
    border-radius: 25px;
    
`

export const Input = styled.input`
    width: 80%;
    height: 7vh;
    outline: none;
    border: 1px solid rgba(200,200,200, 0.5);
    border-radius: 75px;
    padding: 0px 10px;
    margin: 2% 0;
    transition: all 200ms ease-in-out;
    
    &::placeholder{
        color: rgba(200,200,200,1);
    }

    &:focus {
        outline: none;
        border: 2px solid #3b28ab;
    }
`

export const InputArea = styled.textarea`
    width: 80%;
    height: 15vh;
    outline: none;
    border: 1px solid rgba(200,200,200, 0.5);
    border-radius: 30px;
    padding: 3%;
    margin: 0;
    transition: all 200ms ease-in-out;
    
    &::placeholder{
        color: rgba(200,200,200,1);
    }

    &:focus {
        outline: none;
        border: 2px solid #3b28ab;
    }
`