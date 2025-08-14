import React from 'react';
import useInputState from '../../Hooks/useInputState';

const HookForm = () => {
    const [name, handleChange] = useInputState('Rojoni');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form data", name);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    value={name}
                    onChange={handleChange}
                />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;
