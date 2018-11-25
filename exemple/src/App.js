import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import ScrollMemory from 'react-router-scroll-memory';
import Home from './Home';
import Details from './Details';
import About from './About';
// eslint-disable-next-line
const GlobalStyle = createGlobalStyle`
  body {
    font-family: Helvetica, Arial, sans-serif;
    margin: 0;
  }
  nav {
    display: flex;
    padding:1rem;
    a {
      margin: .5rem;
    }
  }
`;

const App = () => (
  <div>
    <GlobalStyle />
    <ScrollMemory />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/detail/:id" component={Details} />
      <Route path="/about" component={About} />
    </Switch>
  </div>
);

export default App;
