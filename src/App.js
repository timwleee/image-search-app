import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';
import Result from './components/results/Result';
import './App.css';

class App extends Component {
  render() {
    return (

      <div>
        <NavBar />
        <Search />
        <Result />
      </div>

    );
  }
}

export default App;