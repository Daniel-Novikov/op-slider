// import { OpSlider } from './../dist/index.js';

const init = () => {
    const slider = document.querySelector('.slider');
    const frame = document.querySelector('.slider__frame');
    const list = document.querySelector('.slider__list');
    const slides = [].slice.call(document.querySelectorAll('.slider__item'));

    const config = {
        slider, frame, list, slides
    };

    
    console.log(config);
    // const opslider = new OpSlider(config);

}


window.addEventListener('load', init);