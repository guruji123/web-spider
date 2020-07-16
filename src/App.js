
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignupForm from './Client/SignupForm';
import LogIn from './Client/LogIn';
import Index from './Folder/Index'
import Navbar from './Client/Navbar'
import './App.css';



class App extends Component {
  render() {
  return (
    <div className="container-fluid">
    
   
      <BrowserRouter>
      <Navbar />
       
      <div className="container">
      <Switch>
        <Route exact path='/' component={SignupForm} />
        <Route path='/login' component={LogIn} />
        <Route path='/fileManager' component={Index} />
        
      </Switch>
      
      </div>
    </BrowserRouter>
      
    </div>
    )
  }
}

export default App;


