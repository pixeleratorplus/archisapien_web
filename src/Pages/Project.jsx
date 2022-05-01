import React, {Suspense} from 'react';
import Project from '../Components/Project/project';
import Footer from '../Components/footer';
import Loader from '../Components/Loader.jsx';

const Projects = () => {
    return(
        <>
        <Suspense fallback={<Loader/>}>
        <Project/>
        <Footer/>
        </Suspense>
        </>
    )
}
export default Projects;