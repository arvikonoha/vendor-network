import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from './components/header/Header'
import Profile from './components/profile/Profile'
import Home from './components/home/Home'
import './app.css'

function App() {
  return (
    <Router>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route path="/services" component={null}/>
      <Route path="/profile" component={Profile}/>
    </Router>
  );
}

export default App;
