import React from 'react';
import '../index.css';

export default function About(){
    return(
        <div id='about'>
            <div className='intro'>
                Where Being Creative 
            </div>
            <div className='intro1'>
                is The X Factor
            </div>
            <div className='intro2'>
                Elevate Your Brand With Our Digital Marketing Strategies
            </div>
            <a href='#portfolio'>
                <button className='more'>Learn More</button>
            </a>
        </div>
    );
}