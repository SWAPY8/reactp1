// src/WelcomeMessage.jsx
import React from 'react';

// The 'props' object contains all the properties passed to this component
function WelcomeMessage(props) {
  return (
    <h2>Welcome, {props.name} to our awesome React app!</h2>
  );
}

export default WelcomeMessage;

// You can also destructure props directly for cleaner code:
// function WelcomeMessage({ name }) {
//   return (
//     <h2>Welcome, {name} to our awesome React app!</h2>
//   );
// }