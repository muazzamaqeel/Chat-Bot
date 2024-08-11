import React, { useState } from 'react';
import Login from './Login';
import Chatbot from './Chatbot';
import '../styles/App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? <Chatbot /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
