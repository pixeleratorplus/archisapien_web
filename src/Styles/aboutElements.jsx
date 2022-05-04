import styled from 'styled-components';


export const Container = styled.div`
display: flex;
margin: 4rem 12rem 0;
@media screen and (max-width: 480px) {
  margin: 1rem 2rem 0;
}
@media screen and (max-width: 768px) {
  margin: 1rem 2rem 0;
}

`;
export const Container2 = styled.div`
display: flex;
flex-direction: column;
margin: 0 0 0 4rem;
@media screen and (max-width: 480px) {
  margin: 0;
  padding: 0 0 1rem 0;
}
@media screen and (max-width: 768px) {
  margin: 0;
  padding: 0 0 1rem;

}
`;
export const Heading = styled.h1`
        font-family: var(--font-family1);
        font-style: normal;
        font-weight: 700;
        font-size: 1.5em;
        line-height: 28px;
        text-transform: uppercase;
        color: var(--color-text-black);
        @media screen and (max-width: 480px) {
          font-size: 1em;
        }
        @media screen and (max-width: 768px) {
          font-size: 1em;
        }
`;

export const Chess = styled.a`
    color: #0fb353;
`;

export const Message = styled.div`
    font-family: var(--font-family1);
    font-style: normal;
    font-weight: 400;
    font-size: 1.25em;
    line-height: 30px;
    padding: 1.5rem 0 0 0;
    max-width: 36rem;
    text-align: left;
    @media screen and (max-width: 480px) {
      font-size: 12px;
    line-height: 14px;
    }
    @media screen and (max-width: 768px) {
      font-size: 12px;
      line-height: 14px;
    }
`;
export const ImageA = styled.div`
    height: 100%;
`;

export const Column1 = styled.div`
  
  grid-area: col1;
  @media screen and (max-width: 480px) {
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 0;
  
  }
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
  @media screen and (max-width: 480px) {
    grid-template-areas: 'col1 col1' 'col2 col2';
  }
  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1 col1' 'col2 col2';
  }
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
    @media screen and (max-width: 480px) {
      max-width: 10rem;
    }
    @media screen and (max-width: 768px) {
      max-width: 10rem;
    }
`