import styled from 'styled-components';

export const Heading = styled.h1`
        font-family: var(--font-family5);
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 24px;
        color: var(--color-subtext-grey);
      @media screen and (max-width: 480px) {
        font-size: 1.5em;
      }
`;
export const Container2 = styled.div`
display: flex;
justify-content: center; 
@media screen and (max-width: 480px) {
justify-content: center;
}
`;
export const Container = styled.div`
margin: 6rem 0 2rem 0; 
display:flex;
  justify-content: space-between;
@media screen and (max-width: 480px) {
justify-content: center;
}
`;

export const Updated= styled.div`
  display:flex;
  justify-content: flex-start;
  padding: 0 0 0 4.5rem;

  font-family: var(--font-family4);
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`
export const Top= styled.div`
  display:flex;
  justify-content: flex-end;
  padding: 0 4.5rem 0 0;

  font-family: var(--font-family4);
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
  }
`