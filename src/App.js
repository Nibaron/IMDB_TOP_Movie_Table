import React, { Component } from 'react';
import Navbar from './components/navbar.component';
import Movies from './components/movies.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Footer from './components/footer.component';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <>
      <Navbar />
      <hr/>
      <Movies />
      <Footer/>
      </>
    );
  }
}
 
export default App;
