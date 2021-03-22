import React from 'react';
import './Banner.css';
import Buttons from './Buttons.js';
import niser_logo_light_png from '../images/niser-logo-light.png';

function Banner() {
    return (
        <>
            <section className='banner' >
                <div className="banner_header">
                    <div className="banner_header_image">
                    <a id="connect-logo" href="https://www.niser.ac.in/" ><img alt='niser_logo'  src={niser_logo_light_png} height="100px" /></a> 
                    </div>
                    <div className="banner_header_text">
                    <a href="https://www.niser.ac.in/~smishra" ><span className="lab_heading">Dr. Subhankar Mishra’s Lab</span></a><br />
                    <a href="https://www.niser.ac.in/scps" ><span className="scps_heading">School of Computer Sciences</span></a><br />Email : rtc@niser.ac.in
                    </div>
                </div>
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
