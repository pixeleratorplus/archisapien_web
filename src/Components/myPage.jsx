import React, { useState , lazy} from "react";
import { Image, HeroBg, HeroContainer, Heading, HeroContent, IconContainer, ButtonPad, ImageG, ImageM,
    Container, Heading2, Group, GroupA, GroupB, GroupC, Container2, Heading3, Message} from '../Styles/mypage';
import {Button5} from './Button/Button1';
import { BsArrowLeft } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn, FaAngellist, FaBehance } from "react-icons/fa";
import { Social } from "./social";


const MyPage = () => {
    return (
      <>
      <HeroContainer>
      <HeroBg>
      <Image src="./images/me.jpg"/>
      <div className="background" />
      </HeroBg>
      <ButtonPad>
          <Button5 to='/'><IconContainer><BsArrowLeft/></IconContainer>Go Back</Button5>
          </ButtonPad>
      <HeroContent>
      <Heading>Namaskar🙏, This is Amitesh!</Heading>
      </HeroContent>
      </HeroContainer>
        <Container2>
            <Message>Hailing from Kolkata, I am an Architect turned Experience Designer who likes the blend of design, code and business. Which enables me to understand and consider the needs of the diverse product team to make decisions, most importantly for the user.</Message>
        <Heading3>About Me an my Interests</Heading3>
            <GroupC>
            <ImageM src="./images/m1.png"/>
            <ImageM src="./images/m2.png"/>
            <ImageM src="./images/m3.png"/>
            <ImageM src="./images/m4.png"/>
            <ImageM src="./images/m5.png"/>
            <ImageM src="./images/m6.png"/>
            <ImageM src="./images/m7.png"/>
            <ImageM src="./images/m8.png"/>
            <ImageM src="./images/m9.png"/>
            <ImageM src="./images/m10.png"/>
            <ImageM src="./images/m11.png"/>
            <ImageM src="./images/m12.png"/>
            <ImageM src="./images/m13.png"/>
            <ImageM src="./images/m14.png"/>
            <ImageM src="./images/m15.png"/>
            <ImageM src="./images/m16.png"/>
            </GroupC>
        </Container2>
      <Container>
        <Heading3>Little things that I am proud about -</Heading3>
        <Group>
            <GroupA>
            <ImageG src="./images/g1.jpg"/>
            </GroupA>
            <GroupB>
            <ImageG src="./images/g2.jpg"/>
            <ImageG src="./images/g3.jpg"/>
            </GroupB>
        {/* </Group>
        <Group> */}
            <GroupA>
            <ImageG src="./images/g4.jpg"/>
            </GroupA>
            <GroupB>
            <ImageG src="./images/g5.jpg"/>
            <ImageG src="./images/g6.jpg"/>
            </GroupB>
        </Group>
      </Container>
     <Social/>
    </>
    );
  }
  
export default MyPage;