import React, { useState } from "react";
import { Container, Heading, HeadingMain} from '../Styles/HeadElements';

function Head() {
    return (
      <>
    <Container>
      <HeadingMain>Hi, I am <br/><Heading>Amitesh Debnath</Heading>,<br/> An Architect by Qualification,
                    <br/> Designer by Disposition,<br/> focused on crafting experiences<br/> for the new internet users.</HeadingMain>
    </Container>
    </>
    );
  }
  
  export default Head;