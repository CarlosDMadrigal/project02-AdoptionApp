import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/Home'
import DogsListPage from './pages/Dogs'
import Footer from './components/Footer'

function App(props) {
  return (
    <div className='App'>
      <Router>
        <Header history={props.history}></Header>
        <Switch>
          <Route path='/' component={HomePage} />
          <Route path='/dogs' component={DogsListPage} />
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App
