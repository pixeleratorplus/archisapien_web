import styled from 'styled-components';

export const Heading = styled.h1`
        font-family: var(--font-family5);
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 24px;
        color: var(--color-subtext-grey);
        @media screen and (max-width: 480px) {
          font-size: 10px;
        line-height: 15px;
        }
        @media screen and (max-width: 768px) {
          font-size: 10px;
        line-height: 15px;
        }
`;
export const Container2 = styled.div`
display: flex;
justify-content: center; 
@media screen and (max-width: 480px) {
  flex-direction: column;

}
@media screen and (max-width: 768px) {
  flex-direction: column;

}
`;
export const Container = styled.div`
margin: 6rem 0 2rem 0; 
display:flex;
justify-content: center;

`;

export const Updated= styled.div`
  display:flex;
  justify-content: flex-start;
  padding: 0 0 0 4.5rem;
  font-family: var(--font-family1);
  @media screen and (max-width: 480px) {
    font-size: 12px;
  line-height: 15px;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
  line-height: 15px;
  }
`
export const Top= styled.div`
  position: fixed;

  font-family: var(--font-family1);
`