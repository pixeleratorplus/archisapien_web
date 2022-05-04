import styled,{css} from 'styled-components'

export const Position = styled.div`
position: absolute;
width: 40rem;
top: calc(50% - 24rem);
left: calc(50% - 24rem);
background-size: 100%;
@media screen and (max-width: 480px) {
    width: 20rem;
    top: calc(50% - 22rem);
    left: calc(50% - 12rem);
  }
  @media screen and (max-width: 768px) {
    padding: 4rem 0 2rem 2rem;
    margin: 9rem 0 0 0;
  }
`