import React from 'react';
import './Gallery.css';
import VideoItem from './VideoItem';


function Gallery() {
    return (
        <div className='videos'>
            <h1>VIDEOS</h1>
            <div className='videos__container'>

                <ul className='videos__items'>
                    <VideoItem 
                        src='/videos/roasting.mp4'
                        width="550"
                        height="450"
                        controls
                    />
                    <VideoItem 
                        src='/videos/cooling.mp4'
                        width="550"
                        height="450"
                        controls
                    />
                    
                </ul>
                <ul className='videos__items'>
                    <VideoItem 
                        src='/videos/roasting.mp4'
                        width="550"
                        height="450"
                        controls
                    />
                   
                    
                </ul>
            </div>
        </div>
    )
};

export default Gallery;


