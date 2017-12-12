import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
  } from 'react-router-dom';
import './App.css';
import Hello from './components/Hello';
import HelloYou from './components/HelloYou';
import Goodbye from './components/Goodbye';
import Contact from './components/Contact';
import Login from './components/Login';
import NoMatch from './components/NoMatch';

class App extends Component {
  state = {
    loggedIn: false
  }

  render() {
    return (
      <Router>
        <div className="App">

          <strong>Welcome to my website.</strong>

          <br/>
          <p>{ this.state.loggedIn && 'You are logged in' }</p>
          <button 
            className={this.state.loggedIn ? 'loggedIn' : ''}
            onClick={() => {this.setState(prevState => ({loggedIn: !prevState.loggedIn}))}} >
              { this.state.loggedIn ? 'Log Out' : 'Log In' }
          </button>
          <hr/>
          
          <Switch>
            <Route exact path="/" />
            <Route exact path="/hello" component={Hello} />
            <Route path="/hello/:name" component={HelloYou} />
            <Route path="/goodbye" component={Goodbye} />
            <Route path="/contact" component={() => {
              if (this.state.loggedIn){
                // All good
                return <Contact/>
              } else {
                // Not all good
                return <Redirect to="/login"/>
              }
            }} />
            <Route path="/login" component={Login} />
            <Route component={NoMatch}/>
          </Switch>
          <hr/>

          <Link to="/hello">Hello</Link> | 
          <Link to="/hello/you">Hello You</Link> | 
          <Link to="/goodbye">Goodbye</Link> | 
          <Link to="/contact">Contact</Link> 
        </div>
      </Router> 
    );
  }
}

export default App;
