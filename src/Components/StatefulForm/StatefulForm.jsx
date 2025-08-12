import React, { useState } from 'react';

const StatefulForm = () => {
    const [email,setEmail] = useState(null);


    const handleSubmit = e =>{
        e.preventDefault();

    }
    const emailChange = e =>{
        console.log(e.target);
        setEmail(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input onChange={emailChange}
                type="email" name="email"></input>
                <br />
                <input type="number"name="number"/>
                <br />
                <input type="submit" value="Submit" />
                
                
            </form>
            
        </div>
    );
};

export default StatefulForm;