import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
/* for animating project */
import { inView } from "framer-motion"
/*  */

import { Autoplay, Pagination, Navigation, Parallax } from 'swiper/modules';


const HomePageCarousel = () => {
    const section = document.getElementById("carousel")
    inView(section, () => {
        console.log("the carousel in the view section and we are the always in the checkup section")
    })
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (

        <div className='-z-2' id='carousel'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}

                speed={600}
                parallax={true}

                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/rZ8FBn8/chi-n-ph-m-njt-Yf7-Pd-Vqw-unsplash.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/y6ScVPb/photo-nic-JQ8-x-G3k-Hjk-unsplash.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/28Q7P0n/jen-theodore-bf-Fv-K1b6-h-A-unsplash.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/PZxhWZ2/eric-alves-div-Fr-H3p6nc-unsplash.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/54knwC6/andrew-itaga-Kx22w26-HUd8-unsplash.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/XYJwg5V/juliette-f-fb0-wj2-MZk4-unsplash.jpg" alt="" />
                </SwiperSlide>

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default HomePageCarousel;