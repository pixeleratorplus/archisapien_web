import React, {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Routes, Route} from  'react-router-dom';
// import { GlobalStyle } from './styles/GlobalStyles';
// import { FontStyle } from './fonts/FontStyles';
import ScrollToTop from './Components/ScrollToTop';
import Loader from './Components/Loader.jsx';

const Home = lazy(() => import('./Pages/Home'));
const MyPage = lazy(() => import('./Pages/About'));
const Project = lazy(() => import('./Pages/Project'));


function Rout() {
    return (
    <Router>
        <Suspense fallback={<Loader/>}>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
         <ScrollToTop/>
         <Routes>
         <Route path="/" element={<Home/>}  />
         <Route path="/about" element={<MyPage/>}  />
         <Route path="/:project" element={<Project/>}  />
         </Routes>
         </Suspense>
         </Router>
         )
        }
        export default Rout;