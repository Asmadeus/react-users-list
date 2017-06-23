import React, { Component } from 'react';

import { UsersTable } from '../components/UsersTable';
import { UserGroup } from '../components/UserGroup';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Tabs, Tab } from 'material-ui/Tabs';

import axios from 'axios';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


export default class Users extends Component {

  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get('/data.json')
      .then((response) => {
        console.log(response);
        this.setState({users: response.data});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <h2> Список пользователей </h2>
        <MuiThemeProvider>
          <Tabs>
            <Tab label="Все пользователи">
              <UsersTable data={this.state.users} />
            </Tab>
            <Tab label="По группам">
              <UserGroup data={this.state.users} />
            </Tab>
          </Tabs>
        </MuiThemeProvider>
      </div>
    )
  }
}