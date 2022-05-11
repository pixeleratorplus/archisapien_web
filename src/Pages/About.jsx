import React, {Suspense} from 'react';

import Footer from '../Components/footer';
import MyPage from '../Components/myPage';
import Loader from '../Components/Loader.jsx';

function About() {
    return (
      <>
        <Suspense fallback={<Loader/>}>
      <MyPage/>
    <Footer/>
    </Suspense>

    </>
    );
  }
  
  export default About;