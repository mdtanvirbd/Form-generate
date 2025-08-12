import React, { useState } from 'react';

const StatefulForm = () => {
    const [email,setEmail] = useState(null);
    const [name,setName] = useState(null)

    const [password, setPassword] = useState(null)
    const [error,setError] = useState('')

    const handleChangeName = e =>{
        setName(e.target.value)
    }


    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length < 6){
            setError('password must be 6 charecter or longer')
            
        }
        else{
                setError('');
            }
        console.log(name,email,password)

    }
      const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }
      const emailChange = e =>{
        console.log(e.target);
        setEmail(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                onChange={handleChangeName}
                type="text" name="name" />
                <br />
                <input onChange={emailChange}
                type="email" name="email"></input>
                <br />
                <input type="number"name="number"/>
                <br />
                <input
                onChange={handlePasswordChange}
                 type="password" name='password' />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
                
                
            </form>
            
        </div>
    );
};

export default StatefulForm;