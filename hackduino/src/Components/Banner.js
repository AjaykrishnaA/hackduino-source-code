import React from 'react';
import './Banner.css';
import Buttons from './Buttons.js';

function Banner() {
    return (
        <>
            <section className='banner' >
                <div className="banner_text">
                    <h6 className="heading_before" >Interested to build something?</h6>
                    <h1 class="line-1 anim-typewriter">Hack-duino</h1>
                    <h6 className="heading_after" >A hackathon on the celebration of Arduino Day😍</h6>
                    <Buttons className="banner_buttons" />
                    {/*<span class="animate__animated animate__bounce delay_7s"></span>*/}
                </div>
                <div className='text_bg' ></div>
            </section>
        </>
    )
}

export default Banner
