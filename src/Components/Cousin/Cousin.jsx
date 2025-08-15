import React from 'react';
import Speical from '../Speical/Speical';
import Firend from '../Friend/Firend';

const Cousin = ({name,asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
             <section>
                {asset && <Speical asset={asset} />}
                {name == "Rojoni" && <Firend></Firend>}
            </section>

        </div>
    );
};

export default Cousin;