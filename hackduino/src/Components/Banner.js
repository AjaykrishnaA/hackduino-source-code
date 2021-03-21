import React from 'react';
import './Banner.css';
import Buttons from './Buttons.js';

function Banner() {
    return (
        <>
            <section className='banner' >
                <div className="banner_text">
                    <h6>Interested to build something?</h6>
                    <h1>Hack-duino</h1>
                    <h6>A hackathon on the celebration of Arduino Day😍</h6>
                    <Buttons />
                </div>
                <div className='text_bg' ></div>
            </section>
        </>
    )
}

export default Banner
