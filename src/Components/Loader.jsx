import React, { useEffect, useRef } from 'react';
import {  Position } from '../Styles/LoadingElement';
import Lottie from "lottie-web";

const Loading = () => {

    const container = useRef(null)

    useEffect(() => {
        Lottie.loadAnimation({
          container: container.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: require('../assets/loading.json')
        })
      }, []);

    return (
        <>
        <Position>
        <div className="container" ref={container}></div>
        </Position>
        </>
    )
}
export default Loading;