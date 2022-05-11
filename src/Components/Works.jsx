import React, { useState } from "react";
import { Container, Heading, SubHeading, Card, CardPadding, Row, Column1, 
    Img, Column2, InCard, IconContainer, ButtonPadding} from '../Styles/WorkElements';
import {Button2, Button3} from './Button/Button1';
import { FaBehance } from "react-icons/fa";
import { ProjectOne, ProjectTwo, ProjectThree, ProjectFour, ProjectFive } from "../data/ProjectData";
import Fade from 'react-reveal/Fade';

const Work = ({headline, subHead, img, id, alt, to, buttonColor, cardBg}) => {
    return (
      <>
        <CardPadding id={id}>
          <Card style={{background: `${ cardBg }`}}>
              <Row>
                  <Column1>
                  <InCard>
                  <Heading>{headline}</Heading>
                <SubHeading>{subHead}</SubHeading>
                <Button2 to={to} exact='true' style={{background: `${buttonColor}`}}>Details</Button2>
                  </InCard>
                  </Column1>
                  <Column2>
                  <Img src={img}/>
                  </Column2>
              </Row>
          </Card>
        </CardPadding>
    </>
    );
  }
  const Works = () =>{
    return(
      <>
      <Container id="work">
      <Fade bottom><Heading>selected works</Heading></Fade>
      <Fade bottom><Work {...ProjectOne}/></Fade>
      <Fade bottom><Work {...ProjectTwo}/></Fade>
      <Fade bottom><Work {...ProjectThree}/></Fade>
      <Fade bottom><Work {...ProjectFour}/></Fade>
      <Fade bottom><Work {...ProjectFive}/></Fade>
      <ButtonPadding>
      <Button3 href="https://www.behance.net/archisapien">View More <IconContainer><FaBehance/></IconContainer>
      </Button3>
      </ButtonPadding>
      </Container>
      </>
    )
  }
  
  export default Works;