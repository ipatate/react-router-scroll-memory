import React, { Component } from 'react';
import { render } from 'react-dom';
import { 
  BrowserRouter
} from 'react-router-dom';
import App from './App';

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

render(<Main />, document.getElementById('root'));
