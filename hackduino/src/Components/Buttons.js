import React from 'react';
import Button from '@material-ui/core/Button';
import './Buttons.css';

function Buttons() {
    return (
        <div className="banner_buttons_div">
            <div className="button_1">
                <Button size="large"  variant="contained" color="default" href="https://drive.google.com/file/d/1tIp39pMM-jV0-T34vP6vCAGl9sR6QR18/view?usp=sharing">
                Learn More
                </Button>
            </div>
            {' '}
            <div className="button_2">
                <Button size="large"   variant="contained" color="primary" href="https://docs.google.com/forms/d/1ZeEhKxT0cXqyN4etNJ6C_k4dtr-ugnPxCqV1kZ-GWww/edit?usp=sharing_eil&ts=604dccfb">
                Register
                </Button>
            </div>
                        
        </div>
    )
}

export default Buttons
