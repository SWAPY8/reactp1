// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './AuthContext.jsx'; // Import the AuthProvider

<<<<<<< HEAD
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> {/* Wrap your App with the AuthProvider */}
      <App />
    </AuthProvider>
  </React.StrictMode>,
);
=======
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
 
>>>>>>> f8e336ff9f1c4233e81537ccf3a07731cfcd0d6d
