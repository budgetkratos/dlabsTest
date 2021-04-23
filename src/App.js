import React, {useState} from 'react';
import './features/css/Tabs.css'
import './App.css';
import { Tabs } from './features/Tabs';
import {LoginForm} from './features/LoginForm/LoginForm';


function App() {

  const credEmail = 'borgoth@mordos.com';
  const credPassword = '12bindthem';


  const [user, setUser] = useState({email: 'borgoth@mordos.com', password: ''});
  const [error, setError] = useState('');

  const Login = details => {
    if(details.email === credEmail  && details.password === credPassword) {
      setUser({ email: details.email, password: details.password});
    } else {
      setError('Speak friend-o and enter!');
    }
  }

  return (
    <div className="App">
        {(user.email === credEmail && user.password === credPassword) ? <Tabs />:<LoginForm Login={Login} error={error}/>}
    </div>
  );
}
    
export default App;