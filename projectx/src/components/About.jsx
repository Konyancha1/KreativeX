import React from 'react';
import '../index.css';

export default function About(){
    return(
        <div>
            <div className='intro'>
                Where Being Creative 
            </div>
            <div className='intro1'>
                is The X Factor
            </div>
            <div className='intro2'>
                Use Creative Marketing So That Customers Get
            </div>
            <div className='intro3'>
                A 360-Degree View of Your Business
            </div>
            <a href='/portfolio'>
                <button className='more'>Learn More</button>
            </a>
        </div>
    );
}