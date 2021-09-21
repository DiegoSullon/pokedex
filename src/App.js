import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './pages/main/Main'
import Pokemon from './pages/pokemon/Pokemon'
import { GlobalStyle } from './styles/GlobalStyle'
const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/:id' component={Pokemon} />
      </Switch>
    </Router>
  )
}

export default App
