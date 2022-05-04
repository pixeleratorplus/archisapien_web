import styled from 'styled-components';

export const Image = styled.img`
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 0 0 2rem 2rem;
    @media screen and (max-width: 480px) {
        border-radius: 0 0 1rem 1rem;
      }
      @media screen and (max-width: 768px) {
        border-radius: 0 0 1rem 1rem;
      }
    `;
    export const ImageG = styled.img`
    // width: 100%;
    // height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    `;
    export const ImageM = styled.img`
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    `;
export const HeroBg = styled.div`
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
    .background{
    width: 100%;
    height: 100%;
    position:absolute;
    top:0;
    left:0;
    // background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 23.94%, rgba(0, 0, 0, 0.75) 83.88%);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.85) 93.77%);
    border-radius: 0 0 2rem 2rem;
    @media screen and (max-width: 480px) {
        border-radius: 0 0 1rem 1rem;
    }
    @media screen and (max-width: 768px) {
        border-radius: 0 0 1rem 1rem;
    }
`
export const HeroContainer = styled.div`
    display: flex;
    justify-content: flex-start;;
    align-items: flex-end;;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
`
export const Heading = styled.div`
      font-family: var(--font-family1);
      font-size: 3.5em;
      font-weight: 700;
      color: var(--color-text-white);
      @media screen and (max-width: 480px) {
        font-size: 1.2em;
      }
      @media screen and (max-width: 768px) {
        font-size: 1.2em;
      }
`;
export const HeroContent = styled.div`
  z-index: 3;
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 0 0 3.5rem 7rem; 
  @media screen and (max-width: 480px) {
    padding: 0 0 1rem 2rem; 
  }
  @media screen and (max-width: 768px) {
    padding: 0 0 1rem 2rem; 
  }
`
export const IconContainer = styled.span`
    padding: 4px 16px 2px 0;
    display:flex;
    @media screen and (max-width: 480px) {
        padding: 4px 8px 2px 0;
      }
      @media screen and (max-width: 768px) {
        padding: 4px 8px 2px 0;
      }
`
export const ButtonPad = styled.div`
    position: absolute;
    top: 5rem;
    left: 7rem;
    @media screen and (max-width: 480px) {
        top: 1rem;
        left: 1.5rem; 
    }
    @media screen and (max-width: 768px) {
        top: 1rem;
        left: 1.5rem; 
    }
`;
export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 3rem 18rem 12rem;
@media screen and (max-width: 480px) {
    margin: 1rem 2rem 4rem;
  }
  @media screen and (max-width: 768px) {
    margin: 1rem 2rem 4rem;
  }
`;

export const Heading2 = styled.h2`
    display: flex;
    justify-content: flex-start;
    flex-direction:column;
    color: var(--color-text-black);
    font-family: var(--font-family1);
        font-style: normal;
        font-weight: 700;
        font-size: 2em;
        line-height: 28px;
    text-align: left;
`;
export const Group = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem 0 0 0;
    @media screen and (max-width: 480px) {
        flex-direction: column;
        padding: 10px  0;

      }
      @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 10px  0;

      }
`;
export const GroupA = styled.div`
    flex: 1;
    padding: 0 10px 0 0;
    @media screen and (max-width: 480px) {
        padding: 0 0 10px  0;
      }
      @media screen and (max-width: 768px) {
        padding: 0 0 10px  0;
      }
`;
export const GroupB = styled.div`
    flex: 1;
    display:grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    padding: 0 10px 0 0;
    @media screen and (max-width: 480px) {
        flex-direction: column;
        grid-gap: 10px;
        padding: 0 0 12px  0;


      }
      @media screen and (max-width: 768px) {
        flex-direction: column;
        grid-gap: 10px;
        padding: 0  0 12px  0;

      }
`;
export const GroupC = styled.div`
    flex: 1;
    display:grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 1.5rem;
    padding: 4rem 0;
    @media screen and (max-width: 480px) {
        grid-template-areas: 'col1 col1' 'col2 col2';
        grid-gap: 0.5rem;
        padding: 2rem 0;
      }
      @media screen and (max-width: 768px) {
        grid-template-areas: 'col1 col1' 'col2 col2';
        grid-gap: 0.5rem;
        padding: 2rem 0;
      }
`;

export const Container2 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
margin: 7rem 18rem 2rem;
@media screen and (max-width: 480px) {
    margin: 1rem 2rem 4rem;
  }
  @media screen and (max-width: 768px) {
    margin: 1rem 2rem 4rem;
  }
`;
export const Message = styled.div`
    font-family: var(--font-family1);
    font-style: normal;
    font-weight: 400;
    font-size: 1.25em;
    line-height: 30px;
    padding: 1.5rem 0 3rem 0;
    // max-width: 36rem;
    text-align: justify;
    @media screen and (max-width: 480px) {
        font-size: 1em;
        line-height: 20px;
      }
      @media screen and (max-width: 768px) {
        font-size: 1em;
        line-height: 20px;
      }
`;
export const Heading3 = styled.h1`
        font-family: var(--font-family2);
        font-style: normal;
        font-weight: 700;
        font-size: 1.5em;
        line-height: 28px;
        text-transform: uppercase;
        color: var(--color-text-black);
        @media screen and (max-width: 480px) {
            font-size: 1em;
            line-height: 20px;
            padding: 0 0 10px;
          }
          @media screen and (max-width: 768px) {
            font-size: 1em;
            padding: 0 0 10px;
            line-height: 20px;
          }
`;