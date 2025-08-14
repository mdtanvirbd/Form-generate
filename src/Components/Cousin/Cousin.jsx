import React from 'react';
import Speical from '../Speical/Speical';

const Cousin = ({name,asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
             <section>
                {asset && <Speical asset={asset} />}
            </section>

        </div>
    );
};

export default Cousin;