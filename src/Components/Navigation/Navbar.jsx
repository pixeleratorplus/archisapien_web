import React, {useState, useEffect} from 'react'
import { IoMdDownload } from 'react-icons/io'
import {IconContext} from 'react-icons/lib'
import { Nav, NavLogo, NavMenu, NavLinks, NavItem, Download, DownloadLink, IconContainer } from '../../Styles/NavbarElements';
import { animateScroll as scroll } from 'react-scroll';
import Logo from '../../assets/images/Logo.svg';
import Logo2 from '../../assets/images/Logo-white.svg';

const Navbar = () => {

  const [hover, setHover] = useState(false);
  const onHover = () => {
  setHover(!hover)
  }
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    {/* <IconContext.Provider value={{ color: '#fff'}}> */}
      <Nav >
          <NavLogo to='/' onClick={toggleHome}>
          Archisapien
            </NavLogo>
          <NavMenu >
            <NavItem>
              <NavLinks to='about'exact='true'
              >About Me</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='work' exact='true'
              >Work</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact' exact='true'              
              >Contact</NavLinks>
            </NavItem>
            <NavItem>
              <DownloadLink href='https://drive.google.com/file/d/1JWtlX3rJIfLRAi592qzxFqHwESbHA_Fb/view?usp=sharing' target='_blank' arial-label='Linkedin'>
               <IconContainer><IoMdDownload/></IconContainer> 
              Resume</DownloadLink>
            </NavItem>
          </NavMenu>
      </Nav>
    {/* </IconContext.Provider> */}
    </>
  )
}

export default Navbar

            