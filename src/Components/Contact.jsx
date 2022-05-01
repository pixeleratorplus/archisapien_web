import React, { useState, useEffect } from "react";
import { Container, Heading, SubHeading, HeadingMain, Container2, Box, ButtonPadding, 
    IconContainer2,IconContainer} from '../Styles/Contact';
import { Button4 } from '../Components/Button/Button1';
import { MdContentCopy } from "react-icons/md";
import { BsMedium } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn, FaAngellist, FaBehance } from "react-icons/fa";

function Contact() {
    const email = 'archisapien014@gmail.com'
    const copy = () => {
        navigator.clipboard.writeText(email)
    }
    const [isCopied, setIsCopied] = useState(false)
    const toggle = () => {
        setIsCopied(!isCopied);
        copy();
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsCopied(false);
        }, 10000);
        return () => clearTimeout(timer);
      }, []);
    return (
    <>
    <Container id='contact'>
        <Box>
        <SubHeading>Want to Connect</SubHeading>
        <Heading>archisapien014@gmail.com</Heading>
      <ButtonPadding>
      <Button4 onClick={toggle} isCopied={isCopied}>
          <IconContainer><MdContentCopy/></IconContainer>{isCopied ? "Copied" : "Copy to Clipboard"}</Button4>
      </ButtonPadding>
        </Box>
    </Container>
    <Container2>
        <IconContainer2 href="https://www.linkedin.com/in/amiteshdebnath/"><FaLinkedinIn/></IconContainer2>
        <IconContainer2 href="https://www.instagram.com/the_archisapien/"><FaInstagram/></IconContainer2>
        <IconContainer2 href="https://www.behance.net/archisapien"><FaBehance/></IconContainer2>
        <IconContainer2 href="https://angel.co/u/archisapien"><FaAngellist/></IconContainer2>
        {/* <IconContainer2 href="https://medium.com/@amiteshdebnath"><BsMedium/></IconContainer2> */}
    </Container2>
    </>
    );
  }
  
  export default Contact;