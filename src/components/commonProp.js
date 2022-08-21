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

export const ElementDescription = styled.h2`
    font-weight: 600;
    font-size: 3vh;
    color: #3b28ab;
`;

export const Subtitles = styled.h1`
    color: #636e72;
    font-weight: 400;
    font-size: 3.5vh;
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
