import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
/*  */
//acernity ui all imports
import { motion } from "framer-motion";
import { ImagesSlider } from "../components/ui/images-slider";
import Lottie from "lottie-react";
import scrolldata from "../animations/scrolldown.json"
import { FlipWords } from './ui/flip-words';
import "../App.css"
import { fadeIn } from "../components/variants"
import React, { useState, useEffect, useRef } from 'react';



const HomePageCarousel = () => {
    const [opacity, setOpacity] = useState(1);
    const componentRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (componentRef.current) {
                const rect = componentRef.current.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                const middlePoint = viewportHeight / 2;

                // Calculate distance from the middle point
                const distanceFromMiddle = Math.abs(rect.top + rect.height / 2 - middlePoint);

                // Change opacity based on distance from the middle point
                if (distanceFromMiddle < middlePoint) {
                    // Scale the opacity from 1 at the middle to 0 when out of the viewport
                    const newOpacity = 1 - distanceFromMiddle / middlePoint;
                    setOpacity(newOpacity);
                } else {
                    setOpacity(0);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once on mount to initialize

        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup
        };
    }, []);

    const images = [
        "https://i.ibb.co/rZ8FBn8/chi-n-ph-m-njt-Yf7-Pd-Vqw-unsplash.jpg",
        "https://i.ibb.co/y6ScVPb/photo-nic-JQ8-x-G3k-Hjk-unsplash.jpg",
        "https://i.ibb.co/28Q7P0n/jen-theodore-bf-Fv-K1b6-h-A-unsplash.jpg",
        "https://i.ibb.co/PZxhWZ2/eric-alves-div-Fr-H3p6nc-unsplash.jpg",
        "https://i.ibb.co/54knwC6/andrew-itaga-Kx22w26-HUd8-unsplash.jpg"
    ];

    const AnimationScroll = () => <Lottie animationData={scrolldata} className='h-[40vh] absolute bottom-0'></Lottie>
    const words = ["Perfect", "Impecable"]

    return (
        <ImagesSlider
            className="h-[100vh] relative" images={images}>
            <motion.div
                ref={componentRef}
                variants={fadeIn("right", 0.3, opacity)}
                initial="hidden"
                animate="show"
                style={{ opacity: opacity }}
                className="z-50 absolute left-20 bottom-85 text-5xl playfair-font"
            >
                <span className="text-white">Perfect Place to find the</span> <br /> <FlipWords words={words} className="text-red-500" /><span className='text-white'>match for you</span>

            </motion.div>
        </ImagesSlider>
    );
};

export default HomePageCarousel;