import React, {Suspense, useState, useEffect} from 'react';
import Project from '../Components/Project/project';
import Footer from '../Components/footer';
import Loader from '../Components/Loader.jsx';
import { animateScroll as scroll } from 'react-scroll';
import { BsFileArrowUpFill } from "react-icons/bs";
import styled,{css} from 'styled-components'

const Projects = ({ change }) => {

    const Up = styled.div`
        position: fixed;
        bottom: 10%;
        right: 5%;
        transform:  scale(5);
        color: #000000;
        opacity: 25%;
        cursor: pointer;
        @media screen and (max-width: 480px) {
            right: 10%;
            transform:  scale(2);
            }
            @media screen and (max-width: 768px) {

                transform:  scale(2);
                right: 10%;

            }
            ${({change}) => change ? 
            css`
            opacity: 25%;
            `:
            css`
            opacity: 0;
            `
            }
`;

    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
      if(window.scrollY >= 5000) {
        setScrollNav(true)
      } else {
        setScrollNav(false)
      }
    }
  
    useEffect(() => {
      window.addEventListener('scroll', changeNav)
    }, [])
  
    const toggleHome = () => {
      scroll.scrollToTop();
    }

    return(
        <>
        <Suspense fallback={<Loader/>}>
        <Project/>
        <Footer/>
        <Up onClick={toggleHome} change={scrollNav} ><BsFileArrowUpFill/></Up>
        </Suspense>
        </>
    )
}
export default Projects;