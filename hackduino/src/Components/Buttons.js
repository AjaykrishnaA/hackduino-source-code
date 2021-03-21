import React from 'react';
import Button from 'react-bootstrap/Button';

function Buttons() {
    return (
        <div className="banner_a_div">
                        <Button variant='primary' href="https://docs.google.com/document/d/1fay2d8J_tuwq4_SGNt-1WTI_SyGkulHJKwJP55LbM6E/edit?ts=604e4ab2">
                        Learn More
                        </Button>{' '}
                        <Button href="https://docs.google.com/forms/d/1ZeEhKxT0cXqyN4etNJ6C_k4dtr-ugnPxCqV1kZ-GWww/edit?usp=sharing_eil&ts=604dccfb">
                        Register
                        </Button>
                    </div>
    )
}

export default Buttons
