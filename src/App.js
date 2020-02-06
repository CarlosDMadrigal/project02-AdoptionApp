import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/Home'
import Footer from './components/Footer'

function App() {
 return (
  <div className="App">
   <Router>
    <Header></Header>
    <Switch>
     <Route path="/" component={HomePage} />
    </Switch>
    <Footer></Footer>
   </Router>
  </div>
 )
}

export default App
