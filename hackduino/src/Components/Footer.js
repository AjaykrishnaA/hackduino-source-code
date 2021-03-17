import React from 'react';
import "./Footer.css";
//import logo_png from '../images/logo.png';
//import logo_webp from '../images/logo.webp';
import niser_logo_light_png from '../images/niser-logo-light.png';
//import niser_logo_light_webp from '../images/niser-logo-light.webp';
import initFontAwesome from "./initFontAwesome";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
initFontAwesome();

function Footer() {
    return (
            <section  className="tiles" id="connect"><hr />
                {/*
                <div className="connect-desc">
                    <div className="connect-rtc">
                        <p style={{fontSize:"1.6em"}} >
                            <a id="niser-link" href='https://robotechniser.github.io/' >
                                <strong>RoboTech Club (RTC), NISER</strong>
                            </a> 
                        </p>
                    </div>
                    <div className="connect-MLab">
                        <picture>
                                <source id="connect-logo" type="image/webp" srcset={logo_webp} />
                                <img alt='' id="connect-logo" src={logo_png} />
                            </picture>
                        
                        <a id="niser-link" href="https://www.niser.ac.in/~smishra/" >
                        Subhankar Mishra's Lab (MLab), NISER
                        </a>
                    </div>

                    
                    <div className="connect-niser">
                        <picture>
                            <source id="connect-logo" type="image/webp" srcset={niser_logo_light_webp} />
                            <img alt='' id="connect-logo" src={niser_logo_light_png} />
                        </picture>
                        <p className="connect-niser">
                            <a id="niser-link" href="http://www.niser.ac.in" >National Institute of Science Education and Research<br/></a>
                            Bhubaneswar, India
                        </p>
                    </div>
                    
                    <div  className="connect-scps" style={{fontSize:"1.6em"}} >
                        <p>
                            <a id="niser-link" href='https://www.niser.ac.in/scps/' >
                                <strong  >School of Computer Sciences(SCPS), NISER</strong>
                            </a>   
                        </p>
                    </div>
                    
                </div>*/}
                <div className="connect_new">
                    <div className="connect_new_blur">
                        <div className="connect_new_content">
                            <div className="connect_new_content_text">
                                <i><span style={{color:"#888"}}>Brought to you by:</span></i> <br />
                                <a href="https://www.niser.ac.in/~smishra" ><span style={{fontSize:"1.2em"}}>Dr. Subhankar Mishra’s Lab</span></a><br />
                                <a href="https://www.niser.ac.in/scps" ><span style={{fontSize:"1.8em"}}>School of Computer Sciences</span></a><span style={{fontSize:"1.8em"}}>,</span><br />
                                <a href="https://www.niser.ac.in/" ><span style={{fontSize:"1.1em"}}>National Institute of Science Education and Research,</span></a><br />
                                Bhubaneswar – 752050<br /><br /><br /><br />
                                Contact: <a href="mailto:rtc@niser.ac.in" className="">rtc@niser.ac.in</a> , +91-9829636428<br />
                                (Preferred media of communication: Email)
                            </div>
                            <div className="connect_new_content_logo">
                            <a id="connect-logo" href="https://www.niser.ac.in/" ><img alt='niser_logo'  src={niser_logo_light_png} /></a>
                            </div>
                        </div>
                        {/*<!-- MAIL, GITHUB, WHATSAPP, YT, FB, INSTA -->*/}
                        <div className="club-details-container">
                            <a className="club-details github" href="https://github.com/robotechniser" title="Link to our GitHub Organization" ><FontAwesomeIcon icon={['fab', 'github']} /></a>
                            <a className="club-details mail" href="mailto:rtc@niser.ac.in" title="Mail Us" ><FontAwesomeIcon icon={['fas', 'envelope']} /></a>
                            <a className="club-details whatsapp" href="https://wa.me/918895750451" title="WhatsApp Us" ><FontAwesomeIcon icon={['fab', 'whatsapp']} /></a>
                            <a className="club-details yt" href="https://www.youtube.com/channel/UCDhZH_ndJbuxbzmKAyanrqQ" title="Link to our YouTube" ><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
                            <a className="club-details fb" href="https://www.facebook.com/rtcniser/" title="Link to our Facebook Page" ><FontAwesomeIcon icon={ ['fab', 'facebook']} /></a>
                        </div>
                    </div>
                </div>
                


                
            </section>
    )}     
       
           
    


export default Footer
