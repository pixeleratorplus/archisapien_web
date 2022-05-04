import styled from 'styled-components';

export const Heading = styled.h1`
        font-family: var(--font-family5);
        font-style: normal;
        font-weight: 700;
        font-size: 3em;
        line-height: 72px;
        color: var(--color-text-black);
`;
export const SubHeading = styled.h3`
        font-family: var(--font-family5);
        font-style: normal;
        font-weight: 500;
        font-size: 1.5em;
        line-height: 36px;
        color: var(--color-subtext-grey);
`;
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 22rem 0 16rem 0; 
    `;
    export const Container2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 0; 
    `;
export const Box = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
// align-items: center;
`;
export const ButtonPadding = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 2rem 0; 
`;
export const IconContainer = styled.span`
    padding: 4px 10px 2px 0;
    display:flex;
    justify-content: center;
    align-items: center;
`
export const IconContainer2 = styled.a`
    padding: 0 1.5rem;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    cursor: pointer;
    text-decoration: none;
    color: var(--color-text-black);
    &:hover {
        transition: all 0.2s ease-in-out;
        transform: scale(1.1);
      }
`