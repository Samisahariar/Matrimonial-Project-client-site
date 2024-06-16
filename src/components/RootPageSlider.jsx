import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../App.css"

const animation = { duration: 10000, easing: (t) => t }


const RootPageSlider = () => {

    const [sliderRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        drag: false,
        created(s) {
            s.moveToIdx(5, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
    })


    return (
        <div ref={sliderRef} className="keen-slider h-[100vh]">
            <div className="keen-slider__slide number-slide1">1</div>
            <div className="keen-slider__slide number-slide2">2</div>
            <div className="keen-slider__slide number-slide3">3</div>
            <div className="keen-slider__slide number-slide4">4</div>
            <div className="keen-slider__slide number-slide5">5</div>
            <div className="keen-slider__slide number-slide6">6</div>
        </div>
    )
};

export default RootPageSlider;