import React from 'react';
import Speical from '../Speical/Speical';

const MySelf = ({asset}) => {
    return (
        <div>
            <h2>MySelf</h2>
            <p>I am a web developer.</p>
            <section className='flex'>
                <Speical asset = {asset}></Speical>
            </section>
             
        </div>
    );
};

export default MySelf;