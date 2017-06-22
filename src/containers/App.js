import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Users from './Users'

class App extends Component {
  render() {
    return (
      <main>
        <div><Link to='/'>Главная</Link></div>
        <div><Link to='/users'>Пользователи</Link></div>
        <br/> <br/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/users' component={Users} />
        </Switch>
      </main>
    );
  }
}

export default App;