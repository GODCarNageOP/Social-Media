import React, { useState } from 'react';
import './slider.css';
import SliderSecond from './SliderSecond';
import SliderThird from './SliderThird';
import SliderFirst from './SliderFirst';

const Slider = () => {
    const [activeSlider, setActiveSlider] = useState(1);

    const handleChangeSlider = (sliderNumber) => {
        setActiveSlider(sliderNumber);
    };
    const isActiveSlider=activeSlider===0;
    console.log(isActiveSlider,activeSlider);
    return (
        <div className={`  fixed w-full m-auto mobile:w-[100%] w-[80%] lg:w-[60%] xl:w-[50%] pt-1 ${isActiveSlider ? "Slider-none":"Slider" }`}>
            <div className="bg-dark-50 Slider w-full">
                <div className={`slider-wrapper ${activeSlider === 1 ? 'active' : 'none'}`}>
                    <SliderFirst active={activeSlider} setSlider={setActiveSlider} />
                </div>
                <div className={`slider-wrapper ${activeSlider === 2 ? 'active' : 'none'}`}>
                    <SliderSecond active={activeSlider} setSlider={setActiveSlider}/>
                </div>
                <div className={`slider-wrapper ${activeSlider === 3 ? 'active' : 'none'}`}>
                    <SliderThird active={activeSlider} setSlider={setActiveSlider} />
                </div>
            </div>
        </div>
    );
};

export default Slider;
