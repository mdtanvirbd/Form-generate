import React, { use, useContext } from 'react';
import { AssetContext } from '../Grandpa/Grandpa';

const Firend = () => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h3>Friend:</h3>
            <p>Have: {gift}</p>
        </div>
    );
};

export default Firend;