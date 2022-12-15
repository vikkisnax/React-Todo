import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// ReactDOM.render(<App />, document.getElementById('root'));

const rootElement = document.getElementById("root");

// You'll need to wrap <App /> for routing to work
ReactDOM.render(
    <Router>
        <App />
    </Router>, rootElement);


//so App will render the components and show them on screen