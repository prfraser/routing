import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
  } from 'react-router-dom';
import './App.css';

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

const Hello = () => (
  <p>Hello!</p>
)

const HelloYou = (props) => (
  <p>Hello {props.match.params.name}!</p>
)

const Goodbye = () => (
  <p>Goodbye!</p>
)

const Contact = () => (
  <p>Contact!</p>
)

const Login = () => (
  <p>Login form goes here:</p>
)

export default App;
