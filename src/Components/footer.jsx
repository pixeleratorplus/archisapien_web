import React, { useState } from "react";
import { Container, Container2, Heading, Updated, Top } from '../Styles/footer';
import { Button4 } from '../Components/Button/Button1'
import { animateScroll as scroll } from 'react-scroll';

function Footer() {

    const toggleHome = () => {
        scroll.scrollToTop();
      }
    return (
    <>
    <Container>

    <Container2>
     <Heading>© 2022 Made with ❤️ by Amitesh | India | Last updated on April '22</Heading>
    </Container2>
    <Top onClick={toggleHome}><Button4>Go To Top</Button4></Top>

    </Container>
    </>
    );
  }
  
  export default Footer;