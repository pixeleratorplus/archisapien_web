import styled from 'styled-components';


export const Container = styled.div`
display: flex;
margin: 4rem 12rem 0;

`;
export const Container2 = styled.div`
display: flex;
flex-direction: column;
margin: 0 0 0 4rem;

`;
export const Heading = styled.h1`
        font-family: var(--font-family4);
        font-style: normal;
        font-weight: 700;
        font-size: 1.5em;
        line-height: 28px;
        text-transform: uppercase;
        color: var(--color-text-black);
      
`;

export const Chess = styled.a`
    color: #0fb353;
`;

export const Message = styled.div`
    font-family: var(--font-family4);
    font-style: normal;
    font-weight: 400;
    font-size: 1.25em;
    line-height: 30px;
    padding: 1.5rem 0 0 0;
    max-width: 36rem;
    text-align: left;
`;
export const ImageA = styled.div`
    height: 50%;
`;

export const Column1 = styled.div`
  
  grid-area: col1;
`
export const Column2 = styled.div`
 
  grid-area: col2;
`
export const Row = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';
  margin: 2rem 0 4rem 0;
`
export const IconContainer = styled.span`
    padding: 4px 0 0 10px;
    display:flex;
    justify-content: center;
    align-items: center;
`
export const ButtonPad = styled.div`
    padding: 2rem 0 0 0;
    justify-content: flex-start;
    max-width: 16rem;
`