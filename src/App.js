import React, { Component } from 'react'
import { Provider } from 'react-redux';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import store from './store';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Movie from './components/Movie';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <Provider store={store}>
      <Router>
         <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/movie/:id' component={Movie}/>
          </Switch>
          <Footer/>
        </div>
        </Router>
      </Provider>
     
    )
  }
}

export default App;

