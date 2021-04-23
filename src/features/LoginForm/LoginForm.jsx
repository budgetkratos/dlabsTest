import React, { useState } from 'react';
import './LoginForm.css';

export function LoginForm(props) {
    const [details, setDetails ] = useState({email: '', password: ''});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
 
    const {Login, error } = props;

    return (
        <div className='login-wrapper'>
            <form onSubmit={submitHandler}>
                    <h2>Login</h2>
                    <div className='form-group'>
                        <input type='email' name='email' id='email' placeholder='E-Mail' onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                    </div>
                    <div className='form-group'>
                        <input type='password' name='password' id='password' placeholder='Password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>
                    <input type="submit" value="LOGIN"/>
                    {(error !== '') ? (<div className='error'>{error}</div>):''}
            </form>
        </div>
    )
}