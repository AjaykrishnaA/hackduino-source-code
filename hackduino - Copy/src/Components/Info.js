import React from 'react';
//import useScript from './useScript';
import './Info.css';
import Button from '@material-ui/core/Button';
import ScrollOut from "scroll-out";

ScrollOut({
    targets: '.section_heading, .info_1, .info_2, .info_3, button_div'
});

function Info() {
    return (
        <div className='info' ><hr />
            <div className='info_1' >
                <div className="text"><hr />            
                    <h2 className='section_heading' >What is “Hack-duino”?</h2> <hr /><br />
                    <ul>
                        <li>
                            Hack-duino is a hackathon, seeking ideas to utilize the power of robotics (small and big scale) for dealing with post disaster scenarios.
                        </li><br />
                        <li>
                            Hackathon will be held in 2 stages:
                            <ul>
                                
                                <p style={{marginLeft:"1em"}}><li><b>Stage 1</b>: Idea submission in form of a pdf. 5 participations will be qualified for next stage.</li></p>
                                
                                
                                <p style={{marginLeft:"1em"}}><li><b>Stage 2</b> :A Descriptive video of the idea – preferably something involving a demonstrative model (Not mandatory though) Top 3 entries will be selected and awarded. The best idea gets a special recognition in the form of a collaboration with Dr. Subhankar Mishra’s Lab, School of Computer Sciences, NISER (Bhubaneswar). <br /><br />
                                <b>Dr. Mishra’s Lab will support the people submitting the best idea and together we will develop the said idea and see the future prospects of the model.</b></li></p><br />
                                
                                
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className='info_2' >

                <div className="text">
                <hr /><h2 className='section_heading' >Who can participate?</h2> <hr /> <br/>
                    <ul>
                        <li>
                            Anyone who is interested in technology and creative applications of machines is most welcome to participate. Or in other words there is no qualification criteria for participation.
                        </li>
                        <li>
                            Participation can be either individual or in teams of not exceeding 3 people.
                        </li>
                    </ul><br/><br/>
                    
                </div>
            </div><hr />
            <div className="info_3">
                <div className="text">
                <hr /><h2 className='section_heading' >To register and for further info:</h2> <hr /> <br/>
                <p>
                    For more information about the event and to register, Please visit the following links:
                </p>
                <div className="button_div">
                        <Button size="large"  variant="contained" href="https://drive.google.com/file/d/1tIp39pMM-jV0-T34vP6vCAGl9sR6QR18/view?usp=sharing">
                        Learn More
                        </Button>
                        <Button size="large"   variant="contained" color="primary"href="https://docs.google.com/forms/d/1ZeEhKxT0cXqyN4etNJ6C_k4dtr-ugnPxCqV1kZ-GWww/edit?usp=sharing_eil&ts=604dccfb">
                        Register
                        </Button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Info
