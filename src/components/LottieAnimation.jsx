import Lottie from "lottie-web";
import { useEffect, useRef } from "react";
import animationdata from "../assets/Animation - 1718807859967.json"

const LottieAnimation = () => {

    const container = useRef();

    useEffect(() => {
        const anim = Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg', // Choose the renderer that suits your needs (svg, canvas, html)
            loop: true,
            autoplay: true,
            animationData: animationdata, // Your animation data
          });
      
          // Clean up on unmount
          return () => anim.destroy();
        }, [])

    return (
        <div ref={container} style={{ width: '100%', height: '100%' }}>

        </div>
    );
};

export default LottieAnimation;