import React, { Component } from 'react';
import Navbar from './components/navbar.component';
import Movies from './components/movies.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <>
      <Navbar />
      <hr/>
      <Movies />
      </>
    );
  }
}
 
export default App;
