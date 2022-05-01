import { Container2, IconContainer2 } from "../Styles/Contact";
import { FaInstagram, FaLinkedinIn, FaAngellist, FaBehance } from "react-icons/fa";

export const Social = () => {
    return(
        <>
         <Container2>
        <IconContainer2 href="https://www.linkedin.com/in/amiteshdebnath/"><FaLinkedinIn/></IconContainer2>
        <IconContainer2 href="https://www.instagram.com/the_archisapien/"><FaInstagram/></IconContainer2>
        <IconContainer2 href="https://www.behance.net/archisapien"><FaBehance/></IconContainer2>
        <IconContainer2 href="https://angel.co/u/archisapien"><FaAngellist/></IconContainer2>
        {/* <IconContainer2 href="https://medium.com/@amiteshdebnath"><BsMedium/></IconContainer2> */}
    </Container2>
        </>
    )
} 