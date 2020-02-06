import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/Home'

function App() {
 return (
  <div className="App">
   <Router>
    <Header></Header>
    <Switch>
     <Route path="/" component={HomePage} />
    </Switch>
   </Router>
  </div>
 )
}

export default App
