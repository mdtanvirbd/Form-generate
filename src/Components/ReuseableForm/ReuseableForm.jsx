import React from 'react';

const ReuseableForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <div>
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email"></input>
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ReuseableForm;