import React, {useState, useEffect, Suspense, lazy} from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = lazy(() => import('./Navbar'));
// const Navbar2 = lazy(() => import('./Navbar2'));

const NavbarScroll = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
    setIsOpen(!isOpen);
    }
    const close = () => {
        setIsOpen(false);
    }
    //-----------------------------------
const [changeHeader, setHeader] = useState(false)
const [animation, setAnimation] = useState(false)

//Scroll
useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, [])

const handleScroll = (event) => {
    let bodyRect = document.body.getBoundingClientRect();
    let top = (bodyRect.top) * (-1);
    let height = event.path[1].innerHeight

    if (top >= height - 100) {
        setHeader(true)
        setAnimation(true)

    }
    else {
        setHeader(false)
    }
}
//-----------------------------------------
const location = useLocation();
const path = location.pathname;

  return (
      <>
      <Suspense fallback={null}>
      {/* { (path === '/') ? ( */}
      <Navbar change={changeHeader}/>
    {/*   ) : <Navbar2/> } */}
      </Suspense>
      </>
  )
}
export default NavbarScroll;