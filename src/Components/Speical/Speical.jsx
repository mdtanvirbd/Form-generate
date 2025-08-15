import React, { useContext } from 'react';
import { AssetContext } from '../Grandpa/Grandpa';

const Speical = ({asset}) => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>My wife</h2>
            <p>Has:{asset}</p>
            <p>Gift:{gift}</p>
        </div>
    );
};

export default Speical;