import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../App.css";
import 'animate.css';
import { Link } from "react-router-dom";


const RootPageSlider = () => {

    return (
        <div className="bona-nova h-[100vh] relative flex">
            <img className="bg-center w-full h-[100vh] bg-contain b" src="https://i.ibb.co/sFtJHfv/photo-1532712938310-34cb3982ef74-q-80-w-1470-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" />
            <div className="hero-overlay bg-opacity-20 absolute h-[80vh] w-[80%] top-[10%] left-[10%] border-4 border-white rounded-xl">
                <h3 className="animate__animated animate__pulse animate__delay-1s text-6xl text-center text-white">SAVE THE DATE</h3>
                <Link to="main"><button className="btn btn-ghost">Start the journey</button></Link>
            </div>
        </div>
    )
};

export default RootPageSlider;

