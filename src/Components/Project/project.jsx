import React, {Suspense, useState, useEffect} from 'react';
import { IconContainer } from '../../Styles/mypage';
import { Heading , Container, ButtonPad, Img, HeadingPad, SubHeading} from '../../Styles/project';
import { Button5 } from '../Button/Button1';
import { BsArrowLeft } from "react-icons/bs";
// import img from '../../assets/images/1.jpg';
// import img2 from '../../assets/images/2.jpg';
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot
} from "firebase/firestore";
import { useParams } from 'react-router-dom';
import { Project } from '../../data/ProjectData';


const ProjectData = ({headline, subHead, img}) =>{

  // const [Images, setImages] = useState([]);
  // useEffect((image) => {
  //   const ImageCollection = collection(db, "Project", image.id, "Img")
  //   const getImages = async () => {
  //     const document = await getDocs(ImageCollection)
  //     setImages(document.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  //   } 
  //   return getImages();
  // },[])

return(
    <Container>
            <HeadingPad>
            <Heading> {headline} </Heading>
            <SubHeading>{subHead}</SubHeading>
            </HeadingPad>
            {/* <Img src={Img}/> */}
         {img.map((il, key) =>{
             return(
                 <Img 
                 key={key}
                 src={il.img}/>
             )
         })}
        </Container>

)
}
const Projects = () => {

  const { project } = useParams();
    
  // const [files, setFiles] = useState([]);

 
  // const ProjectCollection = doc(db, "Project", Project, "Img");
  // useEffect(() => {
  //   const ProjectCollection = collection(db, "Project");
  //   const getUsers = async () => {
  //         const data = await getDocs(ProjectCollection);
  //         setFiles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //       };
  //       getUsers();
  //     }, []);
      //------
//   useEffect(() => {
//         const getUsers = onSnapshot(ProjectCollection, snapshot => {
//             const data = snapshot.docs.map((doc) => ({
//               ...doc.data(), id: doc.id
//                     }));
//                     setFiles(data)
//         })
//         return getUsers; 
// }, [])
// console.log(files);
    return(
        <>
         <ButtonPad>
          <Button5 to='/'><IconContainer><BsArrowLeft/></IconContainer>Go Back</Button5>
          </ButtonPad>
        {Project
        .filter(pro => pro.id === project)
        .map((el, key) => {
            return(
                <ProjectData 
                key={key}
                headline={el.headline}
                subHead={el.subHead}
                img={el.img}
                />
            )
        })    
        
        }
        </>
    )
}
export default Projects;