import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
margin: 7rem 22rem 2rem;
@media screen and (max-width: 480px) {
  justify-content: center;
  flex-direction: column;
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
    padding: 30px 30px 0 30px;
    max-width: 500px;
    text-align: left;
    }
`;
export const CardPadding = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 4.5rem 0 0 0; 
@media screen and (max-width: 480px) {
  justify-content: center;
  flex-direction: column;
}
`;
export const Card = styled.div`
    // display: flex;
    // flex-direction: column;
    // justify-content: space-between;
    min-height: 25rem;
    width: 100%;
    border-radius: 2rem
`
export const InCard = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    align-items: flex-start;
    padding: 4rem 0 3rem 4.5rem;
`
export const Img = styled.img`
    height: 100%;
    border-radius: 0 0 2rem 0;
`
export const Column1 = styled.div`
  
  grid-area: col1;
  
`
export const Column2 = styled.div`
 
  grid-area: col2;
`
export const Row = styled.div`
  display: grid;
//   grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: 'col1 col2';
  
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
export const ButtonPadding = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 4rem 0; 
@media screen and (max-width: 480px) {
  justify-content: center;
  flex-direction: column;
}
`;