import React, { createContext } from 'react';
import Dad from '../Dad/Dad';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';

const AssetContext = createContext('gold')

const Grandpa = () => {
    const asset = 'daimond';
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
        <AssetContext.Provider value='gold'> 
            <section className='flex'>
                <Dad asset={asset}></Dad>
                <Uncle asset={asset}></Uncle>
                <Aunty></Aunty>
              </section>
        </AssetContext.Provider>
        </div>
    );
};

export default Grandpa;