import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';

import reactLogo from './assets/React-icon.png';

/**
 * this container is defined as class so you can modify state
 * when you add more stuff to it
 */
class App extends Component {
  /**
   * this is our statefull render
   * @return {objects} our stateless components
   */
  render() {
    return (
      <HashRouter>

        <div className="container">

          <header>
            <nav>
              <li><a href="#"><h1>Goodwin</h1></a></li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </nav>
            <button>Button</button>
          </header>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>

          <footer>
            <h3>Goodwin 0.0.1</h3>
          </footer>

        </div>

      </HashRouter>
    );
  }
}

export default App;
