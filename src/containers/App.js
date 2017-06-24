import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import AppBar from 'material-ui/AppBar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './Home'
import Users from './Users'

class App extends Component {

  render() {
    const styles = {
      appBar: {
        flexWrap: 'wrap',
        marginBottom: '20px'
      },
      link: {
        width: '50%',
        color: 'white',
        padding: '20px',
        textAlign: 'center'
      }
    };

    return (
      <main>
        <MuiThemeProvider>
          <AppBar style={styles.appBar} showMenuIconButton={false}>
            <Link style={styles.link} to='/'>Главная</Link>
            <Link style={styles.link} to='/users'>Пользователи</Link>
          </AppBar>
        </MuiThemeProvider>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/users' component={Users} />
        </Switch>
      </main>
    );
  }
}

export default App;