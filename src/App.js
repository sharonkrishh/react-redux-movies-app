import React, { Component } from 'react'
import { Provider } from 'react-redux'
;import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchForm from './components/SearchForm';
import store from './store';
import './App.css';
import MovieContainer from './components/MovieContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <Provider store={store}>
         <div className="App">
          <Navbar/>
          <SearchForm/>
          <MovieContainer/>
          <Footer/>
        </div>
      </Provider>
     
    )
  }
}

export default App;

