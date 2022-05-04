import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
margin: 7rem 22rem 2rem;
@media screen and (max-width: 480px) {
  margin: 0 2rem 1.5rem;
}
@media screen and (max-width: 768px) {
  margin: 0 2rem 1.5rem;
}
`;
export const Heading = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction:column;
    color: var(--color-text-black);
    font-family: var(--font-family6);
    font-style: normal;
    font-weight: 700;
    font-size: 2em;
    line-height: 40px;
    text-align: left;
    max-width: 36rem;
    @media screen and (max-width: 480px) {
      font-size: 1em;
    line-height: 1rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 1em;
    line-height: 1rem;
    }
}
`;
export const SubHeading = styled.div`
    font-family: var(--font-family6);
    font-style: normal;
    font-weight: 300;
    font-size: 2em;
    line-height: 40px;
    text-align: left;
    padding: 55px 0 25px 0; 
    @media screen and (max-width: 480px) {
      font-size: 1em;
      line-height: 20px;
      padding: 25px 0; 
    }
    @media screen and (max-width: 768px) {
      font-size: 1em;      
      padding: 25px 0; 
      line-height: 20px;
    }
`;
export const CardPadding = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 4.5rem 0 0 0; 
overflow: hidden;
@media screen and (max-width: 480px) {
  padding: 2.5rem 0 0 0; 
}
@media screen and (max-width: 768px) {
  padding: 2.5rem 0 0 0; 
}
`;
export const Card = styled.div`
    min-height: 25rem;
    width: 100%;
    border-radius: 2rem;
    overflow: hidden;
    @media screen and (max-width: 480px) {
      border-radius: 1rem
    }
    @media screen and (max-width: 768px) {
      border-radius: 1.5rem
    }
`
export const InCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 4rem 0 3rem 4.5rem;
    @media screen and (max-width: 480px) {
      max-width: 16rem; 
      padding: 3rem 0 1rem 2rem;
    }
    @media screen and (max-width: 768px) {
      max-width: 16rem;
      padding: 3rem 0 1rem 2rem;
    }
`
export const Img = styled.img`
    height: 100%;
    border-radius: 0 0 2rem 0;
    
    @media screen and (max-width: 480px) {
      height: 100%;
      position: relative;
      right: 9rem;
    }
    @media screen and (max-width: 768px) {
      height: 100%;
      position: relative;
      right: 9rem;
    }
`
export const Column1 = styled.div`
  grid-area: col1; 
`
export const Column2 = styled.div`
  grid-area: col2;
`
export const Row = styled.div`
  display: grid;
  grid-template-areas: 'col1 col2';
  
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
    @media screen and (max-width: 480px) {
      padding: 0 0 0 10px;
    }
    @media screen and (max-width: 768px) {
      padding: 0 0 0 10px;
    }
`
export const ButtonPadding = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 4rem 0; 
@media screen and (max-width: 480px) {
  padding: 2.5rem 0;
}
@media screen and (max-width: 768px) {
  padding: 2.5rem 0;
}
`;