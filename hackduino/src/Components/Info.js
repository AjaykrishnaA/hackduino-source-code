import React from 'react';
import './Info.css';
import Button from '@material-ui/core/Button';



function Info() {
    return (
        <div className='info' ><hr />
            <div className='info_1' >
                <div className="text"><hr />            
                    <h2 className='section_heading' >What is “Hack-duino”?</h2> <hr /><br />
                    <ul>
                        <li>
                            Hack-duino is a hackathon, seeking ideas to utilize the power of robotics (small and big scale) for dealing with post disaster scenarios (such as after cyclones – particularly in eastern India).
                        </li><br />
                        <li>
                            Hackathon will be held in 2 stages:
                            <ul>
                                
                                <p style={{marginLeft:"2.5em"}}><li><strong><u>Stage 1</u></strong>: Idea submission in form of a pdf. 5 participations will be qualified for next stage.</li></p>
                                
                                
                                <p style={{marginLeft:"2.5em"}}><li><strong><u>Stage 2</u></strong> :A Descriptive video of the idea – preferably something involving a demonstrative model (Not mandatory though) Top 3 entries will be selected and awarded. The best idea gets a special recognition in the form of a collaboration with Dr. Subhankar Mishra’s Lab, School of Computer Sciences, NISER (Bhubaneswar). <br /><br />
                                <strong>Dr. Mishra’s Lab will support the people submitting the best idea and together we will develop the said idea and see the future prospects of the model.</strong></li></p><br />
                                
                                
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
                        <Button  size="large" color="primary" height="25%" href="https://docs.google.com/document/d/1fay2d8J_tuwq4_SGNt-1WTI_SyGkulHJKwJP55LbM6E/edit?ts=604e4ab2">
                        Event Portfolio
                        </Button>
                        <Button style={{height:"2rem"}}  size="large" color="blue" height="25%" href="https://docs.google.com/forms/d/1ZeEhKxT0cXqyN4etNJ6C_k4dtr-ugnPxCqV1kZ-GWww/edit?usp=sharing_eil&ts=604dccfb">
                        &nbsp;&nbsp;&nbsp;&nbsp;Register&nbsp;&nbsp;&nbsp;&nbsp;
                        </Button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Info
