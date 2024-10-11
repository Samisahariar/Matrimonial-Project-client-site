import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
/*  */
//acernity ui all imports
import { motion } from "framer-motion";
import { ImagesSlider } from "../components/ui/images-slider";
import { FlipWords } from './ui/flip-words';
import "../App.css"
import { fadeIn } from "../components/variants"
import { useScrollOpacity } from "../hooks/useScrollOpacity"


const HomePageCarousel = () => {

    const [opacity, componentRef] = useScrollOpacity();

    const images = [
        "https://i.ibb.co/rZ8FBn8/chi-n-ph-m-njt-Yf7-Pd-Vqw-unsplash.jpg",
        "https://i.ibb.co/y6ScVPb/photo-nic-JQ8-x-G3k-Hjk-unsplash.jpg",
        "https://i.ibb.co/28Q7P0n/jen-theodore-bf-Fv-K1b6-h-A-unsplash.jpg",
        "https://i.ibb.co/PZxhWZ2/eric-alves-div-Fr-H3p6nc-unsplash.jpg",
        "https://i.ibb.co/54knwC6/andrew-itaga-Kx22w26-HUd8-unsplash.jpg"
    ];
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