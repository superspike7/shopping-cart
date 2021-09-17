import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import Nav from './Nav'

function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Shop" component={Shop}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
