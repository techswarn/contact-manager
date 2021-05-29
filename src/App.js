import React, {Component} from 'react';
import Header from "./components/Header";
import Contacts from "./components/Contacts";

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  render(){
   
    return ( 
    <div className="App">
      <Header branding="Contact Manager"/>
      <Contacts/>
    </div>
    );

  }
}

export default App;