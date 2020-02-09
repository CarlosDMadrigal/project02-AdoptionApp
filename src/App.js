import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/Home'
import DogsListPage from './pages/Dogs'
import PetDetailPage from './pages/PetDetail'
import Footer from './components/Footer'

function App(props) {
  return (
    <div className='App'>
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/detail/:id' component={PetDetailPage} />
          <Route path='/dogs' component={DogsListPage} />
          <Route path='/' component={HomePage} />
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App
