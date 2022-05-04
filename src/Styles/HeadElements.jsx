import styled from 'styled-components';

export const Message = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction:column;
`;
export const Container = styled.div`
display: flex;
justify-content: space-between;
margin: 12rem 0 0 0;
padding: 8rem 0 2rem 15rem;
`;
export const HeadingMain = styled.h1`
      font-family: var(--font-family1);
      font-size: 3.5em;
      font-weight: 700;
      color: var(--color-text-black);
`;
export const Heading = styled.span`
  background: var(--gradient-animation);
	background-size: 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: animated_text 10s ease-in-out infinite;
	-moz-animation: animated_text 10s ease-in-out infinite;
	-webkit-animation: animated_text 10s ease-in-out infinite;

  @keyframes animated_text {
    0% { background-position: 0px 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0px 50%; }
  }
`;