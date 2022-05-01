import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-web";
import { Container, Container2, Message, Heading, ButtonPad, IconContainer, Column1, Column2, Row, Chess} from '../Styles/aboutElements';
import { Button1 } from "./Button/Button1";
import { BsArrowRight } from "react-icons/bs";

function About() {

    const container = useRef(null)

    useEffect(() => {
        Lottie.loadAnimation({
          container: container.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: require('../assets/pic1.json')
        })
      }, [])

    return (
      <>
      <Container id="about">
      <Row>
          <Column1><Container2>
          <div className="container" ref={container}></div>  </Container2>
          </Column1>
          <Column2>
          <Container2>
          <Heading>About Me</Heading>
          <Message> Hailing from Kolkata, I am an Architect turned Experience Designer who likes the blend of design, code and business. 
              Which enables me to understand and consider the needs of the diverse product team to make decisions, most importantly the user. <br/><br/>
              I read product case studies and case interviews to increase my problem solving and critical thinking ability. <br/><br/>
              Apart from work, I am a regular chess player at chess.com, you can challenge me <Chess href="https://www.chess.com/member/archisapien">here</Chess>.</Message>
              <ButtonPad>
              <Button1 to='/about'exact='true'>More about me<IconContainer><BsArrowRight/></IconContainer></Button1>
              </ButtonPad>
              </Container2>
          </Column2>
      </Row>
      </Container>
    </>
    );
  }
  
  export default About;