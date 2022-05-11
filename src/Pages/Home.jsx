import React, { useState , lazy} from "react";
import Header from '../Components/Header';
import About from '../Components/aboutme';
import Works from "../Components/Works";
import Contact from '../Components/Contact';
import Footer from '../Components/footer';
import Fade from 'react-reveal/Fade';

const Bar = lazy(() => import('../Components/Navigation/index'));

function Home() {
    return (
      <>
      <Bar/>
    <Fade bottom><Header/>
    <About/></Fade>
    <Works/>
    <Contact/>
    <Footer/>
    </>
    );
  }
  
  export default Home;