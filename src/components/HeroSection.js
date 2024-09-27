import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (

        <div className='hero-container'>
            <video src='/videos/cooling.mp4' autoPlay loop muted />
            <h1>ROAST WITH US</h1>
            <p>An Unforgettable Coffee Experience</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    MORE VIDEOS <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>

    )
}

export default HeroSection
