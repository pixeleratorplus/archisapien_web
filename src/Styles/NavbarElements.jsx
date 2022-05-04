import styled,{css} from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { NavLink as LinkN } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { IoMdDownload } from 'react-icons/io'


export const Nav = styled.nav`
  background: transparent;
  height: 12rem;
  display:flex;
  justify-content: space-between;
  font-size: 1rem;
  position: absolute;
  top:0;
  z-index: 8;
  width: 100%;
  flex-direction: row;  
`;

export const NavLogo = styled(LinkR) `
display: flex;
cursor: pointer;
color: var(--color-text-black);
justify-content: flex-start;
text-decoration: none;
padding: 0 0 0 4.5rem;
font-size: 2.5rem;
align-items: center;
font-family: var(--font-family3);
`

export const NavMenu = styled.nav`
  display:flex;
  justify-content: center;
  list-style: none;
  align-items: center;
  padding: 0 4.5rem 0 0;
  // @media screen and (max-width: 480px) {
  //   display: none;
  // }
`

export const IconContainer = styled.span`
 padding: 0 10px 0 0;
 display:flex;
  justify-content: center;
`
export const Download = styled.a`
  color: var(--color-text-black);
  &:hover {
    transition: all 0.2s ease-in-out;
    color: var(--color-theme);
    text-decoration: none;
  }
`
export const DownloadLink = styled.a`
  color: var(--color-text-black);
  font-family: var(--font-family2);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 3rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 500;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: var(--color-theme);
    text-decoration: none;
  }
`
export const NavItem = styled.li`
  height: 80px;
`

export const NavLinks = styled(LinkS)`
  color: var(--color-text-black);
  font-family: var(--font-family2);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 3rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 500;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: var(--color-theme);
    text-decoration: none;
  }
`;




