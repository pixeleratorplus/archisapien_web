import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Button1 = styled(Link)`
  border-radius: 6rem;
  box-sizing: border-box;
  background: var(--color-bg-white);
  color: var(--color-text-black);
  white-space: nowrap;
  padding: 8px 30px 10px;
  border: 1px solid #000000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 28px;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: var(--color-theme);
    border: 1px solid var(--color-theme);
  }
  @media screen and (max-width: 480px) {
  font-size: 12px;
  padding: 4px 15px 5px;

  }
  @media screen and (max-width: 768px) {
  padding: 4px 15px 5px;
  font-size: 12px;

  }
`;
export const Button2 = styled(Link)`
  border-radius: 6rem;
  box-sizing: border-box;
  color: var(--color-text-white);
  white-space: nowrap;
  padding: 12px 40px 16px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 28px;
  @media screen and (max-width: 480px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Button3 = styled.a`
  border-radius: 6rem;
  box-sizing: border-box;
  background: var(--color-bg-white);
  color: var(--color-text-black);
  white-space: nowrap;
  padding: 8px 30px 10px;
  border: 1px solid #000000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 28px;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #0057FF;
    border: 1px solid #0057FF;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  line-height: 14px;
  padding: 10px 18px;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
  line-height: 14px;
  padding: 10px 18px;
  }
`;

export const Button4 = styled.button`
  border-radius: 8px;
  box-sizing: border-box;
  background: var(--color-bg-white);
  // color: var(--color-subtext-grey);
  color: ${({isCopied}) =>  (isCopied ? 'var(--color-theme)' : 'var(--color-subtext-grey)')};
  white-space: nowrap;
  padding: 8px 15px 8px;
  border: ${({isCopied}) =>  (isCopied ? '1px solid var(--color-theme)' : '1px solid var(--color-subtext-grey)')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.05s ease-in-out;
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 18px;
  @media screen and (max-width: 480px) {
    font-size: 14px;
  line-height: 14px;
  border-radius: 4px;
  padding: 5px 10px 4px;

  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
  line-height: 14px;
  border-radius: 4px;
  padding: 5px 10px 4px;

  }
`;

export const Button5 = styled(Link)`
  border-radius: 16px;
  box-sizing: border-box;
  background: var(--color-bg-white);
  color: var(--color-text-black);
  white-space: nowrap;
  padding: 18px 15px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: var(--font-family2);
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 28px;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  line-height: 14px;
  border-radius: 4px;
  padding: 5px 10px 4px;

  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  line-height: 14px;
  border-radius: 4px;
  padding: 5px 10px 4px;

  }
`;

export const ButtonO = styled(Link)`
  border-radius: 56px;
  box-sizing: border-box;
  background: var(--color-bg-black);
  color: var(--color-text-white);
  white-space: nowrap;
  padding: 18px 15px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: var(--font-family2);
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 28px;
  &:hover {
    transform: scale(1.1);
  }
`;