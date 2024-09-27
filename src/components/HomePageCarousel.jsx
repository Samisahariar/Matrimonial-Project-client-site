import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
/* for animating project */
import { inView } from "framer-motion"
/*  */
//acernity ui all imports
import { motion } from "framer-motion";
import { ImagesSlider } from "../components/ui/images-slider";
import Lottie from "lottie-react";
import scrolldata from "../animations/scrolldown.json"

import { Autoplay, Pagination, Navigation, Parallax } from 'swiper/modules';


const HomePageCarousel = () => {

    const images = [
        "https://i.ibb.co/rZ8FBn8/chi-n-ph-m-njt-Yf7-Pd-Vqw-unsplash.jpg",
        "https://i.ibb.co/y6ScVPb/photo-nic-JQ8-x-G3k-Hjk-unsplash.jpg",
        "https://i.ibb.co/28Q7P0n/jen-theodore-bf-Fv-K1b6-h-A-unsplash.jpg",
        "https://i.ibb.co/PZxhWZ2/eric-alves-div-Fr-H3p6nc-unsplash.jpg",
        "https://i.ibb.co/54knwC6/andrew-itaga-Kx22w26-HUd8-unsplash.jpg"
    ];

    const AnimationScroll = () => <Lottie animationData={scrolldata} className='h-[40vh] absolute bottom-0'></Lottie>


    return (
        <ImagesSlider className="h-[40rem] relative" images={images}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center"
            >
                <AnimationScroll></AnimationScroll>
            </motion.div>
        </ImagesSlider>
    );
};

export default HomePageCarousel;