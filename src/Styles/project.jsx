import styled,{css} from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
margin: 12rem 0;
@media screen and (max-width: 480px) {
  justify-content: center;
  flex-direction: column;
}
`;

export const HeadingPad = styled.div`
padding: 0 0 6rem 7rem;
`
export const Heading = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction:column;
    color: var(--color-text-black);
    font-family: var(--font-family1);
    font-style: normal;
    font-weight: 700;
    font-size: 3.5em;
    line-height: 64px;
    max-width:  60rem;
}
`;
export const SubHeading = styled.div`
    font-family: var(--font-family6);
    font-style: normal;
    font-weight: 300;
    font-size: 2em;
    line-height: 40px;
    text-align: left;
    padding: 2rem 0 0 0;

`;
export const ButtonPad = styled.div`
    position: absolute;
    top: 2rem;
    left: 7rem;
`;

export const Img = styled.img`
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    `;