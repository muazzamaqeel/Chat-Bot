import React from 'react';
import '../styles/Chatbot.css'; // We'll create a corresponding CSS file for styling

function Chatbot() {
  return (
    <div className="chatbot-container">
      <h2>Welcome to the Chatbot</h2>
      <div className="chat-window">
        {/* Here you would implement the chat messages */}
        <p>This is where the chat will happen.</p>
      </div>
      <input type="text" placeholder="Type a message..." className="chat-input" />
    </div>
  );
}

export default Chatbot;
