import React, {Component} from 'react';
import Header from "./components/Header";
import Contact from "./components/Contact";

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  render(){
   
    return ( 
    <div className="App">
      <Header branding="Contact Manager"/>
      <Contact name="John Doe" email="s.swadrn619@gmail.com" phone="914876685"/>
      <Contact name="Kim" email="Kim@gmail.com" phone="9148d76685"/>
    </div>
    );

  }
}

export default App;